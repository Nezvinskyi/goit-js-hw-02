const calculateEngravingPrice = function(message, pricePerWord) {
  let wordCount = 0;
  let price = 0;

  wordCount = message.split(' ').length;
  price = wordCount * pricePerWord;

  return price;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));