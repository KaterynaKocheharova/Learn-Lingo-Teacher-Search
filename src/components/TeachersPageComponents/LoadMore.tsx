import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchTeachers } from "../../redux/teachers/operations";
import AppButton from "../common/AppButton";
import { Center } from "@chakra-ui/react";
import { handleSmoothScrollDown } from "../../utils/handleSmoothScrollDown";

type LoadMoreProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMore = ({ setCurrentPage }: LoadMoreProps) => {
  const dispatch = useAppDispatch();
  const lastKey = useAppSelector((state) => state.teachers.lastKey);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
    dispatch(fetchTeachers({ startKey: lastKey, isFirstBatch: false }))
      .unwrap()
      .then(() => {
        handleSmoothScrollDown();
      });
  };

  return (
    <Center>
      <AppButton
        onClick={handleLoadMore}
        py="16px"
        px="48px"
        w="183px"
        h="60px"
        mx="auto"
      >
        Load more
      </AppButton>
    </Center>
  );
};

export default LoadMore;
