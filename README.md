# VaultPass

VaultPass is a password manager. 

## Table of contents

- [Overview](#overview)
  - [What is it](#what-is-it)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [How to setup ?](#how-to-setup)
- [Author](#author)

## Overview

### What is it

VaultPass is a password manager. 
It was created using MERN stack and Next.js (Pages Router).

### Links

- Github repository: [https://github.com/TheVSDev/vaultpass](https://github.com/TheVSDev/vaultpass)

## My process

### Built with

#### Languages
- HTML
- CSS
- JS

#### Frameworks
- Next.js (Pages Router)
- ReactJS
- Tailwind CSS
- Node.js
- Knex.js

#### DB
- PostgreSQL

## How to setup ?
At the **root of your project**:
1. Run `npm i` to install all dependencies
2. Create a `.env.local` file and add this:
```
DB__CONNECTION=<Connection link to your PostgreSQL DB>
NEXT_PUBLIC_API__BASE_URL=<Link to API folder inside pages directory>
SECURITY__JWT__SECRET=<Secret code of a minimum 32 character string with only uppercase and lowercase letters and numbers>
SECURITY__PASSWORD__PEPPER=<Secret code of a minimum 256 character string with lowercase letters>
```
3. Run `npx knex migrate:latest` to update database
5. Run `npm run dev` to start the development server

## Author

- Website - [Veljko Spasic](https://veljko-spasic.rf.gd)
