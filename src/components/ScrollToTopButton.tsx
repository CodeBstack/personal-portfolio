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
      {showButton && (
        <div
          className="hidden fixed bottom-5 right-5 z-[999] md:flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-text-200 md:right-7"
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
      )}
    </>
  );
}

export default ScrollToTopButton;
