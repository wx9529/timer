// const arr = process.argv
//   .slice(2)
//   .sort((a, b) => a - b)
//   .map((value) => {
//     return value * 1000;
//   });
let input = [];
for (let item of process.argv.slice(2)) {
  if (Number(item) && item >= 0) {
    input.push(item);
  }
}
for (let i = 0; i < input.length; i++) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, input[i] * 1000);
  console.log(input[i] * 1000);
}
