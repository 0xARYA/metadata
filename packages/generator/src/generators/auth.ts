export interface AuthData {
  auth: {form: {method: string}};
}

export const generate = (): AuthData => ({auth: {form: {method: 'POST'}}});
