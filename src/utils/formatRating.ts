type FormatRating = (arg: number) => string;

export const formatRating: FormatRating = (number) => {
  return number % 1 === 0 ? `${number}.0` : number.toString();
};
