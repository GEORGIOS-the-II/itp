


# What I Did:

- I created an product expiration alert app.

- Even If I could not make it all by myself at the end I wanted to be able to understand and be able to explain all of the code. 

#How I Did it:

#### Step 1: Learn Swift UI

*  Spent many hours learning Swift language from [100 DAYS OF SwiftUI](https://www.hackingwithswift.com/100/swiftui). This took about two weeks of just learning, no coding. I also occasionaly looked up, mostly towards the finalization of the app, the [Apple Developer - SwiftUI](https://developer.apple.com/swiftui/) which was harder and required you knowing code. 

#### Step 2: Learn XCode

* This is basically Apple's "comprehansive Integrated Development Enviroment(IDE)" which is basically the app where you create apps for all apple platfroms.
* To learn it I initially looked up some videos on youtube but I actually learned by using it.  

#### Step 3:

* Started having doubts about if its actually possible so I asked [Claude](https://claude.ai) to create the app that I wanted just to see how difficult it looked. 
![Screenshot 2025 12 07 At 12.27.40 PM](Screenshot%202025-12-07%20at%2012.27.40 PM.png)
![Screenshot 2025 12 07 At 12.27.50 PM](Screenshot%202025-12-07%20at%2012.27.50 PM.png)
After seeing the basic structure of the code I put it aside and didnt look at it until later. 

#### Step 4:

* Started writing the code using the AI's as the base. 

### And Here Is Where The Nice Stuff Start


- After getting the basic code by Claude, the basic functionallity was there but It looked bad and I wanted it a bit different. So to get it where I wanted I set a rule: To use AI when tried enough times by myself to the point of despiration. However the closest I was to the deadline the easiest I would use it so I can make it in time obviously. 

#### Step 5: Editing the App

##### Each step has a number that is linked to my solution.

* Coloring fonts. This was kind of easy, I used modifiers that I learned in 100 Days... 
 
* 1.1 Trying to color background of Navigation Stack, too hard :/

* 1.2 Found color codes from [ralfebert](https://www.ralfebert.com/ios/swift-uikit-uicolor-picker/=) website.

* 1.3 Tried to change title color: (`.navigationTitle("Neat")`)

* 1.4 Rewoked the "Add" button, put it on the bottom, colored, put in a ZStack, and more. 
							 
							 
							 
							 
							   `.font(.system(size: 24, weight: .semibold))
                                .foregroundColor(.white)
                                .frame(width: 60, height: 60)
                                .background(Color.init(#colorLiteral(red: 0.9529, green: 0.8, blue: 0.749, alpha: 1)))
                                .clipShape(Circle())
                                .shadow(color: .black.opacity(0.3), radius: 8, x: 0, y: 4)
                                .opacity(0.65)
                         	    .padding(.trailing, 20)
                        		.padding(.bottom, 20)`

* Changed Title.

* Changed notification days to 2. 

* Changed Expiration Date in main view to show days remaining by using a daysLeft func. Then added the infleciton:true in order to change "day" to plurar when needed. Got some help from Claude for how I can calcuate using the Calendar.

![Screenshot 2025 12 07 At 12.59.03 PM](Screenshot%202025-12-07%20at%2012.59.03 PM.png)

	   `func daysLeft(for product: Product) -> Int {
        let currentDate = Calendar.current.startOfDay(for: Date())
        let productDate = Calendar.current.startOfDay(for: product.expirationDate)
        let difference = Calendar.current.dateComponents([.day], from: currentDate, to: productDate)        
        return difference.day ?? 0`

* Changed notifications form being alerts for each product seperatly to being in a notification in general any time something is two days from expiring. Just changed the notification text.



## Troubleshotting:

* For most problems I visited Apple Developer - SwiftUI](https://developer.apple.com/swiftui/), [Stack OverFlow](https://stackoverflow.com/) websites before going to AI so I can learn better. 

* 1.1: Tried putting Color.red and .background(.red) in: NavStack, ZStack, List. Didnt work. Gave up

* 1.2: Couldnt convert ColorUI type to Color - SOLUTION FOUND: put ColorUI after initializer: `.foregroundColor(.init(#colorLiteral(red: 0, green: 0.302, blue: 0.6078, alpha: 1) /* #004d9b */))`

* 1.3: added extension in `ContentView` with ClaudeAI. Had to troubleshoot a little bit with some {} mess. 

![Screenshot 2025 12 07 At 12.46.38 PM](Screenshot%202025-12-07%20at%2012.46.38 PM.png)

* 1.4: Finally I managed to do that by getting it out of the .toolbar{} and putting it in an ZStack{} so its in front of the list and then an VStack() so its on the bottom. 

* I finally tried maybe adding the camera scanner to add the expiration date, but before doing that i tested my camers scaner on products but because the date isnt easily readable it wouldnt work in the app as well. 

## Future Ideas:


* Color coding Expiration dates based on urgency

* What happens to expired products?

* Making notification settings more costumizable. When do you want to get notified. How many times?

* Maybe adding a drop down list in the add product view for items frequently bought ex. Milk, Cheese, Meat, etc. 
* Also having the option of a countdown instead of a calendar in case of a cooked food or in general something that expires in x amoubt of days. 







