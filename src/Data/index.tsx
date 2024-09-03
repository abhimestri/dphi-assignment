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
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
  {
    id: "2",
    title: "Data Sprint 72 - Butterfly identification",
    expiryDate: new Date(new Date()?.getDate() + 1),
    status: "upcoming",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "easy",
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
  {
    id: "3",
    title: "Data Sprint 72 - weather recognition",
    expiryDate: new Date(new Date()?.getDate() + 1.5),
    status: "active",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "medium",
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
  {
    id: "4",
    title: "Data Sprint 70 - Airline passenger satisfcation",
    expiryDate: new Date(new Date()?.getDate() + 1),
    status: "active",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "hard",
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
  {
    id: "5",
    title: "Engineering Gradutes Employment outcomes",
    expiryDate: new Date(new Date()?.getDate() - 1),
    status: "past",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "medium",
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
  {
    id: "6",
    title: "Travel insurance claim prediction",
    expiryDate: new Date(new Date()?.getDate() - 1.5),
    status: "past",
    description:
      'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.',
    level: "easy",
    imageUrl: "../assets/cardimage/Group_1000002466.png",
  },
];
