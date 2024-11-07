import { Image } from "@chakra-ui/react";
import { Box, BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

type AninmatedFigureProps = BoxProps & {
  animation: string;
};

const circlesAnimation = keyframes`
  0% {
    transform: scale(0) translate(0);
    opacity: 1;
  }
  100% {
      transform: scale(1.3) translate(-90px);
    opacity: 1;
  }
`;

const AnimatedFigure = ({ animation, ...props }: AninmatedFigureProps) => {
  return (
    <Box
      pos="absolute"
      w="30px"
      h="30px"
      borderRadius="60px"
      bg="transparent"
      border="3px solid #FFDC86"
      animation={`${circlesAnimation} ${animation}`}
      {...props}
    >
      <Image
        src="/favicon.jpg"
        borderRadius="full"
        fit="cover"
        alt="a student pic inside a bubble"
      />
    </Box>
  );
};

export default AnimatedFigure;
