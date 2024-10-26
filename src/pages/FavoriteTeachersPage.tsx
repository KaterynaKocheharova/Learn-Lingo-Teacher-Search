import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectFavorites } from "../redux/favorites/selectors";
import { fetchFavoriteTeachers } from "../redux/favoriteTeachers/operations";

import { Box } from "@chakra-ui/react";
import PageContainer from "../components/common/PageContainer";

const FavoriteTeachersPage = () => {
  const favoriteTeachersIds = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchFavoriteTeachers({
        favoriteTeachersIds,
      })
    );
  }, [dispatch, favoriteTeachersIds]);

  return (
    <Box bg="brand.gray.500" py="96px">
      {/* <PageContainer px={{ base: "16px", lg: "64px" }}> */}
      {/* {!error && <TeacherCardsList teachers={teachers} />} */}
      {/* {error && <PageError />}
        {isLoading && <Loader />} */}
      {/* </PageContainer> */}
    </Box>
  );
};

export default FavoriteTeachersPage;
