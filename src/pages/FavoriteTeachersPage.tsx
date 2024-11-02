import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectFavorites } from "../redux/favorites/selectors";
import { fetchFavoriteTeachers } from "../redux/favoriteTeachers/operations";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import PageError from "../components/common/PageError";
import Loader from "../components/common/Loader";
import { Box, Text, Center } from "@chakra-ui/react";
import PageContainer from "../components/common/PageContainer";
import {
  selectError,
  selectFavoriteTeachers,
} from "../redux/favoriteTeachers/seletcors";
import { selectIsLoading } from "../redux/teachers/selectros";

const FavoriteTeachersPage = () => {
  const favoriteTeachersIds = useAppSelector(selectFavorites);
  const favoriteTeachers = useAppSelector(selectFavoriteTeachers);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchFavoriteTeachers({
        favoriteTeachersIds,
      })
    );
  }, [dispatch, favoriteTeachersIds]);

  return (
    <Box bg="brand.gray.500" py="96px" as="section" minHeight="100vh">
      <PageContainer px={{ base: "16px", lg: "64px" }}>
        {!error && <TeacherCardsList teachers={favoriteTeachers} />}
        {error && <PageError />}
        {isLoading && <Loader />}
      </PageContainer>
      {!favoriteTeachersIds.length && (
        <PageError error="You have no teachers in your favorites" />
      )}
    </Box>
  );
};

export default FavoriteTeachersPage;
