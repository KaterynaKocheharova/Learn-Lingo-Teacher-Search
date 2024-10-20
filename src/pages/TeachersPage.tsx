import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTeachers } from "../redux/teachers/operations";
import { selectTeachers } from "../redux/teachers/selectros";
import { Box } from "@chakra-ui/react";
import PageContainer from "../components/common/PageContainer";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import LoadMore from "../components/TeachersPageComponents/LoadMore";

const TeachersPage = () => {
  const teachers = useAppSelector(selectTeachers);
  console.log(teachers.filter((teacher) => teacher !== undefined));

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeachers({ from: 0, to: 2, isFirstBatch: true }));
  }, [dispatch]);

  return (
    <Box bg="brand.gray.500" py="96px">
      <PageContainer px={{ lg: "64px" }}>
        <TeacherCardsList teachers={teachers} />
        <LoadMore />
      </PageContainer>
    </Box>
  );
};

export default TeachersPage;
