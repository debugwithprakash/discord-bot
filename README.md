# 🤖 Discord Bot

A custom Discord bot built using **JavaScript, Node.js, and discord.js**. This bot responds to custom commands and interacts with users in Discord servers.

## 🚀 Features

- Custom command handling
- Hello command with personalized greetings
- About command to introduce the bot
- Creator command to display creator information
- GitHub command to share the creator's GitHub profile
- YouTube welcome message
- Automatic message event handling
- Secure bot authentication using environment variables

## 🛠️ Tech Stack

- JavaScript
- Node.js
- discord.js
- dotenv

## 📁 Project Structure

```text
discord-bot/
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/debugwithprakash/discord-bot.git
```

### 2. Navigate to the project directory

```bash
cd discord-bot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
TOKEN=YOUR_DISCORD_BOT_TOKEN
```

Replace `YOUR_DISCORD_BOT_TOKEN` with your actual Discord bot token.

### 5. Start the bot

```bash
node index.js
```

## 💬 Available Commands

| Command | Description |
|---|---|
| `hello` | Greets the user |
| `about` | Introduces the bot |
| `creator` | Displays creator information |
| `!github` | Shares GitHub profile |
| `youtube` | Displays a welcome message |

## 🔐 Security

- Bot token is stored in environment variables.
- `.env` is excluded from Git using `.gitignore`.
- Never share your Discord bot token publicly.

## 👨‍💻 Creator

**Prakash Kumar**

- GitHub: https://github.com/debugwithprakash

## ⭐ Support

If you like this project, consider giving it a star on GitHub!