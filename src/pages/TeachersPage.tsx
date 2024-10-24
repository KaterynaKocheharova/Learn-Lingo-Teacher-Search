import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTeachers } from "../redux/teachers/operations";
import {
  selectError,
  selectTeachers,
  selectIsLoading,
} from "../redux/teachers/selectros";
import { refreshFavorites } from "../redux/favorites/slice.js";
import { selectUserId } from "../redux/auth/selectors.js";
import { Box } from "@chakra-ui/react";
import PageContainer from "../components/common/PageContainer";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import LoadMore from "../components/TeachersPageComponents/LoadMore";
import PageError from "../components/common/PageError";
import Loader from "../components/common/Loader";
import { teachersDB } from "../config/firebase.js";
import { ref, get } from "firebase/database";
import { onSnapshot, doc } from "firebase/firestore";
import { firestore } from "../config/firebase.js";

const TeachersPage = () => {
  const currentUserId = useAppSelector(selectUserId);

  const teachers = useAppSelector(selectTeachers);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // consider reducing the amount of code later
  
  if (currentUserId) {
    console.log(currentUserId);
    onSnapshot(doc(firestore, "users", currentUserId), (docSnapshot) => {
      if (docSnapshot.exists()) {
        const favorites = docSnapshot.data()?.favorites;
        console.log(favorites);
        dispatch(refreshFavorites({ favoriteTeachersIds: favorites }));
      } else {
        console.log("No such document!");
      }
    });
  } else {
    console.log("Invalid user ID. Cannot set up onSnapshot.");
  }

  const totalPages = useMemo(
    () => Math.ceil(totalTeachers / 3),
    [totalTeachers]
  );

  const teacherDBRef = ref(teachersDB, "teacherInTotal/");

  useEffect(() => {
    get(teacherDBRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTotalTeachers(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    dispatch(fetchTeachers({ startKey: "0", isFirstBatch: true }));
  }, [dispatch]);

  return (
    <Box bg="brand.gray.500" py="96px">
      <PageContainer px={{ base: "16px", lg: "64px" }}>
        {!error && <TeacherCardsList teachers={teachers} />}
        {!isLoading &&
          !error &&
          teachers.length > 0 &&
          currentPage < totalPages && (
            <LoadMore setCurrentPage={setCurrentPage} />
          )}
        {error && <PageError />}
        {isLoading && <Loader />}
      </PageContainer>
    </Box>
  );
};

export default TeachersPage;
