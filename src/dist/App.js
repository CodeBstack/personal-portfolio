"use strict";
exports.__esModule = true;
var react_1 = require("react");
var InstagramIcon_1 = require("./components/Vectors/InstagramIcon");
var TwitterIcon_1 = require("./components/Vectors/TwitterIcon");
var LinkedInIcon_1 = require("./components/Vectors/LinkedInIcon");
var About_1 = require("./pages/About");
var HomePage_1 = require("./pages/HomePage");
var Navbar_1 = require("./pages/Navbar");
var Projects_1 = require("./pages/Projects");
var ResumePage_1 = require("./pages/ResumePage");
var GithubIcon_1 = require("./components/Vectors/GithubIcon");
var ContactPage_1 = require("./pages/ContactPage");
var framer_motion_1 = require("framer-motion");
function App() {
    var _a = react_1.useState('home'), selectedPage = _a[0], setSelectedPage = _a[1];
    var _b = react_1.useState(false), isNavOpened = _b[0], setIsNavOpened = _b[1];
    return (react_1["default"].createElement("div", { className: " relative text-text-primary " },
        react_1["default"].createElement("div", { className: "overlay mobile_nav_backdrop z-[99] fixed top-0 left-0 h-screen w-full " + (isNavOpened ? 'block ' : 'hidden') }),
        react_1["default"].createElement(Navbar_1["default"], { isNavOpened: isNavOpened, setIsNavOpened: setIsNavOpened, selectedPage: selectedPage, setSelectedPage: setSelectedPage }),
        react_1["default"].createElement("div", { className: "mx-auto max-w-[1440px] px-4 sm:px-6 md:pb-[5%] md:px-[10%]" },
            react_1["default"].createElement(framer_motion_1.motion.div, { onViewportEnter: function () {
                    return setSelectedPage('home');
                } },
                react_1["default"].createElement(HomePage_1["default"], null)),
            react_1["default"].createElement(framer_motion_1.motion.div, { onViewportEnter: function () {
                    return setSelectedPage('about');
                } },
                react_1["default"].createElement(About_1["default"], null)),
            react_1["default"].createElement(framer_motion_1.motion.div, { onViewportEnter: function () {
                    return setSelectedPage('projects');
                } },
                react_1["default"].createElement(Projects_1["default"], null)),
            react_1["default"].createElement(framer_motion_1.motion.div, { onViewportEnter: function () {
                    return setSelectedPage('resume');
                } },
                react_1["default"].createElement(ResumePage_1["default"], null)),
            react_1["default"].createElement(framer_motion_1.motion.div, { onViewportEnter: function () {
                    return setSelectedPage('contact');
                } },
                react_1["default"].createElement(ContactPage_1["default"], null))),
        react_1["default"].createElement("div", { className: "hidden md:flex max-w-fit items-center fixed top-[70%] -right-28  font-SF1 text-sm md:text-base text-[#A8B2D1] hover:text-secondary rotate-90" },
            react_1["default"].createElement("a", { "aria-label": "Email Me", title: "Email Me", href: "mailto: ssamuelolumide@gmail.com" }, "ssamuelolumide@gmail.com"),
            react_1["default"].createElement("div", { className: "h-px w-24 ml-10 bg-[#a8b2d1]" })),
        react_1["default"].createElement("div", { className: "hidden md:flex flex-col max-w-[24px] gap-7 items-center fixed top-[53%] left-[5%] " },
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Github page", title: "Github page", href: "https://github.com/CodeBstack", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(GithubIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Instagram page", title: "Instagram page", href: "https://www.instagram.com/samuel__olumide/", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(InstagramIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Twitter page", title: "Twitter page", href: "https://twitter.com/SunmonuSam", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(TwitterIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide LinkedIn page", title: "LinkedIn page", href: "https://www.linkedin.com/in/samuel-sunmonu/", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(LinkedInIcon_1["default"], null)),
            react_1["default"].createElement("div", { className: "h-px w-24 mt-16 rotate-90 bg-[#a8b2d1]" })),
        react_1["default"].createElement("div", { className: "flex md:hidden footer_socials " },
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Github page", title: "Github page", href: "https://github.com/CodeBstack", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(GithubIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Instagram page", title: "Instagram page", href: "https://www.instagram.com/samuel__olumide/", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(InstagramIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide Twitter page", title: "Twitter page", href: "https://twitter.com/SunmonuSam", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(TwitterIcon_1["default"], null)),
            react_1["default"].createElement("a", { "aria-label": "Go to Samuel Olumide LinkedIn page", title: "LinkedIn page", href: "https://www.linkedin.com/in/samuel-sunmonu/", target: "_blank", rel: "noopener noreferrer" },
                react_1["default"].createElement(LinkedInIcon_1["default"], null)))));
}
exports["default"] = App;
