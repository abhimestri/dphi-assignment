import React from "react";
import { participateInfoCardData } from "../../constant";
import InfoCard, { InfoCardProps } from "./InfoCard/InfoCard";

const ParticipateInfoSection = () => {
  return (
    <div className="px-40 py-16 mt-4">
      <p className="text-[32px] font-semibold text-center">
        Why Participate in <span className="text-green">AI Challenges?</span>
      </p>
      <div className="grid grid-cols-12 gap-x-10 gap-y-8 mt-14">
        {participateInfoCardData?.map((item: InfoCardProps) => {
          return (
            <InfoCard
              icon={item.icon}
              description={item?.description}
              title={item?.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipateInfoSection;
