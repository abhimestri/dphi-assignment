import { Button } from "react-bootstrap";
import HeaderSection from "./HeaderSection";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { dataProps, defaultData } from "../Data";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { DefaultDataContext } from "../context";

const HackthonDetails = () => {
  const [hackthonDetails, setHackthonDetails] = useState<any>();

  const { hackthonList, setHackthonList }: any = useContext(DefaultDataContext);
  const params = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const updatedHackthonList = hackthonList?.filter(
      (data: any) => data?.id !== params?.id
    );
    setHackthonList([...updatedHackthonList]);
    navigate("/");
  };

  useEffect(() => {
    // if (params?.id?.length === 1) {
    //   const data = defaultData?.filter(
    //     (data: dataProps) => data?.id === params?.id && data
    //   )[0];
    //   console.log({ data });
    //   setHackthonDetails(data);
    // } else {
    //   const docRef = doc(db, "data", `${params?.id}`);
    //   getDoc(docRef)?.then((snapshot) => {
    //     setHackthonDetails({ ...snapshot?.data() });
    //   });
    // }
    if (!hackthonDetails && params?.id) {
      console.log({ hackthonList });
      const currentHackthonDetail = hackthonList?.filter(
        (data: any) => data?.id === params?.id
      )[0];
      console.log({ currentHackthonDetail });
      setHackthonDetails(currentHackthonDetail);
    }
  }, [params, hackthonList, hackthonDetails]);

  return (
    <div>
      <HeaderSection hackthonDetails={hackthonDetails} />
      <div className="!shadow-lg !shadow-[#DDE6ED] w-full">
        <div className="py-[16px] pb-0 flex justify-between items-end px-10 md:px-32 ">
          <div className="border-b-[4px] border-b-green w-[140px]">
            <p className="font-bold pb-2 text-center">Overview</p>
          </div>
          <div className="flex gap-x-4 items-center mb-[20px]">
            <Button
              onClick={() => navigate(`/edit-hackthon/${params?.id}`)}
              className="py-[7px] px-8 bg-darkgreen border-0 rounded-[10px] text-[14px] font-semibold hover:bg-darkgreen"
            >
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="outline-danger"
              className="py-[6px] px-6 rounded-[10px] text-[14px] font-semibold"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="text-semidarkgrey text-[18px] font-medium my-12 px-10 md:px-32">
        <p>{hackthonDetails?.description}</p>
      </div>
    </div>
  );
};

export default HackthonDetails;
