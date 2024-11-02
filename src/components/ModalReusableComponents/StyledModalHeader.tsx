import { ModalHeader, ModalHeaderProps } from "@chakra-ui/react";
import React from "react";

type StyledModalHeaderProps = {
  children: React.ReactNode;
} & Partial<ModalHeaderProps>;

const StyledModalHeader = ({ children }: StyledModalHeaderProps) => {
  return (
    <ModalHeader as="h2" fontWeight="medium" fontSize="40px" lineHeight="1.2" mb="20px" p="0">
      {children}
    </ModalHeader>
  );
};

export default StyledModalHeader;
