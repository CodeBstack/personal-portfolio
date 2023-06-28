import { ReactComponent as Logo } from '../assets/logo.svg';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MenuIcon from './Vectors/MenuIcon';
import { IconButton } from '@mui/material';
import React, {
  useState,
  useEffect,
} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CloseIcon from './Vectors/CloseIcon';
import LogoIconDark from './Vectors/LogoIconDark';

type LinkProps = {
  page: string;
  pos: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<
    React.SetStateAction<string>
  >;
};
const Link = ({
  page,
  pos,
  setSelectedPage,
}: LinkProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className="flex gap-2 items-center hover:text-secondary"
      href={`#${lowerCasePage}`}
      onClick={() =>
        setSelectedPage(lowerCasePage)
      }
    >
      <span className="text-primary-dark dark:text-secondary">
        {pos}{' '}
      </span>
      {page}
    </AnchorLink>
  );
};

interface NavBarProps {
  isNavOpened: boolean;
  setIsNavOpened: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  selectedPage: string;
  setSelectedPage: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const NavBar: React.FunctionComponent<
  NavBarProps
> = ({
  isNavOpened,
  setIsNavOpened,
  isDarkMode,
  setIsDarkMode,
  selectedPage,
  setSelectedPage,
}) => {
  const [navBg, setNavBg] =
    useState<boolean>(false);

  // const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300
        ? setNavBg(true)
        : setNavBg(false);
    };

    window.addEventListener(
      'scroll',
      handleScrollButtonVisibility
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScrollButtonVisibility
      );
    };
  }, []);
  if (
    document.documentElement.className === 'dark'
  ) {
    console.log(true);
  }
  return (
      <nav
        className={`${
          navBg && !isNavOpened
            ? `fixed top-0  ${
                document.documentElement
                  .className === 'dark'
                  ? 'desktop_nav_backdrop_dark'
                  : 'desktop_nav_backdrop_light'
              } `
            : '-top-[100vh]'
        } z-[100]  p-4 sm:px-6 md:px:[5%] lg:px-[55px] w-full md:py-6 flex items-center justify-between font-SF1 text-light-text dark:text-nav-text text-[13px]  transition-all duration-200 md:text-sm`}
      >
        {isDarkMode ? <Logo /> : <LogoIconDark />}
        <div className="hidden gap-10 items-center md:flex">
          {NavLinks.map((link, i) => (
            <Link
              key={i}
              page={link.text}
              pos={`0${i + 1}.`}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
          {/* <IconButton
            onClick={() =>
              setIsDarkMode(!isDarkMode)
            }
          >
            {isDarkMode ? (
              <NightsStayIcon
                fontSize="medium"
                sx={{ color: '#CCD6F6' }}
              />
            ) : (
              <NightsStayOutlinedIcon
                fontSize="medium"
                sx={{ color: '#CCD6F6' }}
              />
            )}
          </IconButton> */}
        </div>

        <div className="block md:hidden">
          <IconButton
            onClick={() => setIsNavOpened(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* MOBILE NAV SIDEBAR */}
        <aside
          className={`flex md:hidden px-[7%] transition-all duration-500 flex-col items-center z-[999] fixed top-0 h-screen bg-[#112240] ${
            isNavOpened
              ? 'right-0 w-[70%]'
              : '-right-[100vw]'
          } `}
        >
          <IconButton
            sx={{
              position: 'absolute',
              right: '5%',
              top: '20px',
            }}
            onClick={() => setIsNavOpened(false)}
          >
            <CloseIcon />
          </IconButton>

          <div className="w-full flex mt-[104px] mb-12 gap-6 flex-col text-center">
            {/* <IconButton
              onClick={() =>
                setIsDarkMode(!isDarkMode)
              }
            >
              {isDarkMode ? (
                <NightsStayIcon
                  fontSize="medium"
                  sx={{ color: '#CCD6F6' }}
                />
              ) : (
                <NightsStayOutlinedIcon
                  fontSize="medium"
                  sx={{ color: '#CCD6F6' }}
                />
              )}
            </IconButton> */}

            {NavLinks.map((navlink, i) => (
              <AnchorLink
                key={i}
                className="hover:bg-primary py-2 rounded-[8px]"
                href={`#${navlink.text.toLocaleLowerCase()}`}
                onClick={() => {
                  setSelectedPage(
                    navlink.text.toLocaleLowerCase()
                  );
                  setIsNavOpened(false);
                }}
              >
                <p className="text-secondary mb-[4px]">
                  {navlink.pos}
                </p>
                <p>{navlink.text}</p>
              </AnchorLink>
            ))}
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1nWKBmgszb1N4Cb0radzbVpzqrZqgM7XJ/view?usp=share_link"
            className="w-full max-w-[152px] py-[18px] text-center border-2 border-secondary bg-transparent font-SF2 text-secondary rounded-[5px] text-sm self-center hover:bg-secondary hover:text-primary transition duration-500"
          >
            Resume
          </a>
        </aside>
      </nav>
  );
};

export default NavBar;

const NavLinks = [
  {
    pos: '01.',
    text: 'About',
  },
  {
    pos: '02.',
    text: 'Projects',
  },
  {
    pos: '03.',
    text: 'Resume',
  },
  {
    pos: '04.',
    text: 'Contact',
  },
];
