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
}
