import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTeachers } from "../redux/teachers/operations";
import { selectError, selectTeachers } from "../redux/teachers/selectros";
import { Box } from "@chakra-ui/react";
import PageContainer from "../components/common/PageContainer";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import LoadMore from "../components/TeachersPageComponents/LoadMore";
import { selectIsLoading } from "../redux/auth/selectors";
import PageError from "../components/common/PageError";

const TeachersPage = () => {
  const teachers = useAppSelector(selectTeachers);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeachers({ from: 0, to: 2, isFirstBatch: true }));
  }, [dispatch]);

  return (
    <Box bg="brand.gray.500" py="96px">
      <PageContainer px={{ base: "16px", lg: "64px" }}>
        {!error && <TeacherCardsList teachers={teachers} />}
        {!isLoading && !error && teachers.length > 0 && <LoadMore />}
        {error && <PageError />}
      </PageContainer>
    </Box>
  );
};

export default TeachersPage;
