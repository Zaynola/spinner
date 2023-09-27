// // process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);

//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);

//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
//   setTimeout(() => {
//     process.stdout.write('\r\   ');
//   }, 700);
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 900);
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 1000);
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 1300);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   ');
//   }, 700);

//   // ... fill in the rest yourself ...


function animateSpinner() {
    const spinner = ['|', '/', '-', '\\', '/'];
    let index = 0;

    function spin() {
      process.stdout.write(`\r${spinner[index]}   `);
      index = (index + 1) % spinner.length;
    }
    spin();

    const interval = setInterval(spin, 300);
    setTimeout(() => {
     clearInterval(interval);
       process.stdout.write('\n');
     }, 700);
  }
  animateSpinner();