let first = prompt("Please, enter your first number:", []);
let second = prompt("Please, enter your second number:", []);

const evenMassive = []; //четные числа
const oddMassive = []; // нечетные числа

const game = () => {
  let x = first % second;
  if (first === number && second === number) {
    while (evenMassive.length <= 10 || oddMassive <= 10) {
      if (x === 0) {
        evenMassive.push(x);
      } else {
        oddMassive.push(x);
      }
      continue;
    }
    if (evenMassive.length === 10) {
      alert("The even wins!");
    } else {
      alert("The odd wins!");
    }
  } else {
    alert("Please, you need typing number only!");
  }
}

game(20);