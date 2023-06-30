export interface IVoteResult {
  agree: number;
  disagree: number;
}

export interface ICreateVote {
  title: string;
}

export interface IVote {
  id: number;
  title: string;
  result: IVoteResult;
  createdAt: string;
}
