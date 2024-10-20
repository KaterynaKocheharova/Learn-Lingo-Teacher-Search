import { RootState } from "../store";
import { type Teachers } from './types';

type SelectBoolean = (state: RootState) => boolean;
type SelectTeachers = (state: RootState) => Teachers;


export const selectIsLoading: SelectBoolean = (state) => state.teachers.isLoading;
export const selectTeachers: SelectTeachers = (state) => state.teachers.items;


