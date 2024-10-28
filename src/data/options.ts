
export type Option = {
  value: string;
  label: string;
} | {};

export type Options = Option[];

export const levelsOptions: Options = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper Intermediate", label: "B2 Upper Intermediate" },
  { value: "C1 Advanced", label: "C1 Advanced" },
  { value: "C2 Proficient", label: "C2 Proficient" },
];

export const pricesOptions: Options = [
  { value: "10", label: "10 $" },
  { value: "20", label: "20 $" },
  { value: "30", label: "30 $" },
  { value: "40", label: "40 $" },
];

