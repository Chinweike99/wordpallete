import chalk from 'chalk'

// Array of words in the message (you can add as many words as you want)
const words = ["Keep", "going", "my", "friend,", "better", "days", "ahead", "🚀", "You", "got", "this!"];

// Function to generate a random color function from chalk
function getRandomColor() {
  const colorFunctions = [
    chalk.red,
    chalk.green,
    chalk.yellow,
    chalk.blue,
    chalk.magenta,
    chalk.cyan,
    chalk.white,
    chalk.gray,
    chalk.redBright,
    chalk.greenBright,
    chalk.yellowBright,
    chalk.blueBright,
    chalk.magentaBright,
    chalk.cyanBright,
    chalk.whiteBright,
  ];

  // Pick a random color function from the array
  return colorFunctions[Math.floor(Math.random() * colorFunctions.length)];
}

// Function to display words with delay and random colors
function displayMessage(words, delay) {
  words.forEach((word, index) => {
    setTimeout(() => {
      // Generate a random color for the word
      const randomColor = getRandomColor();
      process.stdout.write(randomColor(word) + " ");
    }, delay * index);
  });

  // Add a newline after the message is complete
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay * words.length);
}

// Call the function with a delay of 500ms (0.5 seconds)
displayMessage(words, 500);