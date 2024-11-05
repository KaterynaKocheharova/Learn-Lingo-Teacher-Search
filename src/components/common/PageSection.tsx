import { Box, useBreakpointValue } from "@chakra-ui/react";
import AnimatedFigure from "./AnimatedFigure";

type PageSectionProps = {
  children: React.ReactNode;
};

const PageSection = ({ children }: PageSectionProps) => {
  const showAnimatedFigures = useBreakpointValue({ base: false, lg: true });

  const animatedFigures = [
    { top: "5%", animation: "8s linear infinite" },
    { top: "10%", animation: "12s linear infinite" },
    { top: "15%", animation: "7s linear infinite" },
    { top: "20%", animation: "10s linear infinite" },
    { top: "25%", animation: "5s linear infinite" },
    { top: "30%", animation: "14s linear infinite" },
    { top: "35%", animation: "6s linear infinite" },
    { top: "40%", animation: "9s linear infinite" },
    { top: "45%", animation: "11s linear infinite" },
    { top: "50%", animation: "13s linear infinite" },
    { top: "55%", animation: "7s linear infinite" },
    { top: "60%", animation: "15s linear infinite" },
    { top: "65%", animation: "6s linear infinite" },
    { top: "70%", animation: "9s linear infinite" },
    { top: "75%", animation: "8s linear infinite" },
    { top: "80%", animation: "14s linear infinite" },
    { top: "85%", animation: "7s linear infinite" },
    { top: "90%", animation: "10s linear infinite" },
    { top: "95%", animation: "12s linear infinite" },
  ];

  return (
    <Box
      backgroundImage="linear-gradient(90deg, var(--chakra-colors-brand-gray-500), var(--chakra-colors-brand-gray-300))"
      py="96px"
      as="section"
      minHeight="100vh"
      pos="relative"
      w="100%"
      h="100%"
      overflow="hidden"
    >
      {showAnimatedFigures && (
        <>
          {animatedFigures.map((figure, index) => (
            <AnimatedFigure
              key={index}
              top={figure.top}
              right="1%"
              animation={figure.animation}
            />
          ))}
        </>
      )}

      {children}
    </Box>
  );
};

export default PageSection;
