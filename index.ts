import chalk from "chalk";
import inquirer from "inquirer";
import ChalkAnimation from "chalk-animation";
import { exit } from "process";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};
let rainbowTitle = ChalkAnimation.karaoke("Welcome to number guessing game!");
await sleep();
rainbowTitle.stop();

console.log(chalk.green("Select values between 0 - 9!"));
console.log(chalk.bgRedBright("You have only Four chance to guess!"));

const guessNumberFunc = async () => {
  for (let i = 1; i <= 4; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(chalk.bgBlue`Iteration ${i}`);
    const guessedNumber = await inquirer.prompt([
      {
        name: "num",
        type: "number",
        message: "Guess the number?",
      },
    ]);

    if (guessedNumber.num === randomNumber) {
      console.log(
        chalk.bgMagenta(
          `Congratulations! You guessed it right in ${i} iteration...`
        )
      );
      break;
    }
    if (i == 4 && guessedNumber.num != randomNumber) {
      console.log(chalk.redBright("You Lose! Try Again :)"));
    } else {
      console.log(`The guess is ${randomNumber}`);
    }
  }
};
async function tryAgain() {
  do {
    await guessNumberFunc();
    var value = await inquirer.prompt([
      {
        name: "ans",
        type: "input",
        message: chalk.bgGreen("Do you want to start again? Press y/n"),
      },
    ]);
    var userInputValue =
      value.ans == 'y'|| value.ans == 'Y' || value.ans == 'yes' || value.ans == 'YES';
  } while (userInputValue); 
  
}
tryAgain();
