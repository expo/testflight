#!/usr/bin/env node

const { exec } = require("child_process");

const args = process.argv.slice(2).join(" ");

const child = exec(`npx eas-cli@latest build -p ios --submit ${args}`, {
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error(`Error: ${error.message}`);
});
