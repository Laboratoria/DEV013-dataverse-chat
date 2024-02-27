import { GroupIconButton } from "../components/GroupIconButton.js";
import { Cards } from "../components/Cards.js";
//import { navigateTo } from "../router.js";

export const Home = () => {
  const viewHome = document.createElement("section");

  //viewHome.append(Header(), OrderBySelect(), SearchByNameInput(), FilterByMenu(), Footer());
  viewHome.append(Cards(), GroupIconButton());
  return viewHome;
};
