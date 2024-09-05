import Navbar from "../container/Navbar";
import { Outlet } from "react-router-dom";
import { DefaultDataContext } from "../context";
import { useState } from "react";
import img1 from "../assets/cardimage/Group_1000002466.png";
import img2 from "../assets/cardimage/Group 1000002766.png";
import img3 from "../assets/cardimage/Group 1000002767.png";
import img4 from "../assets/cardimage/Group 1000002771.png";
import img5 from "../assets/cardimage/Group 1000002773.png";
import img6 from "../assets/cardimage/Group 1000002772.png";
import moment from "moment";

const Main = () => {
  const [hackthonList, setHackthonList] = useState([
    {
      id: "1",
      title: "Data Science Bootcamp - Graded Datathon",
      expiryDate: moment().add(3, "days").add(6, "hours")?.add(22, "minutes"),
      startDate: moment().add(1, "days").add(1, "hours")?.add(33, "minutes"),
      status: "upcoming",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "easy",
      imageUrl: img1,
    },
    {
      id: "2",
      title: "Data Sprint 72 - Butterfly identification",
      expiryDate: moment().add(5, "days").add(3, "hours")?.add(10, "minutes"),
      startDate: moment().add(1, "days").add(8, "hours")?.add(13, "minutes"),
      status: "upcoming",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "easy",
      imageUrl: img2,
    },
    {
      id: "3",
      title: "Data Sprint 72 - weather recognition",
      expiryDate: moment().add(2, "days").add(6, "hours")?.add(10, "minutes"),
      startDate: moment()
        .subtract(1, "days")
        .add(4, "hours")
        ?.add(39, "minutes"),
      status: "active",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "medium",
      imageUrl: img3,
    },
    {
      id: "4",
      title: "Data Sprint 70 - Airline passenger satisfcation",
      expiryDate: moment().add(10, "days").add(1, "hours")?.add(21, "minutes"),
      startDate: moment().add(4, "days").add(4, "hours")?.add(51, "minutes"),
      status: "upcoming",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "hard",
      imageUrl: img4,
    },
    {
      id: "5",
      title: "Engineering Gradutes Employment outcomes",
      expiryDate: moment()
        .subtract(1, "days")
        .add(10, "hours")
        ?.add(30, "minutes"),
      startDate: moment()
        .subtract(3, "days")
        .add(2, "hours")
        ?.add(43, "minutes"),
      status: "past",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "medium",
      imageUrl: img5,
    },
    {
      id: "6",
      title: "Travel insurance claim prediction",
      expiryDate: moment().add(4, "days").add(10, "hours")?.add(30, "minutes"),
      startDate: moment().add(1, "days").add(12, "hours")?.add(23, "minutes"),
      status: "upcoming",
      description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
      level: "easy",
      imageUrl: img6,
    },
  ]);

  return (
    <DefaultDataContext.Provider
      value={{
        hackthonList: hackthonList,
        setHackthonList: setHackthonList,
      }}
    >
      <Navbar />
      <Outlet />
    </DefaultDataContext.Provider>
  );
};

export default Main;
