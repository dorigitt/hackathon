function showAvtoPark() {
    document.getElementById('order').scrollIntoView({ behavior: "smooth" });
}

const show = document.getElementById('main-button');
show.addEventListener('click', showAvtoPark);

const buttons = document.querySelectorAll('.order-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({ behavior: "smooth" });
    }
}

function fillGaps() {
    if (document.getElementById('name').value === "") {
        alert("Input your name");
    } else if (document.getElementById('phone').value === "") {
        alert("Input your number");
    } else if (document.getElementById('car').value === "") {
        alert("Input the place");
    } else {
        alert("Thank you, we'll contact with you soon");
    }
}

const table = document.getElementById("price-button");
table.addEventListener('click', fillGaps);




function sendReview() {
    
    var reviewText = document.getElementById('txt').value;

   
    if (reviewText.trim() !== '') {
        
        alert('Review is sent');

        
        document.querySelector('.cust-review').value = '';
    } else {
       
        alert('Please enter a review before sending.');
    }
}

function redirectToAnotherPage1() {
    
    var newPageUrl = "ashana-menu.html";
    
    
    window.location.href = newPageUrl;
}

function redirectToAnotherPage2() {
    
    var newPageUrl = "red-canteen-menu.html";
    
    
    window.location.href = newPageUrl;
}

function redirectToAnotherPage3() {
    
    var newPageUrl = "fast-food-menu.html";
    
    
    window.location.href = newPageUrl;
}

