#!/usr/bin/env node
// import { name } from './package.json' assert { type: "json" };

import chalk from 'chalk';
const name = process.env.npm_package_name;
const log = console.log;
log(`
    ${chalk.blue(name)}
`);
log(`
    Zahid R. Showrav

    JavaScript Enthusiast and Full-Stack Developer.
    Skilled in React, Next.js, Node.js, TypeScript, Vue, Remix, Tailwind, and Docker. 
    Off the keyboard, he's all about music, travel, and food adventures.

    📧 Email:     zahid.showravbd@gmail.com
    🌐 Portfolio: https://zahidshowrav.me
    ⭐ Github:    https://github.com/zahidshowrav
    🔗 LinkedIn:  https://www.linkedin.com/in/zahidshowrav/
    ❌ X:         https://x.com/zahidshowrav
    📖 Facebook:  https://facebook.com/zahidshowrav
`);
