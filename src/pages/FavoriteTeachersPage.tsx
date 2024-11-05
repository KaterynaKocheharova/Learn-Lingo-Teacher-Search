import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectFavorites } from "../redux/favorites/selectors";
import {
  selectError,
  selectFavoriteTeachers,
} from "../redux/favoriteTeachers/seletcors";
import { selectIsLoading } from "../redux/teachers/selectros";
import { fetchFavoriteTeachers } from "../redux/favoriteTeachers/operations";

import PageSection from "../components/common/PageSection";
import PageContainer from "../components/common/PageContainer";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import PageError from "../components/common/PageError";
import Loader from "../components/common/Loader";

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
    <PageSection>
      <PageContainer px={{ base: "16px", lg: "64px" }}>
        {!error && <TeacherCardsList teachers={favoriteTeachers} />}
        {error && <PageError error={typeof error === "string" ? error : ""} />}
        {isLoading && <Loader />}
        {!favoriteTeachersIds.length && (
          <PageError error="You have no teachers in your favorites" />
        )}
      </PageContainer>
    </PageSection>
  );
};

export default FavoriteTeachersPage;
