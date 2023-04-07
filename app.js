//////// Chapter # 20(for loops nested)/////////

var firstName = ["Bluebarry","cupcake","lavacake","gum","chocolate"];
var lastName = ["zzz","burp","dogbone"," droop"];
for(var i = 0 ; i<firstName.length ; i ++){
    for(var j = 0 ; j<lastName.length ; j++)
   { console.log(firstName[i]+ " "+lastName[j])}
}


///////// Chapter # 21 (Changing case) //////////

var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["karachi", "multan", "rawalpindi", "Islamabad", "muree"];
for (var i = 0; i <= 4; i++) {
if (cityToCheck === cleanestCities[i]) {
alert("It's one of the cleanest cities");
}
}


//////// Chapter # 22 (Strings: Measuring length  and extracting parts) ///////

var letter = " javascript ";
var strPart = letter.slice(5,6);
console.log(strPart);



var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
if (str.slice(i, i + 2) === " ") {
alert("No double spaces!");
break;
}
}

//////////// Chapter # 23 (Strings: Finding segments)//////////

var text_ = "To replace tips text with your own, just select a line of text and start typing";
var dummyTextIndex = text_.indexOf ("text")
console.log(dummyTextIndex)
if(dummyTextIndex != -1){
    text_=text_.slice(0,dummyTextIndex)+'tricks'+text_.slice(dummyTextIndex + 4)
}
console.log(text_)
////
var text$ = "To replace tips text with your own, just select a line of text and start typing";
var dummyTextIndex = text$.lastIndexOf ("text")
console.log(dummyTextIndex)
if(dummyTextIndex != -1){
    text$=text$.slice(0,dummyTextIndex)+'tricks'+text$.slice(dummyTextIndex + 4)
}
console.log(text$)

///////////// Chapter # 24 (Strings: Finding a character at a location)///////////

var randomText = "for best results when selecting test to copy or replace,don't include space ";
for (var i = 0 ; i < randomText.length ; i++)
{
    if(randomText.charAt(i) =="results"){
        alert("text exixts")
    }
}

///////Chapter # 25 (Strings: Replacing characters)//////////

var copyText = "To replace tips text with your own, just select a line of text and start typing";
copyText = copyText.replace( 'typing' , 'paste');
console.log(copyText)

/////

var copyText_ = "To replace tips typing text with your own, just select a line of text and start typing";
copyText_ = copyText_.replace( /typing/g , 'paste');
console.log(copyText_)

////////////chapter # 26 (Rounding numbers)/////////

var $number =78.552548;
var new$number =Math.round($number);
console.log(new$number);

///

var _number =2.04578;
var new_number =Math.ceil(_number);
console.log(new_number);

///

var $number_ = 1.99999999;
var new$number_ =Math.floor($number_);
console.log(new$number_);

///////////// Chapter # 27 (Generating random numbers)/////////////

var randomNum = Math.random()
console.log(randomNum )
var random3 = randomNum * 6
var ramdom4 = Math.ceil(random3)

///

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

///
var fixedNum =78.5558749562;
var fNum = fixedNum.toFixed(5)
console.log(fNum)

///////// Vahpter # 28 (Converting strings to integers and decimals)/////////////

var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;
console.log(typeof qualifyingAge)

//

var myInteger = parseInt("1.9999");
console.log(myInteger)

///
var myFractional = parseFloat("1.9999");
console.log(myFractional)
console.log(typeof myFractional)



////////////// Chapter # 29 (Converting strings to numbers, numbers tostrings)///////////

var num = "25" ;
num = Number(num)
console.log(typeof num);

//

var num1 = 25787 ;
var numstring = num1.toString();
console.log(typeof numstring)


///////////// Chapter # 30 (Controlling the length of decimals)////////////
var price1 = prompt("enter the price of product 1","")
var price2 = prompt("enter the price of product 2","")

// var totalPrice = (price1 + price2 + 30.258)
// var finalPrice = totalPrice.toFixed(2)
// console.log(finalPrice)

///
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);


/////// Chapter # 31 (Getting the current date and time)////////

var rightNow = new Date();
var theDay = rightNow.getDay();

//

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = days[theDay];
console.log(nameOfToday)

//


/////////// Chapter # 32 (Extracting parts of the date and time)///////


var rightNow = new Date();
var year = rightNow.getFullYear()
console.log(year)

///

var rightNow = new Date();
var month = rightNow.getMonth()
console.log(month)

//

var rightNow = new Date();
var hours = rightNow.getHours()
console.log(hours)

//
var rightNow = new Date();
var minutes = rightNow.getMinutes()
console.log(minutes)

//

var rightNow = new Date();
var seconds = rightNow.getSeconds()
console.log(seconds)

///

var rightNow = new Date();
var time = rightNow.getTime()
console.log(time)
///

var rightNow = new Date();
var milliseconds = rightNow.getMilliseconds()
console.log(milliseconds)


////////////// Chapter # 33 (Specifying a date and time)//////////


var today = new Date();
var day = new Date("April 06, 2023");

////// AGE CALCULATOR /////

var now = new Date ();
var time = now.getTime();

var birthYear = new Date ("April 18,2005")
var birthYear = birthYear.getTime()

var difference = time -birthYear

// var age = (diff /(1000 * 60 * 60 * 24 * 365))
// alert(Math.floor(age))

////////// Chapter # 34 (Changing elements of a date and time)///////

var date = new Date();
date.setFullYear(2005);
console.log(date)

//

var d = new Date();
d.setMonth(04);

//

var d = new Date();
d.setDate(18);

//

var d = new Date();
d.setHours(16);

///
var d = new Date();
d.setMinutes(05);


//
var d = new Date();
d.setSeconds(45);

////

var d = new Date();
d.setMilliseconds(7895);
///

///////////////////// Chapter # 35 (Functions)/////////////////////

function time(){
    var now = new Date()
    var hour =now.getHours()
    var minute = now.getMinutes()
    var seconds = now.getSeconds()
    console.log("The time is "+hour+":"+minute+":"+seconds)
}
time ()


////////////////// Chapter # 36 (Functions:Passing them data)///////////////////////

 function greetUser() {
     alert("Hello, there.");
}

/////

function greetUser(greeting) {
     alert(greeting);
}
 
////
function showMessage(m, string, num);{
alert(m + string + num);
}
var month = "March";
showMessage(month, "'s winner number is ", 23);


////////////////// Chapter # 37 (Functions:Passing data back from them)//////////////////

function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
    orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
    }
    else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
     }
    return orderTot;
 }
///////////// Chapter # 38 (Functions : Local vs. global variables)///////

var theSum
addNumbers();
function addNumbers() {
     theSum = 2 + 2;
     }

/////

function  getBack (){
    var a = 43.25;
    var b = 352.15;
    var c = 21.54;
    var total = a+b+c;
    return total
}
var getReturn = getBack()
console.log(getReturn)


///////////***************************************************************************************** /////////
