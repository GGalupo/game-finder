##  📖 About the project
GG Games is a project that let users search for games to play.

By clicking on a game, the user can see detailed information about it.

The data is being fetched from the following API: [MMO Bomb](https://www.mmobomb.com/api)
## 🎉 Live project

https://game-finder-ggalupo.vercel.app/

## ⚙ Environment Variable

You'll need an API key for the requests. If you don't have one, go to [Rapid API](https://rapidapi.com/digiwalls/api/mmo-games), create your account and get it.

On the project root, there is a file named `.env.example`. Rename it to `.env.local` and add your key after `=` signal.

Example: 
```bash
RAPIDAPI_KEY=your-key-here
```

## 💻 Running the project locally

Clone the project

```bash
  git clone https://github.com/GGalupo/gg-games.git
```

Go to the project directory

```bash
  cd gg-games
```

Install dependencies

```bash
  npm install
  # or
  yarn
```

Start the project (dev)

```bash
  npm run dev
  # or
  yarn dev
```

Start the project (prod)

```bash
  npm run build
  # or
  yarn build
```

```bash
  npm run start
  # or
  yarn start
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the project.

## 🛠️ Tech Stack

 - NextJS
 - ReactJS
 - TypeScript
 - Styled-components
 - Axios
 - React-icons
