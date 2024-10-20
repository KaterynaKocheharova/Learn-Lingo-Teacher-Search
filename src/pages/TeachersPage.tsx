import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchTeachers } from "../redux/teachers/operations";
import { selectTeachers } from "../redux/teachers/selectros";
import LoadMore from "../components/TeachersPageComponents/LoadMore";

const TeachersPage = () => {
  const teachers = useAppSelector(selectTeachers);
  console.log(teachers.filter((teacher) => teacher !== undefined));
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTeachers({ from: 0, to: 2, isFirstBatch: true }));
  }, [dispatch]);

  return (
    <div>
      <LoadMore />
    </div>
  );
};

export default TeachersPage;
