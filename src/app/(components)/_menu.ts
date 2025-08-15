import {
  Popcorn,
  Swords,
  Ghost,
  Rocket,
} from "lucide-react";

export type MenuItem = {
  id: string;
  label: string;
  icon: React.FC;
  url?: string;
  childs?: MenuSubItem[];
};

export type MenuSubItem = {
  id: string;
  label: string;
  icon?: React.FC;
  url?: string;
};

const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Ghost,
    url: "/",
  },
  {
    id: "about",
    label: "About",
    icon: Popcorn,
    url: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Swords,
    url: "/projects",
  },
  {
    id: "skills",
    label: "Skills",
    icon: Rocket,
    url: "/skills",
  },
];

export default menuItems;
