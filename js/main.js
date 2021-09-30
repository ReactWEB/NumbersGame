let first = prompt("Please, enter your first number:", );
let second = prompt("Please, enter your second number:", );

const evenMassive = []; //четные числа
const oddMassive = []; // нечетные числа

const game = () => {
  let x = first % second;  
    while (evenMassive.length < 6 || oddMassive < 6) {
      if (x == 0) {
        evenMassive.push(x);
      } else {
        oddMassive.push(x);
      }      
    }
    if (evenMassive.length === 5) {
      alert("The even wins!");
    } else if(oddMassive.length === 5){
      alert("The odd wins!");
    }  
}

game();