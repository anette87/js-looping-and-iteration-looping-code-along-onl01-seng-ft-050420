// const names = [`Lisa`, `Kaitlin`, `Jan` ]
// const events = 'surprise'


function writeCards(names, events){
  let messages = [];
  for (let i = 0; i< names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }
  return messages;
}
  
  writeCards(names, events)

