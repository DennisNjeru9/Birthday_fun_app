let yearOfBirth = document.querySelector("#ybirth").value;
let monthOfBirth = document.querySelector("#mbrith").value;
let dateOfBirth = document.querySelector("#dbirth").value;

let maleAkan = [{day:"Sunday", name:"Kwasi"},{day:"Monday", name:"Kwadwo"},{day:"Tuesday", name:"Kwabena"},{day:"Wednesday", name:"Kwaku"},{day:"Thursday", name:"Yaw"}, {day:"Friday", name:"Kofi"},{day:"Saturday", name:"Kwame"}];
let femaleAkan = [{day:"Sunday", name:"Akosua"},{day:"Monday", name:"Adwoa"},{day:"Tuesday", name:"Abenaa"},{day:"Wednesday", name:"Akua"},{day:"Thursday", name:"Yaa"}, {day:"Friday", name:"Afua"},{day:"Saturday", name:"Ama"}]

function dayOfTheWeek(){
  let dd = dateOfBirth;
  let mm = monthOfBirth;
  let cc = yearOfBirth.slice(0,1);
  let yy = yearOfBirth.slice(2,3);

  if (mm <=0 || mm >= 12) alert("The month number you have entered is invalid. Kindly enter a valid number between 1 and 12!")
  if (dd <=0 || dd >=31) alert("The date you have entered is invalid. Kindly enter a valid date between 1 and 31!");
}