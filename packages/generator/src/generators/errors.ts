export interface ErrorsData {
  errors: {
    message: string;
  }[];
}

export const generate = (): ErrorsData => ({
  errors: [],
});
