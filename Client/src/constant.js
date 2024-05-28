import info1 from "./assets/images/info1.webp";
import info2 from "./assets/images/info2.webp";
import bannerBg from "./assets/images/banner-bg.webp";
import banner2 from "./assets/images/banner-2.webp";
import banner3 from "./assets/images/banner3.webp";

// export const base_url = "http://192.168.1.188:3001";
export const base_url = "";

export const menu_List = [
  {
    title: "home",
    target: "/",
  },
  {
    title: "ask now",
    target: "/ask",
  },
  {
    title: "about",
    target: "/about",
  },
  {
    title: "contact us",
    target: "/contact",
  },
];

export const footer_menu_List = [
  {
    title: "ask now",
    target: "/ask",
  },
  {
    title: "about",
    target: "/about",
  },
  {
    title: "contact us",
    target: "/contact",
  },
];

export const homeBannerslider = [
  {
    title: "What would Jesus do?",
    href: bannerBg,
  },
  {
    title: "What would Jesus think?",
    href: banner2,
  },
  {
    title: "What would Jesus say?",
    href: banner3,
  },
];

export const homeInformation = [
  {
    title: "Struggling with a sin?",
    peragraph:
      "This is a safe place where you can ask questions. Please do not let shame or fear keep you from asking Jesus. His AI responses are created from his speech and character in the Bible. He is here to help you.",
    askQue: "Have any question?",
    btnText: "",
    imgInfo: info1,
  },
  {
    title: "What does it mean to be a Christian?",
    peragraph:
      "You have heard about the Bible, you’ve heard about Jesus, and you want to know what it means to be a Christian. . His AI responses are crafted from his speech and character in the Bible. He is here to support you.",
    askQue: "Have any question?",
    btnText: "",
    imgInfo: info2,
  },
];

export const askingData = [
  {
    title: "What would Jesus do?",
    subTitle:
      "Are you wrestling with a tough decision?  Do you have a difficult choice to make? Do you want to know what Jesus would do? ",
    btnText: "Ask Now",
  },
  {
    title: "Is the Bible True?",
    subTitle:
      "How do I know if the Bible is true? How do I know it’s God’s word? How can I trust the Bible? ",
    btnText: "Ask Now",
  },
  {
    title: "Questions For God",
    subTitle:
      "If God is a God of love, why do bad things happen to good people? Why is there evil in the world? How do I know you are real? ",
    btnText: "Ask Now",
  },
  {
    title: "",
    subTitle: "",
    btnText: "",
  },
];

export const sidebarArray = [
  {
    id: 1,
    label: "Dashboard",
  },
  {
    id: 2,
    label: "Chat History",
  },
];

export const loginAdmin = [
  {
    id: 1,
    username: "admin",
    email: "admin@gmail.com",
    password: "admin",
  },
  {
    id: 2,
    username: "admin123",
    email: "admin123@gmail.com",
    password: "admin123",
  },
];

export const faqQuestion = [
  {
    title: "Am I a bad person if I struggle with sin?",
  },
  {
    title: "Why are Christians hypocritical?",
  },
  {
    title: "How do I get to Heaven?",
  },
];
