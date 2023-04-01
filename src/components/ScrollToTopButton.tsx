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
        className={`transition-all duration-300 fixed bottom-20 right-5 z-[900] h-[32px] w-[32px] md:h-[50px] md:w-[50px] items-center justify-center rounded-[10px] bg-text-200 md:bottom-5 md:right-7 ${
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
            sx={{ color: '#0A192F' }}
          />
        </IconButton>
      </div>
    </>
  );
}

export default ScrollToTopButton;
