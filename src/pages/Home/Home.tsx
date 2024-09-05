import { useEffect, useRef, useState } from "react";
import ChallengeSection from "../../HomePage/ChallengesSection/ChallengeSection";
import HeaderSection from "../../HomePage/HeaderSection/HeaderSection";
import ParticipateInfoSection from "../../HomePage/ParticipateInfoSection/ParticipateInfoSection";

const HomePage = () => {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] =
    useState<boolean>(false);
  const [appliedFilters, setAppliedFilters] = useState<Array<string>>([]);
  const ref: any = useRef(null);
  const [screenSize, setScreenSize] = useState(ref?.current?.clientHeight);

  const handleResize = () => {
    setScreenSize(ref.current.clientHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [appliedFilters, setAppliedFilters, ref]);

  useEffect(() => {
    handleResize();
  }, [appliedFilters?.length]);

  return (
    <>
      {isFilterDropdownOpen ? (
        <div
          style={{
            background: "#000",
            position: "absolute",
            top: 0,
            width: "100%",
            opacity: "0.6",
            zIndex: 2,
            height: screenSize
              ? `${screenSize + 69}px`
              : `${ref?.current?.clientHeight + 69}px`,
          }}
        ></div>
      ) : (
        ""
      )}
      <div ref={ref}>
        <HeaderSection />
        <ParticipateInfoSection />
        <ChallengeSection
          setIsFilterDropdownOpen={setIsFilterDropdownOpen}
          isFilterDropdownOpen={isFilterDropdownOpen}
          setAppliedFilters={setAppliedFilters}
          appliedFilters={appliedFilters}
        />
      </div>
    </>
  );
};

export default HomePage;
