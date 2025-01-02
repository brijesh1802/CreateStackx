#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copyTemplate = (templateName, projectName) => {
  const templateDir = path.join(__dirname, 'templates', templateName);
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`Error: Directory ${projectName} already exists.`));
    process.exit(1);
  }

  fs.copySync(templateDir, targetDir);
  console.log(chalk.green(`Project ${projectName} initialized successfully.`));
};

const runCommand = (command, cwd) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const dependencies = [
  { name: 'express', description: 'Web framework for Node.js' },
  { name: 'mongoose', description: 'MongoDB object modeling for Node.js' },
  { name: 'dotenv', description: 'Loads environment variables from .env file' },
  { name: 'cors', description: 'Provides a Connect/Express middleware for enabling Cross-Origin Request Sharing (CORS)' },
  { name: 'bcrypt', description: 'Library for hashing passwords' },
  { name: 'jsonwebtoken', description: 'JSON Web Token for authentication' },
  { name: 'nodemon', description: 'Utility for automatically restarting the server on code changes (dev dependency)' },
];

const initializeBackend = async (projectName) => {
  const projectDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`Error: Directory ${projectName} already exists.`));
    process.exit(1);
  }

  fs.mkdirSync(projectDir);
  process.chdir(projectDir);
  await runCommand('npm init -y', projectDir);

  const answers = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedDeps',
      message: 'Select the dependencies you want to install:',
      choices: dependencies.map((dep) => ({
        name: `${dep.name}: ${dep.description}`,
        value: dep.name,
      })),
    },
  ]);

  if (answers.selectedDeps.length > 0) {
    const installCommand = `npm install ${answers.selectedDeps.join(' ')}`;
    const selectedDepsDescriptions = dependencies
      .filter((dep) => answers.selectedDeps.includes(dep.name))
      .map((dep) => `${dep.name}`)
      .join(', ');

    console.log(chalk.blue(`Installing backend dependencies: ${selectedDepsDescriptions}`));

    await runCommand(installCommand, projectDir);
  } else {
    console.log(chalk.yellow('No dependencies selected.'));
  }

  console.log(chalk.green(`Backend project "${projectName}" initialized successfully.`));
};

program
  .command('init:frontend <projectName>')
  .description('Initialize a React project with Vite')
  .action((projectName) => {
    console.log(chalk.blue(`Initializing frontend project: ${projectName}`));
    copyTemplate('frontend', projectName);
  });

program
  .command('init:backend <projectName>')
  .description('Initialize a Node.js backend with Express and Mongoose')
  .action((projectName) => {
    console.log(chalk.blue(`Initializing backend project: ${projectName}`));
    initializeBackend(projectName);
  });

program
  .command('init <projectName>')
  .description('Initialize a full-stack project')
  .action(async (projectName) => {
    console.log(chalk.blue(`Initializing full-stack project: ${projectName}`));

    // Initialize frontend
    await new Promise((resolve) => {
      copyTemplate('frontend', `${projectName}-frontend`);
      console.log(chalk.green(`Frontend project ${projectName}-frontend initialized.`));
      resolve();
    });

    // Initialize backend
    await new Promise((resolve) => {
      initializeBackend(`${projectName}-backend`);
      resolve();
    });

    console.log(chalk.green('Full-stack project initialized successfully.'));
  });

program.parse(process.argv);
