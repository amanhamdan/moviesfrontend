export interface BadgeInterface {
  text?: string;
  filled?: boolean;
}

export interface ButtonInterface {
  rating: number;
  type: string;
  category:string;
  director: string;
  filled?: boolean;
  icon?: JSX.Element;
}

export interface CardInterface {
  id: number;
  indicator?: string,
  badge?: BadgeInterface,
  image?: string,
  movieName: string,
  subtitle?: string,
  body: string,
  btn: ButtonInterface
}