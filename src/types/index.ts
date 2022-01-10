export interface Game {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  gameUrl: string;
  releaseDate: string;
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
  gameUrl: string;
  genre: string;
  publisher: string;
  developer: string;
  releaseDate: string;
  minimumRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: Screenshot[];
}
