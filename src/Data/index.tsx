import img1 from "../assets/cardimage/Group_1000002466.png";
import img2 from "../assets/cardimage/Group 1000002766.png";
import img3 from "../assets/cardimage/Group 1000002767.png";
import img4 from "../assets/cardimage/Group 1000002771.png";
import img5 from "../assets/cardimage/Group 1000002773.png";
import img6 from "../assets/cardimage/Group 1000002772.png";

export interface dataProps {
  id: string;
  title: string;
  expiryDate: Date;
  status: "upcoming" | "active" | "past";
  description: string;
  level: "easy" | "medium" | "hard";
  imageUrl: string;
}

export const defaultData: Array<dataProps> = [
  {
    id: "1",
    title: "Data Science Bootcamp - Graded Datathon",
    expiryDate: new Date(new Date()?.getDate() + 1),
    status: "upcoming",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "easy",
    imageUrl: img1,
  },
  {
    id: "2",
    title: "Data Sprint 72 - Butterfly identification",
    expiryDate: new Date(new Date()?.getDate() + 1),
    status: "upcoming",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "easy",
    imageUrl: img2,
  },
  {
    id: "3",
    title: "Data Sprint 72 - weather recognition",
    expiryDate: new Date(new Date()?.getDate() + 1.5),
    status: "active",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "medium",
    imageUrl: img3,
  },
  {
    id: "4",
    title: "Data Sprint 70 - Airline passenger satisfcation",
    expiryDate: new Date(new Date()?.getDate() + 1),
    status: "active",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "hard",
    imageUrl: img4,
  },
  {
    id: "5",
    title: "Engineering Gradutes Employment outcomes",
    expiryDate: new Date(new Date()?.getDate() - 1),
    status: "past",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "medium",
    imageUrl: img5,
  },
  {
    id: "6",
    title: "Travel insurance claim prediction",
    expiryDate: new Date(new Date()?.getDate() - 1.5),
    status: "past",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "easy",
    imageUrl: img6,
  },
];
