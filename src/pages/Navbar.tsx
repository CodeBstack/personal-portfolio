import { ReactComponent as Logo } from '../assets/logo.svg';
import DarkModeIcon from '../components/Vectors/DarkModeIcon';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';

interface NavBarProps {}

const NavBar: React.FunctionComponent<
  NavBarProps
> = () => {
  const [isDarkMode, setIsDarkMode] =
    useState<boolean>(true);
  const [navBg, setNavBg] =
    useState<boolean>(false);
  const [isNavOpened, setIsNavOpened] =
    useState<boolean>(false);

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

  return (
    <div
      className={`${
        navBg &&
        'bg-[rgba(131, 9, 0, 0.05)] backDrop'
      } z-[100] px-[5%]  sticky top-0 transition-all duration-300 ease-linear py-4 md:py-9 flex items-center justify-between font-SF1 text-nav-text text-[14px]`}
    >
      <Logo />
      <div className="hidden gap-10 items-center md:flex">
        {NavLinks.map((link, i) => (
          <a
            key={i}
            href={link.link}
            className="flex gap-2 items-center hover:text-secondary"
          >
            <span className="text-secondary">
              {link.pos}
            </span>
            {link.text}
          </a>
        ))}
        <IconButton
          onClick={() =>
            setIsDarkMode(!isDarkMode)
          }
        >
          {isDarkMode ? (
            <DarkModeIcon />
          ) : (
            <LightModeOutlinedIcon
              // fontSize="medium"
              sx={{ color: '#CCD6F6' }}
            />
          )}
        </IconButton>
      </div>

      <div className="block md:hidden">
        <IconButton
          onClick={() =>
            setIsNavOpened(!isNavOpened)
          }
        >
          {isNavOpened ? (
            <CloseIcon
              fontSize="large"
              sx={{ color: '#CCD6F6' }}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              sx={{ color: '#CCD6F6' }}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;

const NavLinks = [
  {
    pos: '01.',
    text: 'About',
    link: '#about',
  },
  {
    pos: '02.',
    text: 'Projects',
    link: '#projects',
  },
  {
    pos: '03.',
    text: 'Resume',
    link: '#resume',
  },
  {
    pos: '04.',
    text: 'Contact',
    link: '#contact',
  },
];
