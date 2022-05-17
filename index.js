function scuberGreetingForFeet(amount){
  let message
  if (amount <= 400) {
    message = "This one is on me!";
  } 
  else if (amount > 400 && amount < 2000 ){
    message = 'That will be twenty bucks.'
  }
  else if(amount > 2000 && amount < 2500){
    message = 'I will gladly take your thirty bucks.'
  }
  else{ 
    message = 'No can do.';
  }
  return message 

}

function ternaryCheckCity(city){
 let message 
 city === "NYC" ? (message = 'Ok, sounds good.') : (message = 'No go.');
 
 return message 
}

function switchOnCharmFromTip(tip){
  let message 
  switch (tip){
    case 'generous':
      message = "Thank you so much.";
      break;
    case "not as generous" :
      message = 'Thank you.'
      break;
    default:
      message = "Bye."
      break;
  }
  return message 
 
}