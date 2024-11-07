import { useState, useMemo, useEffect } from "react";
import { nanoid } from "nanoid";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import AnimatedFigure from "./AnimatedFigure";
import { useToast } from "@chakra-ui/react";
import { toastConfigs } from "../../config/toast";

type AnimationWrapperProps = {
  children: React.ReactNode;
};

const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  const showAnimatedFigures = useBreakpointValue({ base: false, lg: true });
  const toast = useToast();

  const [isClicked, setIsClicked] = useState<string[]>([]);

  const animatedFigures = useMemo(
    () =>
      Array.from({ length: 19 }, (_, index) => ({
        id: `figure-${nanoid()}`,
        top: `${5 * (index + 1)}%`,
        animation: `${10 - index * 0.5}s linear infinite`,
      })),
    []
  );

  const handleClicked = (id: string) => {
    setIsClicked((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (isClicked.length === animatedFigures.length) {
      toast({
        ...toastConfigs,
        description: "Congrats! You killed all circles",
        status: "success",
      });
    }
  }, [isClicked]);

  //   const animatedFigures = useMemo(
  //     () =>
  //       Array.from({ length: 19 }, (_, index) => ({
  //         id: `figure-${nanoid()}`,
  //         top: `${5 * (index + 1)}%`,
  //         animation: `${5 + index * 2}s linear infinite`,
  //       })),
  //     []
  //   );

  return (
    <Box pos="relative">
      {showAnimatedFigures &&
        animatedFigures.map((figure) => (
          <AnimatedFigure
            id={figure.id}
            onClick={() => handleClicked(figure.id)}
            display={isClicked.includes(figure.id) ? "none" : "block"}
            key={figure.id}
            top={figure.top}
            right="1%"
            animation={
              isClicked.includes(figure.id) ? "none" : figure.animation
            }
          />
        ))}

      {children}
    </Box>
  );
};

export default AnimationWrapper;
