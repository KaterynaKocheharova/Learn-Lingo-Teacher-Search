import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectFilters } from "../redux/filters/selectors";
import { removeIsFilteredFlag } from "../redux/teachers/slice";
import { SelectIsFiltered } from "../redux/teachers/selectros";
import {
  fetchFilteredTeachers,
  fetchTeachers,
} from "../redux/teachers/operations";

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const isFiltered = useAppSelector(SelectIsFiltered);

  const applyFilters = () => {
    if (filters.language || (filters.from && filters.to) || filters.level) {
      dispatch(
        fetchFilteredTeachers({
          filters: { ...filters },
        })
      );
    } else {
      dispatch(removeIsFilteredFlag());
      if (!isFiltered) {
        dispatch(
          fetchTeachers({
            isFirstBatch: true,
          })
        );
      }
    }
  };

  const resetFilters = () => {
    dispatch(removeIsFilteredFlag());
    dispatch(
      fetchTeachers({
        isFirstBatch: true,
      })
    );
  };

  return {
    filters,
    isFiltered,
    applyFilters,
    resetFilters,
  };
};
