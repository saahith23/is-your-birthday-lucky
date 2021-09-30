const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumberButton= document.querySelector("#check-number-button");
const textArea = document.querySelector("#text");

function compareValues(sum,luckyNumber){
  if(sum%luckyNumber===0){
    textArea.innerText="Yay! your birthday is lucky";
  }
  else{
    textArea.innerText="Oh Oh, your birthday is not lucky";
  }
}


function calculateSum(dob){
  dob= dob.replaceAll("-","");
  let sum=0;
  for(let index=0; index<dob.length; index++)
  {
   sum = sum + Number(dob.charAt(index));
  }
return sum;

}
function checkYourBirthdayIsLucky(){
 const dob= dateOfBirth.value; 
 const sum= calculateSum(dob);
 if(sum&&dob)
 compareValues(sum,luckyNumber.value)
 else
 textArea.innerText="please enter the both feilds";
}


checkNumberButton.addEventListener('click', checkYourBirthdayIsLucky)