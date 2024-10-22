import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchTeachers } from "../../redux/teachers/operations";
import { type QueryDetails } from "../../redux/teachers/operations";


type LoadMoreProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMore = ({setCurrentPage} : LoadMoreProps) => {
  const [fetchRange, setFetchRange] = useState<
    Pick<QueryDetails, "from" | "to">
  >({
    from: 3,
    to: 5,
  });

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1)
    dispatch(fetchTeachers({ ...fetchRange, isFirstBatch: false }));

    const newRange = {
      from: fetchRange.to + 1, 
      to: fetchRange.to + 3,  
    };

    setFetchRange(newRange); 
  };

  return <button onClick={handleLoadMore}>Load more</button>;
};

export default LoadMore;
