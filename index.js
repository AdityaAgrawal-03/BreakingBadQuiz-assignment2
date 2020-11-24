// // Assignment app, breaking bad quiz

var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var askName = chalk.cyanBright("Hello, what is your name? ");
var userName = readlineSync.question(askName);
console.log(chalk.cyanBright("Let's see " + userName + " how much you know about BREAKING BAD!"));
console.log(chalk.yellowBright("---------------------------------------------------"));

console.log(chalk.cyanBright(`   GUIDE : 
${chalk.yellowBright("->")} Each question contains 1 point.
${chalk.yellowBright("->")} There is no negative marking.
${chalk.yellowBright("->")} Press any key in (1, 2, 3, 4) to select an option.
${chalk.yellowBright("-----------------------------------------------------")}
`));

// quiz data
var doYouKnowBB = [
  {
    question: chalk.cyanBright("Which food does Walt infamously throw onto the roof of his house? "),
    options: ["pizza", "burger", "taco", "cake"],
    answer: "pizza"
  },
  {
    question: chalk.cyanBright("What is name of Jesse's girlfriend who overdosed on drugs? "),
    options: ["gretchen", "jane", "andrea", "wendy"],
    answer: "jane"
  },
  {
    question: chalk.cyanBright("What is the name of the Walt Whitman book that Hank finds in Walt's bathroom, confirming that his brother-in-law is the Heisenberg? "),
    options: ["song of the open road", "o captain! my captain", "leaves of grass", "song of myself"],
    answer: "leaves of grass"
  },
  {
    question: chalk.cyanBright("What primitive weapon do Tuco’s murderous cousins favor? "),
    options: ["knife", "axe", "shotgun", "rifle"],
    answer: "axe"
  },
  {
    question: chalk.cyanBright("Who was poisoned with ricin? "),
    options: ["brock", "andrea", "krazy-8", "lydia"],
    answer: "lydia"
  },
  {
    question: chalk.cyanBright("What's the name of the plant that was used to poison Brock? "),
    options: ["lily of the valley", "castor bean ", "oleander", "water hemlock"],
    answer: "lily of the valley"
  },
  {
    question: chalk.cyanBright("In the final season, Walt buries all of his money in the desert when he realizes Hank knows he is the Heisenberg. How much money did he have in millions? "),
    options: ["65", "100", "80", "78"],
    answer: "80"
  },
  {
    question: chalk.cyanBright("What's the name of the infant daughter of Walt and Skyler White? "),
    options: ["holly", "rosy", "june", "andrea"],
    answer: "holly"
  },
  {
    question: chalk.cyanBright("What is title of the song played at walter white's death? "),
    options: ["crystal blue persuasion", "goodbye", "baby blue", "el paso"],
    answer: "baby blue"
  },
  {
    question: chalk.cyanBright("Complete the iconic Walt phrase: You clearly don’t know who you’re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger! A guy opens his door and gets shot and you think that of me? No. I am .......  "),
    options: ["the one who kills", "the one who poisons them", "the cartel king", "the one who knocks"],
    answer: "the one who knocks"
  },
];

// highest score data
var topScores = [
  {
    name: "aditya",
    score: 9
  },
  {
    name: "armaan",
    score: 8
  },
  
]; 

// play function
function play (question, options, answer) {
  console.log(question);
  
  var index = readlineSync.keyInSelect(options, chalk.cyanBright("select one option : "), {cancel: false, guide: false});
  chalk.cyanBright(index);
  
  //if (userAns === )
  if (options[index].toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.cyanBright("CORRECT!"));
    console.log(chalk.yellowBright("--------------"));
    score = score + 1;
  } else {
    console.log(chalk.cyanBright("INCORRECT!"));
    console.log(chalk.cyanBright("Correct answer is " + answer));
    console.log(chalk.yellowBright("--------------"));
  }
}

// loop used for calling the function
for (var i = 0; i < doYouKnowBB.length; i++) {
  play(doYouKnowBB[i].question, doYouKnowBB[i].options, doYouKnowBB[i].answer);
}

//printing score
if (score > topScores[0].score) {
    console.log(chalk.cyanBright("Yayyy! you've beaten the previous top scorer aditya, you scored a perfect 10."));
  } else if (score > topScores[1].score) {
    console.log(chalk.cyanBright("Yayy! you've beaten the second highest scorer armaan, your score is " + score + "."));
  } else {
    console.log(chalk.cyanBright("Hurray, your score is " + score + "."));
  }

// pushing user details in database
var userDetailObj = {
  name: "",
  score: 0
};
userDetailObj.name = userName;
userDetailObj.score = score;
topScores.push(userDetailObj);

//printing leaderboard
console.log(chalk.cyanBright("Leaderboard: "))
for (var i = 0; i < topScores.length; i++) {
  console.log(chalk.cyanBright(topScores[i].name + " - " + topScores[i].score))
}

  
  





