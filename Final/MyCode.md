import SwiftUI
import UserNotifications

// MARK: - Product Model
struct Product: Identifiable, Codable {
    let id: UUID
    var name: String
    var expirationDate: Date
    
    init(id: UUID = UUID(), name: String, expirationDate: Date) {
        self.id = id
        self.name = name
        self.expirationDate = expirationDate
    }
}

// MARK: - Main App
@main
struct ExpirationTrackerApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .onAppear {
                    requestNotificationPermission()  
                }
        }
    }
    
    func requestNotificationPermission() {
        UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
            if granted {
                print("Notification permission granted")
            }
        }
    }
}

// MARK: - Main View
struct ContentView: View {
    @State private var products: [Product] = []
    @State private var showingAddProduct = false
    
    var body: some View {
        NavigationView {
            List {
                ForEach(products) { product in
                    VStack(alignment: .leading) {
                        Text(product.name)
                            .font(.headline)
                        Text("Expires: \(product.expirationDate, style: .date)")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                }
                .onDelete(perform: deleteProduct)
            }
            .navigationTitle("Products")
            .toolbar {
                Button(action: { showingAddProduct = true }) {
                    Image(systemName: "plus")
                }
            }
            .sheet(isPresented: $showingAddProduct) {
                AddProductView(products: $products)
            }
            .onAppear(perform: loadProducts)
        }
    }
    
    func loadProducts() {
        if let data = UserDefaults.standard.data(forKey: "products"),
           let decoded = try? JSONDecoder().decode([Product].self, from: data) {
            products = decoded
        }
    }
    
    func deleteProduct(at offsets: IndexSet) {
        for index in offsets {
            cancelNotification(for: products[index])
        }
        products.remove(atOffsets: offsets)
        saveProducts()
    }
    
    func saveProducts() {
        if let encoded = try? JSONEncoder().encode(products) {
            UserDefaults.standard.set(encoded, forKey: "products")
        }
    }
    
    func cancelNotification(for product: Product) {
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [product.id.uuidString])
    }
}

// MARK: - Add Product View
struct AddProductView: View {
    @Environment(\.dismiss) var dismiss
    @Binding var products: [Product]
    
    @State private var productName = ""
    @State private var expirationDate = Date()
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Product Details")) {
                    TextField("Product Name", text: $productName)
                    DatePicker("Expiration Date", selection: $expirationDate, displayedComponents: .date)
                }
            }
            .navigationTitle("Add Product")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") {
                        dismiss()
                    }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("Save") {
                        saveProduct()
                    }
                    .disabled(productName.isEmpty)
                }
            }
        }
    }
    
    func saveProduct() {
        let product = Product(name: productName, expirationDate: expirationDate)
        products.append(product)
        saveProducts()
        scheduleNotification(for: product)
        dismiss()
    }
    
    func saveProducts() {
        if let encoded = try? JSONEncoder().encode(products) {
            UserDefaults.standard.set(encoded, forKey: "products")
        }
    }
    
    func scheduleNotification(for product: Product) {
        let content = UNMutableNotificationContent()
        content.title = "Product Expiring Soon"
        content.body = "\(product.name) expires tomorrow!"
        content.sound = .default
        
        // Calculate notification date (1 day before expiration at 9 AM)
        var components = Calendar.current.dateComponents([.year, .month, .day], from: product.expirationDate)
        components.day! -= 1
        components.hour = 9
        components.minute = 0
        
        let trigger = UNCalendarNotificationTrigger(dateMatching: components, repeats: false)
        let request = UNNotificationRequest(identifier: product.id.uuidString, content: content, trigger: trigger)
        
        UNUserNotificationCenter.current().add(request) { error in
            if let error = error {
                print("Error scheduling notification: \(error)")
            }
        }
    }
}
