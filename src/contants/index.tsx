import Bird from "../assets/images/Projects/Bird.png";
import Decoration from "../assets/images/Projects/Decoration.png";
import Mirrors from "../assets/images/Projects/Mirrors.png";
import Perfume from "../assets/images/Projects/Perfume.png";
import Shoes from "../assets/images/Projects/Shoes.png";
import Umbrella from "../assets/images/Projects/Umbrella.png";
import Coin from "../assets/images/Manifesto/Coin.png";
import Design3D from "../assets/images/Manifesto/Design3D.png";
import Coins from "../assets/images/Manifesto/Coins.png";

import { ProjectElements } from "../type/ProjectType";
import { IntergateSections } from "../type/IntergateType";

export const projectELements: ProjectElements = [
	{
		key: 1,
		image: Umbrella,
		title: 'Umbrella',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
	{
		key: 2,
		image: Mirrors,
		title: 'Mirrors',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
	{
		key: 3,
		image: Bird,
		title: 'Bird',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
	{
		key: 4,
		image: Shoes,
		title: 'Shoes',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
	{
		key: 5,
		image: Decoration,
		title: 'Decoration',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
	{
		key: 6,
		image: Perfume,
		title: 'Perfume',
		subTitle: 'Lorem ipsum — Dolor sit amet',
		description: 'Development / Video Production / Branding',
	},
]

export const interGateElements:IntergateSections = [
  {
    key:"INTERGATE",
    number: "01",
    image: Coin,
    title: "Coin",
    description:
      "Lorem ipsum dolor sit amet ales consectetur. Sed lectus feugiat nulla ultricies. Urna enim mi laoreet tum imperdiet hac. Amet fermen sem eu tellus quam tristique in.",
  },
  {
    key:"CREATIVE",
    number: "02",
    image: Design3D,
    title: "Design3D",
    description:
      "Lorem ipsum dolor sit amet ales consectetur. Sed lectus feugiat nulla ultricies. Urna enim mi laoreet tum imperdiet hac. Amet fermen sem eu tellus quam tristique in.",
  },
  {
    key:"INTERGATE",
    number: "03",
    image: Coins,
    title: "Coins",
    description:
      "Lorem ipsum dolor sit amet ales consectetur. Sed lectus feugiat nulla ultricies. Urna enim mi laoreet tum imperdiet hac. Amet fermen sem eu tellus quam tristique in.",
  },
];

export const listLiELements = [
	{
		href: '/home',
		title: 'HOME',
	},
	{
		href: '/project',
		title: 'PROJECT',
	},
	{
		href: '/manifesto',
		title: 'MANIFESTO',
	},
	{
		href: '/contact',
		title: 'CONTACT',
	},
]