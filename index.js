let yearOfBirth = document.querySelector("#ybirth").value;
let monthOfBirth = document.querySelector("#mbirth").value;
let dateOfBirth = document.querySelector("#dbirth").value;

let maleAkan = [{day:"Sunday", name:"Kwasi"},{day:"Monday", name:"Kwadwo"},{day:"Tuesday", name:"Kwabena"},{day:"Wednesday", name:"Kwaku"},{day:"Thursday", name:"Yaw"}, {day:"Friday", name:"Kofi"},{day:"Saturday", name:"Kwame"}];
let femaleAkan = [{day:"Sunday", name:"Akosua"},{day:"Monday", name:"Adwoa"},{day:"Tuesday", name:"Abenaa"},{day:"Wednesday", name:"Akua"},{day:"Thursday", name:"Yaa"}, {day:"Friday", name:"Afua"},{day:"Saturday", name:"Ama"}]

function dayOfTheWeek(){
  let dd = dateOfBirth;
  let mm = monthOfBirth;
  let cc = yearOfBirth.slice(0,2);
  let yy = yearOfBirth.slice(2,4);

  if (mm <=0 || mm >= 12) alert("The month number you have entered is invalid. Kindly enter a valid number between 1 and 12!")
  if (dd <=0 || dd >=31) alert("The date you have entered is invalid. Kindly enter a valid date between 1 and 31!");

  let weekday = (((cc/4)-(2*cc-1))+(5*yy/4))+((26*(mm+1)/10)+dd)%7;

  return Math.floor(weekday);
}

function akanName(){
  let gender = document.querySelector('input[name="gender"]:checked');

  if (gender === null){
    alert ("Kindly select your gender");
  } else{
    gender = gender.value;
  }

  let wd = dayOfTheWeek();

  let maleAkanName = maleAkan[wd].name;
  let femaleAkanName = femaleAkan[wd].name;
  let dayName = female[wd].day;

  if (gender === "Male"){
    document.querySelector("#akanname").innerHTML = maleAkanName;
    document.querySelector("#weekday").innerHTML = dayName;
  }else if(gender === "Female"){
    document.quertySelector("#akanname").innerHTML = femaleAkanName;
    document.querySelector("#weekday").innerHTML = dayName;
  }else {
    alert("There must have been invalid inputs entered. Kindly enter the right inputs!");
  }

  document.querySelector("#resetter").reset();
}