export interface LsubidData {
  lsUbid: string;
}

export const generate = (): LsubidData => ({
  lsUbid: `X59-9642719-1673432:${Math.floor(new Date().getTime() / 1e3)}`,
});
