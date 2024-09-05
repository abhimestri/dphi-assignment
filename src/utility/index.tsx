import moment from "moment";

export const getFilteredList = (
  appliedFilters: any,
  challengeList: any,
  searchKey: any
) => {
  let filteredList: any = [...challengeList];
  const showAll =
    appliedFilters?.filter((item: any) => item === "all")?.length >= 1;
  const sortApplied = appliedFilters?.filter(
    (item: any) => item === "newest" || item === "oldest"
  );
  if (showAll || appliedFilters?.length === 0) {
    filteredList = [...challengeList];
  } else {
    filteredList = [
      ...challengeList?.filter(
        (item: any) =>
          appliedFilters?.indexOf(item?.status) >= 0 ||
          appliedFilters?.indexOf(item?.level) >= 0
      ),
    ];
  }
  if (searchKey) {
    filteredList = [
      ...filteredList?.filter((item: any) =>
        item?.title?.toLowerCase()?.includes(searchKey?.toLowerCase())
      ),
    ];
  }

  console.log({ sortApplied });
  if (sortApplied?.length >= 1) {
    if (sortApplied[0] === "newest") {
      return filteredList?.sort((a: any, b: any) => {
        return moment(a.startDate).unix() - moment(b.startDate).unix();
      });
    } else {
      return (filteredList = filteredList?.sort((a: any, b: any) => {
        return moment(a.startDate).unix() - moment(b.startDate).unix();
      }));
    }
  }

  return filteredList;
};
