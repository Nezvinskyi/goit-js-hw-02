const formatString = function (string) {
console.log('string.length :>> ', string.length);

  if (string.length > 40) {
    const array = string.split('', 40);
    string = array.join('') + '...';
  }
  return string;
}
  
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));