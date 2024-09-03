import { useNavigate } from "react-router-dom";
import HeaderLogo from "../assets/cardimage/main_logo_with_darktext_dphi 1.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[10vh] w-fit px-14 py-3 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img src={HeaderLogo} alt="" className="ml-8" />
    </div>
  );
};

export default Navbar;
