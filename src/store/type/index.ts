export interface Response {
  meta: {
    status: number;
  };
  error: object[] | null;
}
