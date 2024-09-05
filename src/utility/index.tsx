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
    filteredList = [...filteredList];
  } else {
    console.log({ appliedFilters });
    if (sortApplied[0] === "newest") {
      console.log("p");
      filteredList =
        filteredList?.length === 0
          ? challengeList?.sort((a: any, b: any) => {
              return moment(a.startDate).unix() - moment(b.startDate).unix();
            })
          : filteredList?.sort((a: any, b: any) => {
              return moment(a.startDate).unix() - moment(b.startDate).unix();
            });
    } else if (sortApplied[0] === "oldest") {
      filteredList =
        filteredList?.length === 0
          ? challengeList?.sort((a: any, b: any) => {
              return moment(b.startDate).unix() - moment(a.startDate).unix();
            })
          : filteredList?.sort((a: any, b: any) => {
              return moment(b.startDate).unix() - moment(a.startDate).unix();
            });
    }
    if (
      appliedFilters?.length >= 1 &&
      (sortApplied[0] !== "newest" || sortApplied[0] !== "oldest")
    ) {
      filteredList = filteredList?.filter(
        (item: any) =>
          appliedFilters?.indexOf(item?.status) >= 0 ||
          appliedFilters?.indexOf(item?.level) >= 0
      );
    }
  }
  if (searchKey) {
    filteredList = [
      ...filteredList?.filter((item: any) =>
        item?.title?.toLowerCase()?.includes(searchKey?.toLowerCase())
      ),
    ];
  }

  if (
    appliedFilters?.length === 1 &&
    (sortApplied[0] === "newest" || sortApplied[0] === "oldest")
  ) {
    filteredList =
      sortApplied[0] === "newest"
        ? filteredList?.sort((a: any, b: any) => {
            return moment(a.startDate).unix() - moment(b.startDate).unix();
          })
        : filteredList?.sort((a: any, b: any) => {
            return moment(b.startDate).unix() - moment(a.startDate).unix();
          });
  }
  return [...filteredList];
};

export const formFields = [
  {
    props: {
      name: "title",
      type: "text",
      required: true,
    },
    label: "Challenge Name",
    errorMessage: "Enter challenge name",
  },
  {
    props: {
      name: "startDate",
      type: "date",
      required: true,
    },
    label: "Start Date",
    errorMessage: "Please choose a Start date.",
  },
  {
    props: {
      name: "expiryDate",
      type: "date",
      required: true,
    },
    label: "Expiry Date",
    errorMessage: "Please choose a End date.",
  },
  {
    props: {
      name: "description",
      type: "date",
      as: "textarea",
      required: true,
      rows: 10,
    },
    label: "Description",
    errorMessage: "Please enter description.",
  },
];

export const filterList = [
  { type: "checkbox", label: "All", name: "all" },
  { type: "checkbox", label: "Active", name: "active" },
  { type: "checkbox", label: "Upcoming", name: "upcoming" },
  { type: "checkbox", label: "Past", name: "past" },
  { type: "checkbox", label: "Easy", name: "easy" },
  { type: "checkbox", label: "Medium", name: "medium" },
  { type: "checkbox", label: "Hard", name: "hard" },
];
