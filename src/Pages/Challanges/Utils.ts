import { NEW_CHALLANGES_DATA } from "./ChallangeData";
export type Difficulty = "easy" | "hard" | "normal";
export type Filters = {
  type: string[];
  difficulty: string[];
  languages: string[];
};

const getSortedData = (difficulty: Difficulty, filters: Filters) => {
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
