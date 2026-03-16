import DUIDefenseContent from "./DUIDefenseContent";
import DUIDefenseContentPartFour from "./DUIDefenseContentPartFour";
import DUIDefenseContentPartThree from "./DUIDefenseContentPartThree";
import DUIDefenseContentPartTwo from "./DUIDefenseContentPartTwo";

export default function LeftSide() {
  return (
    <div className="max-w-[1420px]">
      <DUIDefenseContent />
      <DUIDefenseContentPartTwo />
      <DUIDefenseContentPartThree />
      <DUIDefenseContentPartFour />
    </div>
  );
}
