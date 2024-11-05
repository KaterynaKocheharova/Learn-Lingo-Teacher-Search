import PageSection from "../components/common/PageSection.js";
import PageContainer from "../components/common/PageContainer";
import Filters from "../components/Filters/Filters.js";
import TeacherCardsList from "../components/TeachersPageComponents/TeacherCardsList";
import LoadMore from "../components/TeachersPageComponents/LoadMore";
import PageError from "../components/common/PageError";
import Loader from "../components/common/Loader";

import { useFetchTeachers } from "../hooks/useFetchTeachers.js";

const TeachersPage = () => {
  const {
    isFiltered,
    teachers,
    error,
    isLoading,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useFetchTeachers();

  return (
    <PageSection>
      <PageContainer>
        <Filters />
        {!error && <TeacherCardsList teachers={teachers} />}
        {!isLoading &&
          !error &&
          teachers.length > 0 &&
          currentPage < totalPages &&
          !isFiltered && <LoadMore setCurrentPage={setCurrentPage} />}
        {error && <PageError error={typeof error === "string" ? error : ""} />}
        {isLoading && <Loader />}
      </PageContainer>
    </PageSection>
  );
};

export default TeachersPage;
