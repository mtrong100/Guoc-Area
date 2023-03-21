import certified from "./assets/images/certified.svg";
import coffeeBeans from "./assets/images/coffee-beans.svg";
import coffee from "./assets/images/coffee.svg";
import freeDelivery from "./assets/images/free-delivery.svg";

import aboutImg from "./assets/images/about-img.jpg";
import { BsCheck } from "react-icons/bs";

import chooseImg from "./assets/images/choose.jpg";
import coffeeBeans1 from "./assets/images/coffee-beans.svg";
import coffeeBeans2 from "./assets/images/coffee-beans-2.svg";
import coffeeBeans3 from "./assets/images/coffee-beans-3.svg";

import coffeeShop from "./assets/images/coffee-shop.svg";
import coffeeCup from "./assets/images/coffee-cup.svg";
import coffeeChef from "./assets/images/chef.svg";
import coffeeExp from "./assets/images/experience.svg";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

/* social-media */
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

import chef1 from "./assets/images/team-1.jpg";
import chef2 from "./assets/images/team-2.jpg";
import chef3 from "./assets/images/team-3.jpg";
import chef4 from "./assets/images/team-4.jpg";

import menu1 from "./assets/images/01.jpg";
import menu2 from "./assets/images/02.jpg";
import menu3 from "./assets/images/03.jpg";
import menu4 from "./assets/images/04.jpg";
import menu5 from "./assets/images/05.jpg";
import menu6 from "./assets/images/06.jpg";
import menu7 from "./assets/images/07.jpg";
import menu8 from "./assets/images/08.jpg";

import gallery1 from "./assets/images/gallery-1.jpg";
import gallery2 from "./assets/images/gallery-2.jpg";
import gallery3 from "./assets/images/gallery-3.jpg";
import gallery4 from "./assets/images/gallery-4.jpg";
import gallery5 from "./assets/images/gallery-5.jpg";

import offer1 from "./assets/images/offer-1.jpg";
import offer2 from "./assets/images/offer-2.jpg";

import testimonial1 from "./assets/images/testimonial-1.jpg";
import testimonial2 from "./assets/images/testimonial-2.jpg";
import testimonial3 from "./assets/images/testimonial-3.jpg";
import testimonial4 from "./assets/images/testimonial-4.jpg";

export const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Menu",
    path: "#menu",
  },
  {
    name: "Gallery",
    path: "#gallery",
  },
  {
    name: "Chefs",
    path: "#chefs",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
  },
];

export const banner = {
  smallTitle: "Welcome To Guoc Area",
  title: "Discover Amazing Coffee House & Get Energy",
  caption:
    "There are many variations of passage but the majority have suffered lateration in some form by injected humour or randomized words",
  button1: "Check Menu",
  button2: "Book Table",
};

export const about = {
  img: aboutImg,
  smallTitle: "About Us",
  title: "Fresh Quality And Organic Tasty Coffee House For You",
  caption:
    "There are many variations of passage but the majority have suffered lateration in some form by injected humour or randomized words which don't look even slightly believable",
  desc: [
    {
      id: 1,
      icon: <BsCheck />,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      icon: <BsCheck />,
      text: "Ad quidem provident dolor laboriosam error accusantium ducimus",
    },
    {
      id: 3,
      icon: <BsCheck />,
      text: "Velit adipisci culpa unde illo nemo architecto doloribus?",
    },
  ],
  btn1: "Que Experts",
};

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: "Free Shipping",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
  },
  {
    id: 2,
    img: certified,
    title: "Organic Certified",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
  },
  {
    id: 3,
    img: coffee,
    title: "High Quality",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
  },
  {
    id: 4,
    img: coffeeBeans,
    title: "Proper Roasting",
    description:
      "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: "Americano Coffee",
    description: "Milk with vanilla flavored",
    price: 50.25,
  },
  {
    id: 2,
    img: menu2,
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 3,
    img: menu3,
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 30.25,
  },
  {
    id: 4,
    img: menu4,
    title: "Special Raw Coffee",
    description: "Milk with vanilla flavored",
    price: 80.25,
  },
  {
    id: 5,
    img: menu5,
    title: "Fresh Black Coffee",
    description: "Milk with vanilla flavored",
    price: 90.25,
  },
  {
    id: 6,
    img: menu6,
    title: "Cappuccino Arabica",
    description: "Milk with vanilla flavored",
    price: 70.25,
  },
  {
    id: 7,
    img: menu7,
    title: "Milk Cream Coffee",
    description: "Milk with vanilla flavored",
    price: 120.25,
  },
  {
    id: 8,
    img: menu8,
    title: "Cold Coffee",
    description: "Milk with vanilla flavored",
    price: 40.25,
  },
];

export const why = {
  img: chooseImg,
  smallTitle: "Why Choose Us",
  title: "Coffero Most Out Of Your Favorite & Tasty Coffee House",
  caption:
    "There are many variations of passage but the majority have suffered lateration in some form by injected humour or randomized words which don't look even slightly believable",
  desc: [
    {
      id: 1,
      icon: coffeeBeans1,
      text: "You can’t use up creativity. The more you use, the more you have.",
    },
    {
      id: 2,
      icon: coffeeBeans2,
      text: "Winning isn’t everything, but wanting to win is.",
    },
    {
      id: 3,
      icon: coffeeBeans3,
      text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    },
  ],
};

export const stats = [
  {
    id: 1,
    img: coffeeShop,
    total: 1500,
    text: "Total Branches",
  },
  {
    id: 2,
    img: coffeeCup,
    total: 250,
    text: "Happy Custumers",
  },
  {
    id: 3,
    img: coffeeChef,
    total: 120,
    text: "Profesional Chef",
  },
  {
    id: 4,
    img: coffeeExp,
    total: 50,
    text: "Years Of Experience",
  },
];

export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: "Cappuccino Arabica",
  },
  {
    id: 2,
    img: gallery2,
    title: "Cappuccino Arabica",
  },
  {
    id: 3,
    img: gallery3,
    title: "Cappuccino Arabica",
  },
  {
    id: 4,
    img: gallery4,
    title: "Cappuccino Arabica",
  },
  {
    id: 5,
    img: gallery5,
    title: "Cappuccino Arabica",
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: "Cappuccino Arabica",
    discount: "Get 40% Offer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
  },
  {
    id: 2,
    img: offer2,
    title: "Cappuccino Arabica",
    discount: "Get 40% Offer",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
  },
];

export const chef = [
  {
    id: 1,
    img: chef1,
    name: "Malisa Fie",
    chef: "Senior Chef",
  },
  {
    id: 2,
    img: chef2,
    name: "Chad Smith",
    chef: "Senior Chef",
  },
  {
    id: 3,
    img: chef3,
    name: "Arron Rodri",
    chef: "Senior Chef",
  },
  {
    id: 4,
    img: chef4,
    name: "Tony Pinto",
    chef: "Senior Chef",
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: "Reid E Butt",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
  {
    id: 2,
    img: testimonial2,
    title: "Parker Jimenez",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
  {
    id: 3,
    img: testimonial3,
    title: "Sylvia H Green",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
  {
    id: 4,
    img: testimonial4,
    title: "Gordon D Novak",
    service: "Customer",
    description:
      "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
  },
];

export const footer = {
  info: [
    {
      id: 1,
      icon: <AiOutlinePhone />,
      text: "+9 666 999 6666",
    },
    {
      id: 2,
      icon: <GoLocation />,
      text: "69/96B Ligma, Liem Street",
    },
    {
      id: 3,
      icon: <AiOutlineMail />,
      text: "guocarea69@gmail.com",
    },
  ],
  details: [
    {
      id: 1,
      title: "Company",
      links: ["About", "Work", "Careers", "Pricing"],
    },
    {
      id: 2,
      title: "Services",
      links: ["About Me", "Teams", "Profile", "FAQ"],
    },
    {
      id: 3,
      title: "Contact",
      links: ["Privacy", "Disclaimer", "Terms", "Company"],
    },
  ],
};
