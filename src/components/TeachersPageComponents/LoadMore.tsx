import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTeachers } from "../../redux/teachers/operations";

type LoadMoreProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMore = ({ setCurrentPage }: LoadMoreProps) => {
  const dispatch = useAppDispatch();
  const lastKey = useAppSelector((state) => state.teachers.lastKey);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
    dispatch(fetchTeachers({ startKey: lastKey, isFirstBatch: false }));
  };

  return <button onClick={handleLoadMore}>Load more</button>;
};

export default LoadMore;
