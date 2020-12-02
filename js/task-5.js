const checkForSpam = function (message) {
  const array = message.toLowerCase().split(' ');
  let keyWordDetected = false;

  for (const word of array) {
    if (word.includes('spam') || word.includes('sale')) {
      keyWordDetected = true;
      continue;
    }
   }
  return keyWordDetected;
}

console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?')); 