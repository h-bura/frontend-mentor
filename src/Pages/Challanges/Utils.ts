import { NEW_CHALLANGES_DATA } from "./ChallangeData";
export type Difficulty = "easy" | "hard" | "normal";

const getSortedData = (difficulty: Difficulty) => {
  if (difficulty === "easy") {
    NEW_CHALLANGES_DATA.sort((a, b) => (a.level > b.level ? 1 : -1));
    return NEW_CHALLANGES_DATA;
  }
  if (difficulty === "hard") {
    return NEW_CHALLANGES_DATA.sort((a, b) => (a.level < b.level ? 1 : -1));
  }

  return NEW_CHALLANGES_DATA;
};
export default getSortedData;
