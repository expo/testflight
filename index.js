#!/usr/bin/env node
"use strict";

const spawn = require("cross-spawn").spawn;

spawn(
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
).on("exit", function (code) {
  process.exit(code);
});
