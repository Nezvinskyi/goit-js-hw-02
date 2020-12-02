let input =0;
const numbers = [];
let total = 0;

while (input!= null) {
  input = prompt('Введите число');
 
  if(Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз') 
  } else {
    numbers.push(Number(input));
  }
} 

for (const number of numbers) {
  total += number;
}

console.log('total :>> ', total);