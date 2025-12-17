import user_image from "./pic-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import wordpress from "./wordpress.png";
import mysql from "./mysql.png";
import jira from "./jira.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./pic-square.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import requirement_icon from "./requirement-icon.png";
import database_icon from "./database-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import { data } from "autoprefixer";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  wordpress,
  mysql,
  jira,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  requirement_icon,
  database_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "eKKJS Markeplace",
    description: "Web eCommerce",
    summary:
      "eKKJS Marketplace is an eCommerce platform developed specifically for students and lecturers, featuring a multi-role system that supports buyers, sellers, and administrators. The platform is built using the Laravel framework with MySQL as the database. It enables users to buy and sell products within the academic community and includes a real-time chat feature that allows buyers to communicate directly with sellers. The chat functionality is implemented using Chatify, enhancing user interaction and transaction efficiency.",
    bgImage: "/ekkjs.png",
    tech: "Laravel, Bootstrap, MySQL",
  },
  {
    title: "Swatracker App",
    description: "Mobile Application",
    summary:
      "Swatracker (Schedule Waste Tracker) is a mobile application designed to track scheduled waste through QR code scanning. The app allows users to identify and trace waste efficiently by scanning QR codes and provides an email notification feature for reporting waste-related information. The mobile application is developed using B4X, while the backend is built with PHP. All system data is stored and managed using a MySQL database.",
    bgImage: "/swatracker.png",
    tech: "B4X, PHP, MySQL",
  },
  {
    title: "iEQA",
    description: "Web Development",
    summary:
      "iEQA (Ergonomic Questionnaire Assessment) is a web-based system designed to assist HSE consultants in conducting ergonomic questionnaire assessments more efficiently. The system contains multiple categories of assessment questions and provides an interactive dashboard that visualizes user data in graphical form, making it easier to analyze questionnaire results. The application is developed using the Laravel framework with MySQL as the database for data storage and management.",
    bgImage: "/ieqa.png",
    tech: "Laravel, Bootstrap, MySQL",
  },
  {
    title: "HSE-ON-TRACK",
    description: "Mobile Application",
    summary:
      "HSE-ON-TRACK is a mobile application designed to assist HR in managing employee activities efficiently. The app consists of three main modules: attendance, where employees can clock in and out; leave application; and vehicle booking. It is developed using React Native for the mobile interface, with a Laravel RESTful API backend and MySQL for data storage. Firebase Cloud Messaging is integrated to send notifications to employees who have not clocked in, ensuring timely attendance tracking.",
    bgImage: "/hseontrack.png",
    tech: "React Native, Laravel, MySQL, Firebase Cloud Messaging",
  },
  {
    title: "Video Interactive",
    description: "Interactive Video Platform",
    summary:
      "Muzium Negara Gallery Interactive Video is an interactive web application developed to enhance visitor engagement through multimedia content. Built using HTML, CSS, and JavaScript, the application allows museum visitors to interact with both the web interface and embedded videos, creating a more immersive and informative gallery experience.",
    bgImage: "/video-interactive.png",
    tech: "HTML, CSS, JavaScript",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web Application Development",
    description: "Custom web apps, feature enhancements, and maintenance.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile Application Development",
    description: "Cross-platform mobile apps with intuitive interfaces.",
    link: "",
  },
  {
    icon: assets.requirement_icon,
    title: "System Analysis & Requirements",
    description:
      "Gather and document business needs and system specifications.",
    link: "",
  },
  {
    icon: assets.database_icon,
    title: "Database & System Design",
    description:
      "Efficient database structures and scalable system interfaces.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "PHP, JavaScript/JQuery, HTML, CSS, C++, Java",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Technologies",
    description:
      "Laravel, React, React Native, Next.js, Bootstrap, Tailwind, WordPress, Flutter, B4X",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Bachelor of Information Technology (Hons.) Information Systems Engineering",
  },
];

export const toolsData = [
  assets.vscode,
  assets.git,
  assets.firebase,
  assets.mysql,
  assets.wordpress,
  assets.jira,
  assets.figma,
];
