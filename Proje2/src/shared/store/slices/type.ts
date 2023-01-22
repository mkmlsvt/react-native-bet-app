export type UserType = {
  id: number;
  email: string;
  userName: string;
  password: string;
  credit: number;
  score: number;
};

export interface MatchPredict {
  matchId: string;
  prediction: number;
  rate: number;
  isActive: boolean;
  result: boolean;
}

export interface CouponType {
  ownerId: number | null;
  result: boolean;
  totalRate: number;
  isActive: boolean;
  matchPredicts: MatchPredict[] | null;
}
