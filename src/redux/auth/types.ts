import { type FetchingData } from "../types";
import { type RegisterInputValues } from "../../components/Auth/types";

export type UserSliceState = {
  user: {
    userId: string;
  };
  isLoggedIn: boolean;
  isLoading:
    | "registration-in-progress"
    | "logining-in-progress"
    | "logout-in-progress"
    | "";
} & Pick<FetchingData, "error">;

export type RegisterPayload = RegisterInputValues & {
  userId: string;
};

export type RefreshUserPayload = {
  userId: string;
};
