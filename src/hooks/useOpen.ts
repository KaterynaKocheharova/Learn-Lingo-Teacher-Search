import { useState, useCallback } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = () => {
    setIsOpen(true);
  };

  return { isOpen, close, open };
};
