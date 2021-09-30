const evenMassive = []; //четные числа
const oddMassive = []; // нечетные числа

const game = () => {
  do {
    let first = parseInt(prompt('Enter your first number:', ''));
    let second = parseInt(prompt('Enter your second number:', ''));
    let x = first + second;
    if (x % 2 === 0) {
      evenMassive.push(x);
    } else {
      oddMassive.push(x);
    }
  } while (evenMassive.length > 0 && evenMassive.length < 3 || oddMassive.length > 0 && oddMassive.length < 3) {
    if (evenMassive.length === 2) {
      console.log("The even wins!");
    } else if (oddMassive.length === 2) {
      console.log("The odd wins!");
    }
  }
}

game();
console.log(evenMassive);
console.log(oddMassive);