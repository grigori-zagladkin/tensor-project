export interface IResult {
  agree: number;
  disagree: number;
  abstained: number;
  dontknow: number;
}

export interface ICreateTheme {
  title: string;
  description: string;
  voteId?: number | null;
}

export interface ITheme {
  theme_id: number;
  title: string;
  description: string;
  createdAt: string;
  result: Array<{ color: string; value: number }>;
  // result: IResult;
}
