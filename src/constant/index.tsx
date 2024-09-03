import { InfoCardProps } from "../HomePage/ParticipateInfoSection/InfoCard/InfoCard";
import { ReactComponent as CarbonNotebook } from "../assets/icons/carbon_notebook-reference.svg";
import { ReactComponent as PeopleVector } from "../assets/icons/Vector.svg";
import { ReactComponent as Robot } from "../assets/icons/Robot.svg";
import { ReactComponent as IdentificationCard } from "../assets/icons/IdentificationCard.svg";

export const participateInfoCardData: Array<InfoCardProps> = [
  {
    icon: <CarbonNotebook />,
    title: "Prove your skills",
    description:
      "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    icon: <PeopleVector />,
    title: "Learn from community",
    description:
      "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    icon: <Robot />,
    title: "Challenge yourself",
    description:
      "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    icon: <IdentificationCard />,
    title: "Earn recognition",
    description:
      "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];
