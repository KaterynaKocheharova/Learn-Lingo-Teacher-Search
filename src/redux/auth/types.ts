export type UserData = {
  user: {
    name: string;
    email: string;
    userId: string;
  };
  error: Error | string | null;
  isLoggedIn: boolean;
  isLoading: "registration-in-progress" | "logining-in-progress" | "logout-in-progress" | "";
};
