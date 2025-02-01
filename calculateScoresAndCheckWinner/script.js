//test 1 *******************************************************************

/*Create an arrow function
 calcAverage to calculate the average of 3 scores. 
 This function should have three parameters and return a single number 
 (the average score).

Create two new variables
 — scoreDolphins and scoreKoalas,
  and assign the value returned from the calcAverage function to them 
  (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score
 of each team as parameters (avgDolphins and avgKoalas),
  and then logs the winner to the console, together with the victory points,
   according to the rule above. Example: Koalas win (30 vs. 13)
    (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner
 for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... 
to the console if there is no winner.*/


//arrow calc to get the avg 
const calcAverage = (a, b, c) => (a + b + c) / 3;
//test
console.log(calcAverage(3, 4, 5));

//calculate the scores / data set 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
//test
console.log(scoreDolphins, scoreKoalas);



const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};

// set the scores to the function
checkWinner(scoreDolphins, scoreKoalas);



