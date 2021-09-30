const evenMassive = []; //четные числа
const oddMassive = []; // нечетные числа

const askArr = [
  ['Please enter your first number:', ],
  ['Please enter your second number:', ]
];

const game = (quest) => {
  let first = prompt(askArr[0], '');
  let second = prompt(askArr[1], '');
  let x = (first + second) % 2;
  do {
    if (x == 0) {
      evenMassive.push(x);
    } else {
      oddMassive.push(x);
    }
  } while (evenMassive.length > 0 && evenMassive.length < 5 || oddMassive.length > 0 && oddMassive.length < 5) {
    for (var i = 0; i < askArr.length; i++) {
      game(quest[i]);
    }
    evenMassive.length++;
    oddMassive.length++;
    if (evenMassive.length === 4) {
      alert("The even wins!");      
    } else if (oddMassive.length === 4) {
      alert("The odd wins!");
    }
  }
}