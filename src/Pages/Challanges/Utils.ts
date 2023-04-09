import { ALL_CHALLANGES_DATA } from "./AllChallangeData";
import { DIFFICULTY_TYPES } from "./FilterSection/DataSection";
export type Difficulty = "easy" | "hard" | "normal";
export type Filters = {
  type: string[];
  difficulty: string[];
  languages: string[];
};
const CLONED_ARRAY = [...ALL_CHALLANGES_DATA];

const getSortedData = (difficulty: Difficulty, filters: Filters) => {
  const filterByArg = (item: {
    image: string;
    price: string;
    title: string;
    techs: string[];
    level: number;
    description: string;
  }) => {
    return (
      (filters.type.length !== 0 ? filters.type.includes(item.price) : true) &&
      (filters.difficulty.length !== 0
        ? filters.difficulty.includes(DIFFICULTY_TYPES[item.level - 1])
        : true) &&
      (filters.languages.length !== 0
        ? filters.languages.some((r) => item.techs.indexOf(r) >= 0)
        : true)
    );
  };
  if (difficulty === "easy") {
    return CLONED_ARRAY.sort((a, b) => (a.level > b.level ? 1 : -1)).filter(
      filterByArg
    );
  }
  if (difficulty === "hard") {
    return CLONED_ARRAY.sort((a, b) => (a.level < b.level ? 1 : -1)).filter(
      filterByArg
    );
  }
  if (difficulty === "normal") {
    return ALL_CHALLANGES_DATA.filter(filterByArg);
  }

  return ALL_CHALLANGES_DATA;
};
export default getSortedData;
