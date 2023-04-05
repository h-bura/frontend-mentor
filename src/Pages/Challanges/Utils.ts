import { CHALLANGE_DATA } from "./ChallangeData";
export type Difficulty = "easy" | "hard" | "normal";
export type Filters = {
  type: string[];
  difficulty: string[];
  languages: string[];
};

const getSortedData = (difficulty: Difficulty, filters: Filters) => {
  if (difficulty === "easy") {
    CHALLANGE_DATA.sort((a, b) => (a.level > b.level ? 1 : -1));
    return CHALLANGE_DATA;
  }
  if (difficulty === "hard") {
    return CHALLANGE_DATA.sort((a, b) => (a.level < b.level ? 1 : -1));
  }
  if (filters.type) {
    return CHALLANGE_DATA.filter((a) => a.price === "Premium" || "Free");
  }

  return CHALLANGE_DATA;
};
export default getSortedData;
