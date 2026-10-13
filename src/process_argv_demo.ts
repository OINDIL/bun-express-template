import { exec } from "node:child_process";
const userInput = process.argv[2];

if (!userInput) {
  console.log("User input is needed, command: bun run demo.ts [userInput]");
  process.exit(1);
}

const result = exec(
  `node -e "console.log(${userInput})"`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    console.log("Result: ", stdout);
  },
);
