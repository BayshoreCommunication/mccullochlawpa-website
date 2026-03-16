import CriminalDefenseContent from "./CriminalDefenseContent";
import CriminalDefenseContentPartFour from "./CriminalDefenseContentPartFour";
import CriminalDefenseContentPartThree from "./CriminalDefenseContentPartThree";
import CriminalDefenseContentPartTwo from "./CriminalDefenseContentPartTwo";

export default function LeftSide() {
  return (
    <div className="max-w-[1420px]">
      <CriminalDefenseContent />
      <CriminalDefenseContentPartTwo />
      <CriminalDefenseContentPartThree />
      <CriminalDefenseContentPartFour />
    </div>
  );
}
