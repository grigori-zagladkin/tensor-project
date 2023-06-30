export interface IResult {
  agree: number;
  disagree: number;
  abstained: number;
  dontknow: number;
}

export interface ICreateTheme {
  title: string;
  description: string;
}

export interface ITheme {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  // result: IResult;
}
