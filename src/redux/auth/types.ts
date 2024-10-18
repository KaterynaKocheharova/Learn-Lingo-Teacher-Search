export type UserData = {
  user: {
    name: string;
    email: string;
  };
  error: Error | string | null;
  isLoggedIn: boolean;
  isLoading: "overlay-loader" | "button-loader" | "";
};
