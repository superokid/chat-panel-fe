export interface Response {
  meta: {
    status: number;
    message: string;
  };
  errors: object[] | null;
}
