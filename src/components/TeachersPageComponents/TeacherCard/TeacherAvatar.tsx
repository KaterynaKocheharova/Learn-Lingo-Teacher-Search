import { Image, Flex } from "@chakra-ui/react";

import { type Teacher } from "../../../redux/teachers/types";

type TeacherAvatarProps = Pick<Teacher, "avatar_url">;

const TeacherAvatar = ({ avatar_url }: TeacherAvatarProps) => {
  return (
    <Flex
      w="120px"
      h="120px"
      border="3px solid"
      borderColor="brand.orange.100"
      p="8px"
      rounded="60%"
      justify="center"
      align="center"
    >
      <Image
        src={avatar_url}
        alt="teacher avatar"
        rounded="60%"
        w="96px"
        h="96px"
      />
    </Flex>
  );
};

export default TeacherAvatar;
