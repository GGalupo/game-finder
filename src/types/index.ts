export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  release_date: string | number;
}

interface Screenshot {
  id: number;
  image: string;
}

export interface GameDetails {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  game_url: string;
  genre: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: Screenshot[];
}
