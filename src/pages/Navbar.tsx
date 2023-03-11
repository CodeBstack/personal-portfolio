import { ReactComponent as Logo } from '../assets/logo.svg';
import DarkModeIcon from '../components/Vectors/DarkModeIcon';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '../components/Vectors/MenuIcon';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
  selectedPage,
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
      <span className="text-secondary">
        {pos}{' '}
      </span>
      {page}
    </AnchorLink>
  );
};

interface NavBarProps {
  selectedPage: string;
  setSelectedPage: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const NavBar: React.FunctionComponent<
  NavBarProps
> = ({ selectedPage, setSelectedPage }) => {
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
    <nav
      className={`${
        navBg &&
        'bg-[rgba(131, 9, 0, 0.05)] backDrop'
      } z-[100] px-[5%] w-full  sticky md:fixed top-0 transition-all duration-300 ease-linear py-4 md:py-6 flex items-center justify-between font-SF1 text-nav-text text-[14px]`}
    >
      <AnchorLink
        href={`#home`}
        onClick={() => setSelectedPage('home')}
      >
        <Logo />
      </AnchorLink>
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
              // fontSize="large"
              sx={{
                color: '#64FFDA',
                width: '30px',
                height: '30px',
              }}
            />
          ) : (
            <MenuIcon />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;

const NavLinks = [
  {
    pos: '02.',
    text: 'About',
    link: 'about',
  },
  {
    pos: '03.',
    text: 'Projects',
    link: 'projects',
  },
  {
    pos: '04.',
    text: 'Resume',
    link: 'resume',
  },
  {
    pos: '05.',
    text: 'Contact',
    link: 'contact',
  },
];
