import { useContext, useState } from "react";
import SearchSection from "./SearchSection";
import HackthonCard from "../../components/HackthonCard/HackthonCard";
import { DefaultDataContext } from "../../context";
import { getFilteredList } from "../../utility";
import moment from "moment";

export interface ChallengeSectionProps {
  isFilterDropdownOpen: boolean;
  appliedFilters?: any;
  setIsFilterDropdownOpen: (data: boolean) => void;
  setAppliedFilters?: any;
  setSearchHackthon?: any;
}

const ChallengeSection = ({
  isFilterDropdownOpen,
  setIsFilterDropdownOpen,
  appliedFilters,
  setAppliedFilters,
}: ChallengeSectionProps) => {
  const { hackthonList }: any = useContext(DefaultDataContext);
  const [searchHackthon, setSearchHackthon] = useState<string>("");

  return (
    <>
      <SearchSection
        setIsFilterDropdownOpen={setIsFilterDropdownOpen}
        isFilterDropdownOpen={isFilterDropdownOpen}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        setSearchHackthon={setSearchHackthon}
      />
      <div className="bg-primarylight grid grid-cols-12 px-20 py-20 gap-x-12 md:px-26 lg:px-32 gap-x-16 gap-y-14">
        {[
          ...getFilteredList(appliedFilters, hackthonList, searchHackthon),
        ]?.map((data: any) => {
          return (
            <HackthonCard
              id={data?.id}
              imageUrl={data?.imageUrl}
              title={data?.title}
              status={data?.status}
              expiryDate={data?.expiryDate}
              startDate={data?.startDate}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChallengeSection;
