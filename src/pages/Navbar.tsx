import { ReactComponent as Logo } from '../assets/logo.svg';
// import myPdf from '../assets/sunmonu_resume.pdf';
import DarkModeIcon from '../components/Vectors/DarkModeIcon';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '../components/Vectors/MenuIcon';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CloseIcon from '../components/Vectors/CloseIcon';

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
  isNavOpened: boolean;
  setIsNavOpened: React.Dispatch<
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
  selectedPage,
  setSelectedPage,
}) => {
  const [isDarkMode, setIsDarkMode] =
    useState<boolean>(true);
  const [navBg, setNavBg] =
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
        !isNavOpened &&
        'bg-[rgba(10, 25, 47, 0.7)] desktop_nav_backdrop'
      } z-[100] px-[5%] w-full fixed top-0 transition-all duration-200 ease-linear py-4 md:py-6 flex items-center justify-between font-SF1 text-nav-text text-[13px] md:text-sm`}
    >
      <AnchorLink
        href={`#home`}
        onClick={() => {
          setSelectedPage('home');
          setIsNavOpened(false);
        }}
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
            <LightModeOutlinedIcon
              sx={{ color: '#CCD6F6' }}
            />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>
      </div>

      <div className="block md:hidden">
        <IconButton
          onClick={() => setIsNavOpened(true)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* MOBILE NAV SIDEBAR */}
      {isNavOpened && (
        <div
          className={`flex md:hidden px-[7%] oerflow-y-auto transition-all duration-500 ease-in-out flex-col items-center justify-enter z-[999] w-[60%] fixed top-0 right-0 h-screen bg-[#112240]`}
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

          <div className="w-full flex mt-[124px] mb-16 gap-8 flex-col text-center">
            {NavLinks.map((navlink, i) => (
              <AnchorLink
                key={i}
                className='hover:bg-primary py-2 rounded-[8px]'
                href={`#${navlink.text.toLocaleLowerCase()}`}
                onClick={() => {
                  setSelectedPage(
                    navlink.text.toLocaleLowerCase()
                  );
                  setIsNavOpened(false);
                }}
              >
                <p className="text-secondary mb-[5px]">
                  {navlink.pos}
                </p>
                <p>{navlink.text}</p>
              </AnchorLink>
            ))}
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1JiCcfzAtOYUUes-SjT-jRfRkNyF4FBnd/view?usp=sharing"
            className="w-full max-w-[152px] py-[18px] text-center border-2 border-secondary bg-transparent font-SF2 text-secondary rounded-[5px] text-sm self-center hover:bg-secondary hover:text-primary transition duration-500"
          >
            Resume
          </a>
        </div>
      )}
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
