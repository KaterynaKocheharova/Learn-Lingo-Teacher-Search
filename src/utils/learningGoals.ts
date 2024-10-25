export type Goals = "business" | "kids" | "abroad" | "study" | "travel" | "";

type LearningGoal = {
  goal: string;
  fieldValue: "business" | "kids" | "abroad" | "study" | "travel";
};

type LearningGoals = LearningGoal[];

export const learningGoals: LearningGoals = [
  {
    goal: "Career and business",
    fieldValue: "business",
  },
  {
    goal: "Lesson for kids",
    fieldValue: "kids",
  },
  {
    goal: "Living abroad",
    fieldValue: "abroad",
  },
  {
    goal: "Exams and coursework",
    fieldValue: "study",
  },
  {
    goal: "Culture, travel, or hobby",
    fieldValue: "travel",
  },
];
