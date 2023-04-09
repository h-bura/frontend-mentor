import image7 from "../../image/image7.jpg";
import image8 from "../../image/image8.jpg";
import image9 from "../../image/image9.jpg";
import image10 from "../../image/image10.jpg";
import image11 from "../../image/image11.jpg";
import image12 from "../../image/image12.jpg";
import { CHALLANGES_DATA } from "../../components/LatestChallanges/ChallangesData";
export const ALL_CHALLANGES_DATA = [
  ...CHALLANGES_DATA,
  {
    image: image7,
    price: "FREE",
    title: " Intro section with dropdown navigation",
    techs: ["HTML", "CSS", "JS"],
    level: 2,
    description:
      "This challenge will test your ability to create dropdown navigation menus, a common pattern on larger sites. It will also provide some nice basic layout challenges.",
  },
  {
    image: image8,
    price: "PREMIUM",
    title: "  Connect Four game",
    techs: ["HTML", "CSS", "JS"],
    level: 4,
    description:
      " Your JS knowledge will be challenged in this fun project, where you'll build a two-player game. You'll write the logic for the game and how to test for win conditions.",
  },
  {
    image: image9,
    price: "FREE",
    title: "  Notifications page",
    techs: ["HTML", "CSS", "JS"],
    level: 4,
    description:
      " This project will be a brilliant test of your HTML, CSS, and basic JavaScript skills. You'll use JS to toggle the visual state of the notifications.",
  },
  {
    image: image10,
    price: "PREMIUM",
    title: " Password generator app",
    techs: ["HTML", "CSS", "JS"],
    level: 3,
    description:
      " This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.",
  },
  {
    image: image11,
    price: "FREE",
    title: " Interactive card details form",
    techs: ["HTML", "CSS", "JS"],
    level: 2,
    description:
      "  This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.",
  },
  {
    image: image12,
    price: "FREE",
    title: " Expenses chart component",
    techs: ["HTML", "CSS", "JS"],
    level: 2,
    description:
      "  In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
  },
];
