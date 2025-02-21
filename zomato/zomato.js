
document.addEventListener('DOMContentLoaded', function() {

    // Button References
    const addRestaurantBtn = document.getElementById("addRestaurantBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const loginBtn = document.getElementById("loginBtn");


    // Create the Add Restaurant Form
    const addRestaurantForm = `
        <div class="form-container">
            <h2>Add Restaurant</h2>
            <form id="addRestaurantForm">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required><br>
                
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required><br>

                <label for="restaurantName">Restaurant Name:</label>
                <input type="text" id="restaurantName" name="restaurantName" required><br>

                <label for="startDate">Restaurant Start Date:</label>
                <input type="date" id="startDate" name="startDate" required><br>

                <label for="panNumber">PAN Number:</label>
                <input type="text" id="panNumber" name="panNumber" required><br>

                <label for="mobileNumber">Mobile Number:</label>
                <input type="text" id="mobileNumber" name="mobileNumber" required><br>

                <button type="submit">Submit</button>
            </form>
             <button id="backToHomeBtn">Back to Home</button>
        </div>
    `;


    const signUpForm = `
        <div class="form-container">
            <h2>Sign Up</h2>
            <form id="signUpForm">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required><br>

                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>

                <label for="mobileNumber">Mobile Number:</label>
                <input type="text" id="mobileNumber" name="mobileNumber" required><br>

                <button type="submit">Sign up</button>
            </form>
             <button id="backToHomeBtn">Back to Home</button>
        </div>
    `;


    const loginForm = `
    <div class="form-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>

            <button type="submit">Login</button>
        </form>
         <button id="backToHomeBtn">Back to Home</button>
    </div>
`;

   
    addRestaurantBtn.addEventListener("click", function() {
      
        document.body.innerHTML = addRestaurantForm;

        const backToHomeBtn = document.getElementById("backToHomeBtn");
        backToHomeBtn.addEventListener("click", function() {
           
            window.location.reload();
        });
    });

 
    signUpBtn.addEventListener("click", function() {
    
        document.body.innerHTML = signUpForm;
        const backToHomeBtn = document.getElementById("backToHomeBtn");
        backToHomeBtn.addEventListener("click", function() {
         
            window.location.reload();
        });
    });


    loginBtn.addEventListener("click", function() {
      
        document.body.innerHTML = loginForm;
        const backToHomeBtn = document.getElementById("backToHomeBtn");
        backToHomeBtn.addEventListener("click", function() {
           
            window.location.reload();
        });
    });



  


    const orderOnlineCard = document.getElementById("orderOnlineCard");
    const diningCard = document.getElementById("diningCard");
    const liveEventsCard = document.getElementById("liveEventsCard");

    orderOnlineCard.addEventListener('click', function() {
        alert('Order Online clicked');
       
    });

    diningCard.addEventListener('click', function() {
        alert('Dining clicked');
       
    });

    liveEventsCard.addEventListener('click', function() {
        alert('Live Events clicked');
       
    });




    

    const popularCuisinesBtn = document.getElementById("popularCuisinesBtn");
    const popularRestaurantTypesBtn = document.getElementById("popularRestaurantTypesBtn");
    const topRestaurantChainBtn = document.getElementById("topRestaurantChainBtn");
    const citiesWeDeliverToBtn = document.getElementById("citiesWeDeliverToBtn");

  
    const popularCuisinesText = document.getElementById("popularCuisinesText");
    const popularRestaurantTypesText = document.getElementById("popularRestaurantTypesText");
    const topRestaurantChainText = document.getElementById("topRestaurantChainText");
    const citiesWeDeliverToText = document.getElementById("citiesWeDeliverToText");

 
    popularCuisinesBtn.addEventListener("click", function() {
        popularCuisinesText.style.display = "block";
        popularCuisinesText.textContent = "Bakery near me .Beverages near me .Biryani near me .Burger near me .Chinese near me .Desserts near me .Hyderabadi near me .Ice Cream near me .Kebab near me .Mughlai near me .North Indian near me .Pizza near me .Sandwich near me .Seafood near me .Shake near me .Shawarma near me .Sichuan near me .South Indian near me .Street near me .Tea near me";
    });

    popularRestaurantTypesBtn.addEventListener("click", function() {
        popularRestaurantTypesText.style.display = "block";
        popularRestaurantTypesText.textContent = "Bakeries near me .Bars near me .Beverage Shops near me .Bhojanalya near me .Cafés near me .Casual Dining near me .Clubs near me .Cocktail Bars near me .Confectioneries near me .Dessert Parlors near me .Dhabas near me .Fine Dining near me .Food Courts near me .Food Trucks near me .Kiosks near me .Lounges near me .Microbreweries near me .Paan Shop near me .Quick Bites near me .Sweet Shops near me";
    });

    topRestaurantChainBtn.addEventListener("click", function() {
        topRestaurantChainText.style.display = "block";
        topRestaurantChainText.textContent = "BikanervalaBurger              KingBurger           SinghDomino's       KFCKrispy        KremeMcDonald's        Pizza Hut       Subway           WOW! Momo";
    });

    citiesWeDeliverToBtn.addEventListener("click", function() {
        citiesWeDeliverToText.style.display = "block";
        citiesWeDeliverToText.textContent = "Delhi Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow Kochi Jaipur Ahmedabad Chandigarh Goa Indore Gangtok Nashi kOoty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal Ranchi Visakhapatnam Bhubaneswar Coimbatore Mangalore Vadodara Nagpur Agra Dehradun Mysore Puducherry Surat Varanasi Patna Udaipur Srinagar Khajuraho Neemrana Cuttack Trivandrum Haridwar Leh Pushkar Rajkot Madurai Kozhikode Alappuzha Thrissur Manipal Vijayawada Jodhpur Kota Ajmer Mussoorie Rishikesh Jalandhar Jammu Manali    All delivery cities"
    });




       
        const aboutBtn = document.getElementById('aboutBtn');
        const whoWeAreBtn = document.getElementById('whoWeAreBtn');
        const blogBtn = document.getElementById('blogBtn');
        const workWithUsBtn = document.getElementById('workWithUsBtn');
        const InvestorRelationsBtn = document.getElementById('investorRelationsBtn');
        const reportFraudBtn = document.getElementById('reportFraudBtn');
        const pressKitBtn = document.getElementById('pressKitBtn');
        const contactUsBtn = document.getElementById('contactUsBtn');
    
        const zomaverseBtn = document.getElementById('zomaverseBtn');
        const zomatoBtn = document.getElementById('zomatoBtn');
        const blinkitBtn = document.getElementById('blinkitBtn');
        const feedingIndiaBtn = document.getElementById('feedingIndiaBtn');
        const hyperpureBtn = document.getElementById('hyperpureBtn');
        const zomatoLiveBtn = document.getElementById('zomatoLiveBtn');
        const zomalandBtn = document.getElementById('zomalandBtn');
        const weatherUnionBtn = document.getElementById('weatherUnionBtn');
    
        const forRestaurantsBtn = document.getElementById('forRestaurantsBtn');
        const partnerWithUsBtn = document.getElementById('partnerWithUsBtn');
        const appsForYouBtn = document.getElementById('appsForYouBtn');
    
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        const privacyBtn = document.getElementById('privacyBtn');
        const securityBtn = document.getElementById('securityBtn');
        const termsBtn = document.getElementById('termsBtn');
    
        const youtubeBtn = document.getElementById('youtubeBtn');
        const facebookBtn = document.getElementById('facebookBtn');
        const instagramBtn = document.getElementById('instagramBtn');
        const linkedinBtn = document.getElementById('linkedinBtn');
        const twitterBtn = document.getElementById('twitterBtn');
    
        const googlePlayBtn = document.getElementById('googlePlayBtn');
        const appStoreBtn = document.getElementById('appStoreBtn');
    
    
        function showClickedText(elementId, text) {
            const textContainer = document.createElement('p');
            textContainer.textContent = text;
            const element = document.getElementById(elementId);
            element.appendChild(textContainer);
            element.classList.add('clicked');
        }
    
    
        aboutBtn.addEventListener('click', function() {
            console.log('Clicked on About Zomato');
         
        });
    
        whoWeAreBtn.addEventListener('click', function() {
            console.log('Clicked on Who We Are');
           
        });
    
        blogBtn.addEventListener('click', function() {
            console.log('Clicked on Blog');
           
        });
    
        workWithUsBtn.addEventListener('click', function() {
            console.log('Clicked on Work With Us');
         
        });
    
        InvestorRelationsBtn.addEventListener('click', function() {
            console.log('Clicked on Investor Relations');
        
        });
    
        reportFraudBtn.addEventListener('click', function() {
            console.log('Clicked on Report Fraud');
          
        });
    
        pressKitBtn.addEventListener('click', function() {
            console.log('Clicked on Press Kit');
         
        });
    
        contactUsBtn.addEventListener('click', function() {
            console.log('Clicked on Contact Us');
      
        });
    
      
        zomatoBtn.addEventListener('click', function() {
            console.log('Clicked on Zomato');
           
        });
    
       
    
    

});
