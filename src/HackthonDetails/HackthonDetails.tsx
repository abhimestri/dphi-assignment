import { Button } from "react-bootstrap";
import HeaderSection from "./HeaderSection";

const HackthonDetails = () => {
  return (
    <div>
      <HeaderSection />
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
        <p>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
        </p>
        <br />
        <p>
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
        </p>{" "}
        <br />
        <p>
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </div>
    </div>
  );
};

export default HackthonDetails;
