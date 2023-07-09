import { ArrowUpwardOutlined } from '@mui/icons-material';
import {
  IconButton,
  Tooltip,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] =
    useState<boolean>(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300
        ? setShowButton(true)
        : setShowButton(false);
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

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className={`transition-all duration-300 fixed bottom20 right5 z-[100] h-10 w-10 md:h-[50px] md:w-[50px] items-center justify-center rounded-[10px] bg-light-text dark:bg-text-200 bottom-4 right-4 ${
          showButton ? 'flex' : 'hidden'
        }`}
        title="Scroll Button"
      >
        <IconButton
          onClick={handleScrollToTop}
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
        >
          <ArrowUpwardOutlined
            fontSize="medium"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#0A192F'
                  : '#020A13'
              }`,
            }}
          />
        </IconButton>
      </div>
    </>
  );
}

export default ScrollToTopButton;
