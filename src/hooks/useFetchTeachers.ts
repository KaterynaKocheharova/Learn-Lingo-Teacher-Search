import { useEffect, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTeachers } from "../redux/teachers/operations";
import {
  selectError,
  selectTeachers,
  selectIsLoading,
  SelectIsFiltered,
} from "../redux/teachers/selectros";

import { teachersDB } from "../config/firebase.ts";
import { ref, get } from "firebase/database";

export const useFetchTeachers = () => {
  const isFiltered = useAppSelector(SelectIsFiltered);
  const teachers = useAppSelector(selectTeachers);
  const error = useAppSelector(selectError);
  const isLoading = useAppSelector(selectIsLoading);

  const dispatch = useAppDispatch();

  const [totalTeachers, setTotalTeachers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(totalTeachers / 4),
    [totalTeachers]
  );

  useEffect(() => {
    const teacherDBRef = ref(teachersDB, "teacherInTotal/");

    (async () => {
      const snapshot = await get(teacherDBRef);
      const total = snapshot.val();
      setTotalTeachers(total);
    })();

    dispatch(fetchTeachers({ startKey: "0", isFirstBatch: true }));
  }, [dispatch]);

  return {
    isFiltered,
    teachers,
    error,
    isLoading,
    currentPage,
    totalPages,
    setCurrentPage,
  };
};
