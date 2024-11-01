import { type ToastPosition } from "@chakra-ui/react";

type ToastConfigs = {
  duration?: number;
  isClosable?: boolean;
  position: ToastPosition;
};

export const toastConfigs: ToastConfigs = {
  duration: 2000,
  isClosable: true,
  position: "top-right",
};
