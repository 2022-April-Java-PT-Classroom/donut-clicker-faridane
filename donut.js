

function greeting() {
    firstName = prompt("Your name please?");
    document.querySelector('#title').innerText = "Welcome " + firstName + " To Fred the Baker Baking Company!";
}


/*-----------------------|
| CREATE DONUTS SECTION  |
 |-----------------------*/

function addDonut() {
    document.querySelector('#board').innerHTML = "<img src='images/donut.jpg'/>";
    
    let element = document.querySelector('#donut_count');
    let donutCount = element.innerHTML;
    donutCount++;
    document.querySelector('#donut_count').innerHTML = (donutCount);

    if (donutCount < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
        

    } else if (donutCount >= 10 && donutCount <100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = true;
    } 
    
        if (donutCount < 100) {
            document.getElementById('autoclick').disabled = true;
            document.getElementById('multiply').disabled = false;
        
        } else if (donutCount >= 100) {
            document.getElementById('autoclick').disabled = false;
            document.getElementById('multiply').disabled = false;
    } 
    
    
}


/*--------------|
| MENU SECTION  |
 ---------------*/

function company(){
    alert("Fred the Baker Baking Company is a lovely donut making house.");
}
function fred() {
    alert("Fred the Baker is tired of making real donuts and is ready to retire. He needs our help to keep his love of donuts alive. That is the reason why He wants us to create a game that uses button clicks to create virtual donuts for the world to enjoy." );
}
function contact() {
    document.querySelector(".contact").innerHTML = "<strong>Email Us</strong>: <em>game_contact1234@donut.play</em><br><strong>Call</strong>: +1-555-555-5555";
}

function menu() {
    document.querySelector('.about').innerHTML = 'About The Company'
    document.querySelector('.fred').innerHTML = 'Game Background'
    document.querySelector('.contact').innerHTML = 'Contact'
}

function instruction() {
    document.querySelector('.navbar2').innerHTML = "Follow these steps:<br><br>1. Click on 'Create Donut'to start the game<br><br> 2. Keep clicking to reach the count of 100 Donuts minimum<br><br> 3. Purchase 'auto clickers' or 'donut multipliers' to make more donut fast!<br><button onclick='moreDisplay()'>More</button><br><br> "; 
    
}

function moreDisplay() {
    alert(" Collect at least 10 donuts and start buying donuts multipliers. For each Donut Multiplier purchased, the cost of the next Donut Multiplier increases by 10%. Donut Multipliers increase the value of both manual and Auto Clicks by 20% for each Donut Multiplier purchased.");
}


/*----------------------|
| AUTO CLICKER SECTION  |
|---------------------*/

//          __________________
//~~~~~~~~~  BUY AUTO CLICKER    ~~~~~~~~~~~~~~~

const timerText = document.getElementById("donut_count");
const btnStart = document.getElementById("autoclick");
const btnStop = document.getElementById("resetBtn");

// let count = 0;
let donutCount2 = 0;
let intervalID;


btnStart.addEventListener("click", function () {
    intervalID = setInterval(function () {       
        //count += 5;  
        donutCount2 += 5;
        // timerText.textContent = count;
        timerText.textContent = donutCount2;

    //     if (count < 10) {
    //     document.getElementById('multiply').disabled = true;
    //     document.getElementById('autoclick').disabled = true;
    // }
    // if (count >= 10 && count <15) {
    //     document.getElementById('multiply').disabled = false;
    //     document.getElementById('autoclick').disabled = true;
    // } 
    // if (count >= 15) {
    //     document.getElementById('multiply').disabled = false;
    //     document.getElementById('autoclick').disabled = false;
    // }
    
    if (donutCount2 < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
    }
    if (donutCount2 >= 10 && donutCount2 <100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = true;
    } 
    if (donutCount2 >= 100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = false;
    }
    
    }, 1000);
    
});

btnStop.addEventListener("click", function () {
    clearInterval(intervalID);
});
  
//~~~~~~~~~~~~~    END BUY AUTO CLICKER      ~~~~~~~~~~~~~~~~~~
//                 _____________________


function autoClicker() {
    document.querySelector('#autoclick').innerHTML = "Buy 1 Auto Clicker";
    
    
}  

function autoClickerEnableDisable() {
    let element2 = document.querySelector('#donut_count');
    let donutCount2 = element2.innerHTML;
    donutCount2 -= 100;
    document.querySelector('#donut_count').innerHTML = (donutCount2);

    if (donutCount2 < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
    }
    if (donutCount2 >= 10 && donutCount2 <100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = true;
    } 
    if (donutCount2 >= 100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = false;
    }
    btnStop.addEventListener("click", function () {
    clearInterval(intervalID);
    });   

}


function purchaseAutoClicker() { 
    let element1 = document.querySelector('#total_auto_clicker');
    let donutCount1 = element1.innerHTML;
    donutCount1++;
    document.querySelector('#total_auto_clicker').innerHTML = (donutCount1);

    autoClickerEnableDisable();
    
}

function purchaseAutoClicker2() { 
    let element1 = document.querySelector('#total_auto_clicker');
    let donutCount2 = element1.innerHTML;
    donutCount2++;
    document.querySelector('#total_auto_clicker').innerHTML = (donutCount2);

    if (donutCount2 < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
    }
    if (donutCount2 >= 10 && donutCount2 <100) {
        document.getElementById('multiply').disabled = false;

        document.getElementById('autoclick').disabled = true;
    } 
    if (donutCount2 >= 100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = false;
    }
    
}


/*--------------------------|
| DONUT MULTIPLIER SECTION  |
|--------------------------*/

function donutMultiplier() {
    document.querySelector('#multiply').innerHTML = "Buy 1 Donut Multiplier";
}

function multiplierEnableDisable() {
    let element = document.querySelector('#donut_count');
    let donutCount = element.innerHTML;
    donutCount -= 10;
    document.querySelector('#donut_count').innerHTML = (donutCount);


    if (donutCount < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
    }
    if (donutCount >= 10 && donutCount <100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = true;
        
    } 
    if (donutCount >= 100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = false;
    }
}


const timerText1 = document.getElementById("donut_count");
const btnStart1 = document.getElementById("makeDonut");
const btnStop1 = document.getElementById("resetBtn");

let count1 = 0;
    
function donutCountIncreaseWithMultiplierPurchased() {
    
    btnStart1.addEventListener("click", function () {
    
        count1 += 3;
        
        timerText1.textContent = count1;
    
    });
}

function purchaseDonutMultiplier() { 
    let element1 = document.querySelector('#total_donut_multiplier');
    let donutCount1 = element1.innerHTML;
    donutCount1++;
    document.querySelector('#total_donut_multiplier').innerHTML = (donutCount1);

    multiplierEnableDisable();
    donutCountIncreaseWithMultiplierPurchased();
    
}


/*--------------|
| RESET SECTION  |
|---------------*/

function addDonutAfterReset() {
    
     btnStart1.addEventListener("click", () => {
    let element = document.querySelector('#donut_count');
    let donutCount = element.innerHTML;
    donutCount++;
    document.querySelector('#donut_count').innerHTML = (donutCount);
    })
}

function resetGame() {
    alert("You've clicked on RESET !");
    document.getElementById("total_auto_clicker").innerHTML = '00';
    document.getElementById("total_donut_multiplier").innerHTML = '00';
    document.getElementById("donut_count").innerHTML = '00'; 

    let element = document.querySelector('#donut_count');
    let donutCount2 = element.innerHTML;
    donutCount2;
    document.querySelector('#donut_count').innerHTML = (donutCount2);
    
    if (donutCount2 < 10) {
        document.getElementById('multiply').disabled = true;
        document.getElementById('autoclick').disabled = true;
    }
    if (donutCount2 >= 10 && donutCount2 <100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = true;
    } 
    if (donutCount2 >= 100) {
        document.getElementById('multiply').disabled = false;
        document.getElementById('autoclick').disabled = false;
    }
    
    btnStart1.addEventListener("click", function () {
        count1 = 0;           
    timerText1.textContent = (count1);
        addDonutAfterReset();
    });

}




