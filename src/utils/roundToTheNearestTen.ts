type NumberFormattingFunction = (num: number) => number;

export const roundDownToNearestTen: NumberFormattingFunction = (num) => {
  return Math.floor(num / 10) * 10;
};
