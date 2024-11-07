// import { useState } from "react";
// import { nanoid } from "nanoid";
// import { Box, useBreakpointValue } from "@chakra-ui/react";
// import AnimatedFigure from "./AnimatedFigure";

// type AnimationWrapperProps = {
//   children: React.ReactNode;
// };

// const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
//   const showAnimatedFigures = useBreakpointValue({ base: false, lg: true });

//   const [isClicked, setIsClicked] = useState<string[]>([]);

//   const handleClicked = (e) => {
//     setIsClicked((prev) => {
//       return [...prev, e.currentTarget.id];
//     });
//   };

//   const animatedFigures = Array.from({ length: 19 }, (_, index) => ({
//     id: `figure-${nanoid()}`,
//     top: `${5 * (index + 1)}%`,
//     animation: `${5 + (index % 10)}s linear infinite`,
//   }));

//   return (
//     <Box pos="relative">
//       {showAnimatedFigures && (
//         <>
//           {animatedFigures.map((figure) => (
//             <AnimatedFigure
//               id={figure.id}
//               onClick={handleClicked}
//               display={isClicked.includes(figure.id) ? "none" : "block"}
//               key={figure.id}
//               top={figure.top}
//               right="1%"
//               animation={figure.animation}
//             />
//           ))}
//         </>
//       )}

//       {children}
//     </Box>
//   );
// };

// export default AnimationWrapper;

import { useState, useMemo } from "react";
import { nanoid } from "nanoid";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import AnimatedFigure from "./AnimatedFigure";

type AnimationWrapperProps = {
  children: React.ReactNode;
};

const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  const showAnimatedFigures = useBreakpointValue({ base: false, lg: true });

  const [isClicked, setIsClicked] = useState<string[]>([]);

  const handleClicked = (id: string) => {
    setIsClicked((prev) => [...prev, id]);
  };

  const animatedFigures = useMemo(
    () =>
      Array.from({ length: 19 }, (_, index) => ({
        id: `figure-${nanoid()}`,
        top: `${5 * (index + 1)}%`,
        animation: `${5 + index * 2}s linear infinite`,
      })),
    []
  );

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
