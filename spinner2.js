let i = 0

let timer = 100;

let array = ['\\', '|','/', '-', '\\', '|', '/', '-' ];

while (i < 3) {
for (const elements of array) {
  setTimeout(() => {
    process.stdout.write(`\r${elements}`);
  }, timer);
  timer += 200;
}
i++;
}




// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);





// // ... fill in the rest yourself ...