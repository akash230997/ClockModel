var time = new Date();
var timehours = (time.getHours());

function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let session = document.getElementById('session');
    if((hrs+"").length === 1){
        hrs = "0"+hrs;
    }
    if((mins+"").length === 1){
        mins = "0"+mins;
    }
    if((secs+"").length === 1){
        secs = "0"+secs;
    }

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

  

    if(hrs >= 0 && hrs < 6 ){
        document.querySelector(".container").setAttribute('class', 'dark');
        document.querySelector(".clock-setTime").setAttribute('class', 'dark-clock-setTime');
        document.querySelector(".clock-dash-bk1").setAttribute('class', 'dark-clock-dash-bk1');
        document.querySelector(".clock-dash-bk2").setAttribute('class', 'dark-clock-dash-bk2');
        document.querySelector(".img-platform").setAttribute('class', 'dark-img-platform');
        document.querySelector(".wrapper").setAttribute('class', 'dark-wrapper');
        document.querySelector("h1").setAttribute('class', 'dark-wrap-content');


        document.getElementById('text1').innerHTML = "<h1>CLOSE YOUR EYES AND GET SOME SLEEP !!!</h1>";
        document.getElementById('text').innerHTML = "<h1>GOOD NIGHT!!🌟🎆🎇</h1>";
        document.getElementById('imagesTarget').src = "./images/Component 32 – 1/Component 32 – 1.png";
    }else if(hrs >= 6 && hrs < 10){
        document.getElementById('text1').innerHTML = "<h1>An early-morning walk is a blessing for the whole day.</h1>";
        document.getElementById('text').innerHTML = "<h1>GOOD MORNING AKASH🌟😀!!</h1>";
        document.getElementById('imagesTarget').src = "./images/Morning Motivation.jpg";
        document.getElementById('imagesTarget').setAttribute('width', '100%');
        document.getElementById('imagesTarget').style.borderRadius = '20px';
    }else if(hrs >= 10 && hrs < 12){
        document.getElementById('text1').innerHTML = "<h1>HAVE A GOOD DAY AKASH!!!</h1>";
        document.getElementById('text').innerHTML = "<h1>HELLO AKASH🌟!!</h1>";
        document.getElementById('imagesTarget').src = "./images/Component 30 – 1/Component 30 – 1.png";
    } else if (hrs >= 12 && hrs < 16){
        document.getElementById('text1').innerHTML = "<h1>LET'S HAVE SOME LUNCH !!!</h1>";
        document.getElementById('text').innerHTML = "<h1>GOOD AFTERNOON!!</h1>";
        document.getElementById('imagesTarget').src = "./images/Party.png";
    } else if (hrs >= 16 && hrs < 20){
        document.getElementById('text1').innerHTML = "<h1>STOP YAWNING, GET SOME COFFEE.. IT'S JUST EVENING !!!</h1>";
        document.getElementById('text').innerHTML = "<h1>EVENING AKASH!!</h1>";
        document.getElementById('imagesTarget').src = "./images/lunch_image/lunch_image.png";
    } else if (hrs >= 20 && hrs < 23){
        var dark = document.querySelector(".container").setAttribute('class', 'dark');
        document.getElementById('text1').innerHTML = "<h1>🌃The evening sings in a voice of amber, the dawn is surely coming....</h1>";
        document.getElementById('text').innerHTML = "<h1>HAVE YOUR DINNER AKASH!!</h1>";
        document.getElementById('imagesTarget').src = "./images/dinner.jpg";
        document.getElementById('imagesTarget').setAttribute('width', '100%');
        document.getElementById('imagesTarget').style.borderRadius = '20px';
    }

    if (hrs > 12) {
        hrs = hrs - 12
    }

    document.getElementById('Hours').innerHTML = hrs;
    document.getElementById('Minutes').innerHTML = mins;
    document.getElementById('Seconds').innerHTML = secs;
    
    // if (MorningTimeValue == timehours) {
    //     document.getElementById('text1').innerHTML = "<h1>GRAB SOME HEALTHY BREAKFAST !!!</h1>";
    // } else if (AfternoonTimeValue == timehours) {
    //     document.getElementById('text1').innerHTML = "<h1>LET'S HAVE SOME LUNCH !!!</h1>";
    // } else if (EveningTimeText == timehours) {
    //     document.getElementById('text1').innerHTML = "<h1>STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!</h1>";
    // } else if (NightTimeValue == timehours) {
        
    // } else {
    //     console.log('LOL');
    // }

    // // if (MorningTimeValue == timehours){
    //     document.getElementById('text1').innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
    // } else if (AfternoonTimeValue == timehours){
    //     document.getElementById('text1').innerText = "LET'S HAVE SOME LUNCH !!!";
    // } else if (EveningTimeText == timehours){
    //     document.getElementById('text1').innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!";
    // } else if (NightTimeValue == timehours){
    //     document.getElementById('text1').innerText = "CLOSE YOUR EYES AND GET SOME SLEEP !!!";
    // }else{
    //     console.log('LOL');
    // }

    // if(dropOne == hours){
    //     document.getElementsByClassName("p2").innerText = "GOOD MORNING !! WAKE UP !!";
    //     document.getElementsByClassName("rp4").innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
    //     document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";
        
    // }
    // else if(dropTwo == hours){
    //     document.getElementsByClassName("p2").innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP !!";
    //     document.getElementsByClassName("rp4").innerText = "LET'S HAVE SOME LUNCH !!!";
    //     document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('lunch.png')";
        
    // }
    // else if(dropThree == hours){
    //     document.getElementsByClassName("p2").innerText = "GOOD EVENING !!";
    //     document.getElementsByClassName("rp4").innerText = "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!";
    //     document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('tea.png')";
        
    // }
    // else if(dropFour == hours){
    //     document.getElementsByClassName("p2").innerText = "GOOD NIGHT !!";
    //     document.getElementsByClassName("rp4").innerText = "CLOSE YOUR EYES AND GO TO SLEEP !!!";
    //     document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('sleep.png')";
        
    // }
    // else{
    //     document.getElementsByClassName("p2").innerText = "GOOD MORNING !! WAKE UP !!";
    //     document.getElementsByClassName("rp4").innerText = "GRAB SOME HEALTHY BREAKFAST !!!";
    //     document.getElementsByClassName("rdv5")[0].style.backgroundImage = "url('mrng.png')";
        
    // }
}
setInterval(displayTime, 1);

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


var morning = document.getElementById("wakeupTime");
var afternoon = document.getElementById("lunchTime");
var evening = document.getElementById("eveningTime");
var night = document.getElementById("sleepTime");

var MorningTimeText = morning.options[morning.selectedIndex].text;
var AfternoonTimeText = afternoon.options[afternoon.selectedIndex].text;
var EveningTimeText = evening.options[evening.selectedIndex].text;
var NightTimeText = night.options[night.selectedIndex].text;

var MorningTimeValue = morning.options[morning.selectedIndex].value;
var AfternoonTimeValue = afternoon.options[afternoon.selectedIndex].value;
var EveningTimeValue = evening.options[evening.selectedIndex].value;
var NightTimeValue = night.options[night.selectedIndex].value;


function dark(){
    document.querySelector(".container").setAttribute('class', 'dark');
    document.querySelector(".clock-setTime").setAttribute('class', 'dark-clock-setTime');
    document.querySelector(".clock-dash-bk1").setAttribute('class', 'dark-clock-dash-bk1');
    document.querySelector(".clock-dash-bk2").setAttribute('class', 'dark-clock-dash-bk2');
    document.querySelector(".img-platform").setAttribute('class', 'dark-img-platform');
    document.querySelector(".wrapper").setAttribute('class', 'dark-wrapper');
    document.querySelector("h1").setAttribute('class', 'dark-wrap-content');

};



let btnC = () =>{
    let check = 'Check';

    var MorningTimeText = morning.options[morning.selectedIndex].text;
    var AfternoonTimeText = afternoon.options[afternoon.selectedIndex].text;
    var EveningTimeText = evening.options[evening.selectedIndex].text;
    var NightTimeText = night.options[night.selectedIndex].text;
    // console.log(NightTimeText);

    var MorningTimeValue = morning.options[morning.selectedIndex].value;
    var AfternoonTimeValue = afternoon.options[afternoon.selectedIndex].value;
    var EveningTimeValue = evening.options[evening.selectedIndex].value;
    var NightTimeValue = night.options[night.selectedIndex].value;
    // console.log(NightTimeValue);

    console.log(MorningTimeValue == MorningTimeText);
    console.log(MorningTimeValue);
    console.log(MorningTimeText);

    console.log(NightTimeValue == NightTimeText);
    console.log(NightTimeValue);
    console.log(NightTimeText);

    if ((MorningTimeValue > 8 && MorningTimeValue < 12)){
        document.getElementById('text1').innerHTML = "<h1>GRAB SOME HEALTHY BREAKFAST !!!</h1>";
        document.getElementById('text').innerHTML = "<h1>Good Morning</h1>";
    } 
    // else if (hrs >= 0 && hrs < 6){
        // document.getElementById('text1').innerHTML = "<h1>LET'S HAVE SOME LUNCH !!!</h1>";
    // } else if (EveningTimeText == timehours){
        // document.getElementById('text1').innerHTML = "<h1>STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING !!!</h1>";
    // } else if (NightTimeValue == timehours){
        // document.getElementById('text1').innerHTML = "<h1>CLOSE YOUR EYES AND GET SOME SLEEP !!!</h1>";
    // }else{
        // console.log('LOL');
    // }



    document.getElementById("WakeUpT").innerText = MorningTimeText;
    document.getElementById("LunchT").innerText = AfternoonTimeText;
    document.getElementById("NapT").innerText = EveningTimeText;
    document.getElementById("NightT").innerText = NightTimeText;
    // console.log(check);
}
// btnC();

let btn = document.querySelector(".btn");

let mouseenterp = () => {
    btn[0].innerHTML = "Party Time !!";
    btn.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}

let mouseend = () => {
    btn[0].innerHTML = "Set Alarm";
    btn.style.backgroundImage = "linear-gradient(to right, #6E54EC 0%, #CB52F8 25%, #FC5EFF 75%, #F1A7C5 100%)";
}

btn.addEventListener(onmouseenter, mouseenterp);


