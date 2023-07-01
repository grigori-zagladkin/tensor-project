export interface IResult {
  agree: number;
  disagree: number;
  abstained: number;
  dontknow: number;
}

export interface ICreateTheme {
  title: string;
  description: string;
  result: Array<{ color: string; value: number }>;
}

export interface ITheme {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  result: Array<{ color: string; value: number }>;
  // result: IResult;
}
