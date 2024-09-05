export interface ChipProps {
  status: string | any;
  message: string | any;
}

const Chip = ({ status, message }: ChipProps) => {
  const getBackgroundColor = () => {
    switch (status) {
      case "success":
        return "bg-[#44924C25]";
      case "danger":
        return "bg-[#FF3C0017]";
      case "default":
      default:
        return "bg-[#F2C94C25]";
    }
  };

  return (
    <div className={`px-[10px] rounded-[5px] py-[4px] ${getBackgroundColor()}`}>
      <p
        className={`text-[12px] text-[#666666] font-semibold capitalize ${
          status === "success" && "!text-green"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default Chip;
