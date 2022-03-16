const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
const standOut = process.stdout;
stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key >= 1 && key <= 9) {
    standOut.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  if (key === "\u0003") {
    standOut.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});
