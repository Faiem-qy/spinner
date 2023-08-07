
process.stdout.write('hello from spinner2.js... \rheyyy\n');
// declare variable with an array containing all the characters to be used
const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  
  delay += 200;
}

