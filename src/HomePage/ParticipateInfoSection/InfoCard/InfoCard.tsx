import React, { ReactElement } from "react";

export interface InfoCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="col-span-12 w-[80%] bg-lightgrey rounded-[20px] py-[10vh] lg:col-span-6 w-full px-[4ch]">
      <div>{icon}</div>
      <p className="poppinslight !font-semibold text-[24px] mt-3">{title}</p>
      <p className="poppinslight !font-medium text-semidarkgrey text-[16px] mt-2">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
