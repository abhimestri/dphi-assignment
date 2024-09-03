import { ReactComponent as ColonIcon } from "../../assets/icons/colon_icon.svg";

const Counter = () => {
  return (
    <div className="mt-3">
      <p className="text-center">Starts in</p>
      <div className="poppins flex gap-x-2 items-start">
        <div>
          <p className="font-semibold text-[18px] text-center">00</p>
          <p className="mt-2 text-[10px]">Days</p>
        </div>
        <ColonIcon className="mt-2" />
        <div>
          <p className="font-semibold text-[18px] text-center">00</p>
          <p className="mt-2 text-[10px]">Hours</p>
        </div>
        <ColonIcon className="mt-2" />
        <div>
          <p className="font-semibold text-[18px] text-center">00</p>
          <p className="mt-2 text-[10px]">Mins</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
