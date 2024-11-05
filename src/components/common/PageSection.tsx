import { Box } from "@chakra-ui/react";
import AnimatedFigure from "./AnimatedFigure";

type PageSectionProps = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  return (
    <Box
      backgroundImage="linear-gradient(90deg, var(--chakra-colors-brand-gray-500), var(--chakra-colors-brand-orange-100))"
      py="96px"
      as="section"
      minHeight="100vh"
      pos="relative"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <AnimatedFigure top="5%" right="1%" animation="8s linear infinite" />
      <AnimatedFigure top="10%" right="1%" animation=" 12s linear infinite" />
      <AnimatedFigure top="15%" right="1%" animation=" 7s linear infinite" />
      <AnimatedFigure top="20%" right="1%" animation=" 10s linear infinite" />
      <AnimatedFigure top="25%" right="1%" animation=" 5s linear infinite" />
      <AnimatedFigure top="30%" right="1%" animation=" 14s linear infinite" />
      <AnimatedFigure top="35%" right="1%" animation=" 6s linear infinite" />
      <AnimatedFigure top="40%" right="1%" animation=" 9s linear infinite" />
      <AnimatedFigure top="45%" right="1%" animation=" 11s linear infinite" />
      <AnimatedFigure top="50%" right="1%" animation=" 13s linear infinite" />
      <AnimatedFigure top="55%" right="1%" animation=" 7s linear infinite" />
      <AnimatedFigure top="60%" right="1%" animation=" 15s linear infinite" />
      <AnimatedFigure top="65%" right="1%" animation=" 6s linear infinite" />
      <AnimatedFigure top="70%" right="1%" animation=" 9s linear infinite" />
      <AnimatedFigure top="75%" right="1%" animation=" 8s linear infinite" />
      <AnimatedFigure top="80%" right="1%" animation=" 14s linear infinite" />
      <AnimatedFigure top="85%" right="1%" animation=" 7s linear infinite" />
      <AnimatedFigure top="90%" right="1%" animation=" 10s linear infinite" />
      <AnimatedFigure top="95%" right="1%" animation=" 12s linear infinite" />

      {children}
    </Box>
  );
};

export default PageSection;
