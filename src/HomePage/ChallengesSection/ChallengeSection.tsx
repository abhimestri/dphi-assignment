import React from "react";
import SearchSection from "./SearchSection";
import HackthonCard from "../../components/HackthonCard/HackthonCard";
import { dataProps, defaultData } from "../../Data";

const ChallengeSection = () => {
  return (
    <>
      <SearchSection />
      <div className="bg-primarylight grid grid-cols-12 px-20 py-20 gap-x-12 md:px-26 lg:px-32 gap-x-16 gap-y-14">
        {defaultData?.map((data: dataProps) => {
          return (
            <HackthonCard
              id={data?.id}
              imageUrl={data?.imageUrl}
              title={data?.title}
              status={data?.status}
              duration={data?.expiryDate}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChallengeSection;
