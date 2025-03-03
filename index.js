#!/usr/bin/env node
"use strict";
const { spawn } = require("child_process");

const child = spawn(
  "npx",
  [
    `eas-cli@latest`,
    `build`,
    `-p`,
    `ios`,
    `--submit`,
    ...process.argv.slice(2),
  ],
  { stdio: "inherit" }
);

child.on("exit", function (code) {
  process.exit(code);
});
