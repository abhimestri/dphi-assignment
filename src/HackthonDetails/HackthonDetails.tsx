import { Button } from "react-bootstrap";
import HeaderSection from "./HeaderSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dataProps, defaultData } from "../Data";

const HackthonDetails = () => {
  const [hackthonDetails, setHackthonDetails] = useState<dataProps>();

  const params = useParams();

  useEffect(() => {
    const data = defaultData?.filter(
      (data: dataProps) => data?.id === params?.id && data
    )[0];
    console.log({ data });
    setHackthonDetails(data);
  }, [params]);

  return (
    <div>
      <HeaderSection hackthonDetails={hackthonDetails} />
      <div className="!shadow-lg !shadow-[#DDE6ED] w-full">
        <div className="px-32 py-[16px] pb-0 flex justify-between items-end">
          <div className="border-b-[4px] border-b-green w-[10%]">
            <p className="font-bold pb-2 text-center">Overview</p>
          </div>
          <div className="flex gap-x-4 items-center mb-[20px]">
            <Button className="py-[7px] px-8 bg-darkgreen border-0 rounded-[10px] text-[14px] font-semibold hover:bg-darkgreen">
              Edit
            </Button>
            <Button
              variant="outline-danger"
              className="py-[6px] px-6 rounded-[10px] text-[14px] font-semibold"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="text-semidarkgrey text-[18px] font-medium px-32 my-12">
        <p>{hackthonDetails?.description}</p>
      </div>
    </div>
  );
};

export default HackthonDetails;
