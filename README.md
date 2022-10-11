#Electro Ecomm

1.Introduction
    1. What is being built.
    2. What is being used.
    3. Technologies being used.
        - Install Tools
        - VS Code
        - Chrome
        - Git
        - Node.js
2.Steps taken to create app and execute project
        - Create Next App
        - npx create-next-app
        - add @mui library
    Publish to github
        - create githb account
        - push to github from vs.code
3.Create Website Layout
        - Add header
        - Add main
        - Add footer
4.Connect to Sanity.io | Backend 
        - install sanity
        - initialize sanity
        - create product model
        - insert sample data to product model
    List Products
        - add localhost:3000 to the CORS origins in sanity
        - fetch products from sanity
        - render them in the screen
5.Create Product Details Screen
        - add [slug].js to product folder
        - create component
        - get slug from the url
        - fetch product from sanity client
        - render product image, info
        - show add to cart button
6.Create React Context
        define Context, Store and reducer
        set darkMode flag
        use it on layout
7.Implement Add to cart
        - define cart in context
        - dispatch add to cart action
        - set click event handler for button
8.Create Cart Screen
        - get cart items from context
        - render in the screen
        - show cart items in the header menu
        - implement add to cart in home page
9.Display Cart Badge In Header Menu
        - add cart link to header
        - show cart items badge in header
        - implement add to cart in home page
10.Create Login and Register Screen
        - create login form
        - create register for
        - Implement User Register API
        - create user model
        - create user create route api
        - use it in the register screen
        - Implement User Login API
        - create login api
        - use login api in login screen
        - implement logout
11.Create Shipping Screen
        - create shipping component
        - get address fields
        - implement submit handler
        - handle redirect
12.Create Payment Screen
        - create payment component
        - get payment method
        - implement submit handler
13.Create Place Order Screen
        - create place order component
        - preview order
        - create order model in sanity
        - create order on place order click handler
        - Create Order Screen
        - create order component
        - display order information
        Pay Order By PayPal
        - generate paypal client id
        - create api to return client id
        - install react-paypal-js
        - use PayPalScriptProvider in index.js
        - use usePayPalScriptReducer in Order Screen
        - implement loadPaypalScript function
        - render paypal button
        - implement onApprove payment function
        - create pay order api in backend
        Display Order History
        - create order history component
        - load orders of current user
        - render orders in the screen
14.Update User Profile
        - create profile screen
        - create input forms for name, email
        - update user info
15.Create Search Screen
        - create search screen
        - implement search filters
        - list products
16.Publish on Vercel
        - create vercel account
        - connect it to gitub
        - add vercel domain to allow origin in sanity
        - publish result# sanity-ecomm

https://electoecomm.sanity.studio/desk | backend

https://sanity-ecomm.vercel.app/ | frontend
