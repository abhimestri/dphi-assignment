import { Button } from "react-bootstrap";
import { ReactComponent as RocketIcon } from "../../assets/icons/PicsArt_04-14-04.42 1.svg";
import { ReactComponent as AIIcon } from "../../assets/icons/Group 1000002515.svg";
import { ReactComponent as Scientists } from "../../assets/icons/Group 1000002516.svg";
import { ReactComponent as Healing } from "../../assets/icons/Group 1000002518.svg";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[80%] w-full px-16 py-20 bg-primarylight md:px-36 py-24">
        <div className="md:flex gap-x-2">
          <div className="flex gap-x-6 md:gap-x-12">
            <div className="min-w-[10px] h-[16vh] bg-yellow" />
            <div>
              <div className="w-full md:w-[44vw]">
                <p className="text-[48px] font-semibold text-white p-0 leading-[3.5rem]">
                  Accelerate Innovation with Global AI Challenges
                </p>
              </div>
              <div className="mt-10 w-full md:w-[40vw]">
                <p className="text-white text-[18px] leading-[28px] font-medium">
                  AI Challenges at DPhi simulate real-world problems. It is a
                  great place to put your AI/Data Science skills to test on
                  diverse datasets allowing you to foster learning through
                  competitions.
                </p>
              </div>
              <Button
                variant="light"
                className="mt-10 rounded-[10px] text-[18px] text-primarylight !font-bold font-poppinslight px-4 py-2"
                onClick={() => navigate("/create-hackthon")}
              >
                Create Challenge
              </Button>
            </div>
          </div>
          <div className="hidden lg:block pl-16 !mt-[-14px]">
            <RocketIcon />
          </div>
        </div>
      </div>
      <div className="bg-primarydark h-[20%] px-52 py-5 pt-6 m-auto flex justify-center items-start flex-col md:flex-row gap-x-20 px-20">
        <div className="flex mb-10 gap-x-4">
          <div className="">
            <AIIcon />
          </div>
          <div className="text-white">
            <p className="m-0 font-bold text-[24px]">100K +</p>
            <p className="m-0 text-[16px] font-medium">AI modal submissions</p>
          </div>
        </div>
        <div className="hidden md:block min-w-[1px] h-[8vh] bg-white" />
        <div className="flex mb-10 gap-x-4">
          <div>
            <Scientists />
          </div>
          <div className="text-white">
            <p className="m-0 font-bold text-[24px]">50k+</p>
            <p className="m-0 text-[16px] font-medium">Data Scientists</p>
          </div>
        </div>
        <div className="hidden md:block min-w-[1px] h-[8vh] bg-white" />
        <div className="flex gap-x-4">
          <div>
            <Healing />
          </div>
          <div className="text-white">
            <p className="m-0 font-bold text-[24px]">100+</p>
            <p className="m-0 text-[16px] font-medium">AI challenges hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
