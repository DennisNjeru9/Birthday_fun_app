let masculine = [
  {birthdate:"Sunday",name:"Kwasi"},
  {birthdate:"Monday",name:"Kwadwo"},
  {birthdate:"Tuesday",name:"Kwabena"},
  {birthdate:"Wednesday",name:"Kwaku"},
  {birthdate:"Thursday",name:"Yaw"},
  {birthdate:"Friday",name:"Koffi"},
  {birthdate:"Saturday",name:"Kwame"}
];

let feminine = [
  {birthdate:"Sunday",name:"Akosua"},
  {birthdate:"Monday",name:"Adwoa"},
  {birthdate:"Tuesday",name:"Abenaa"},
  {birthdate:"Wednesday",name:"Akua"},
  {birthdate:"Thursday",name:"Yaa"},
  {birthdate:"Friday",name:"Afua"},
  {birthdate:"Saturday",name:"Ama"}
];


function dayOfTheWeek(){
  let dd = parseInt(document.querySelector("#date").value);
  let mm = parseInt(document.querySelector("#month").value);
  let year = document.querySelector("#year").value;
 
  let cc = parseInt(year.slice(0,2)); // century digit
  let yy = parseInt(year.slice(2,4)); // year digit

  if(dd <= 0 || dd > 31) alert("The date you have entered is invalid. Kindly enter a valid date between 1 and 31!");
  if(mm <= 0 || mm > 12) alert("The month number you have entered is invalid. Kindly enter a valid number between 1 and 12");
 
  let birthdate =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;;

  return Math.floor(birthdate);
}

function computeAkanName(){
  let gender = document.querySelector('input[name="sex"]:checked');
  if(gender === null){
      alert("Kindly select your gender to get the correct Akan!");
  }else{
      gender = gender.value;
  }

  let akanDay = dayOfTheWeek();

  let feminineName = feminine[akanDay].name;
  let masculineName = masculine[akanDay].name;
  let dayName = feminine[akanDay].birthdate;

  if(gender === "Male"){
      document.querySelector("#akan_name_day").innerHTML = "Your Akan Name is" + " " + masculineName+ " " + "because you were born on a" + " "+ dayName;
  }else if(gender === "Female"){
      document.querySelector("#akan_name_day").innerHTML = "Your Akan Name is" + " " + feminineName + " " + "because you were born on a" + " " + dayName;
  }else{
      alert("Kindly enter the right input for gender!");
  }

  document.getElementById("fill_data").reset();
}


