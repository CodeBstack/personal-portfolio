// import { Tooltip } from '@mui/material';
import React from 'react';
import { useState } from 'react';

interface Props {
  color?: string;
}

const InstagramIcon = ({ color }: Props) => {
  const [color1, setColor] = useState('#A8B2D1');

  return (
    <>
      {/* <Tooltip
        title="Instagram"
        placement="right-start"
      > */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setColor('#64FFDA')}
          onMouseLeave={() => setColor('#A8B2D1')}
        >
          <path
            d="M20 8.75C20 8.41848 20.1317 8.10054 20.3661 7.86612C20.6005 7.6317 20.9185 7.5 21.25 7.5C21.5815 7.5 21.8995 7.6317 22.1339 7.86612C22.3683 8.10054 22.5 8.41848 22.5 8.75C22.5 9.08152 22.3683 9.39946 22.1339 9.63388C21.8995 9.8683 21.5815 10 21.25 10C20.9185 10 20.6005 9.8683 20.3661 9.63388C20.1317 9.39946 20 9.08152 20 8.75Z"
            fill={color || color1}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 9.0625C13.4253 9.0625 11.9151 9.68806 10.8016 10.8016C9.68806 11.9151 9.0625 13.4253 9.0625 15C9.0625 16.5747 9.68806 18.0849 10.8016 19.1984C11.9151 20.3119 13.4253 20.9375 15 20.9375C16.5747 20.9375 18.0849 20.3119 19.1984 19.1984C20.3119 18.0849 20.9375 16.5747 20.9375 15C20.9375 13.4253 20.3119 11.9151 19.1984 10.8016C18.0849 9.68806 16.5747 9.0625 15 9.0625ZM10.9375 15C10.9375 13.9226 11.3655 12.8892 12.1274 12.1274C12.8892 11.3655 13.9226 10.9375 15 10.9375C16.0774 10.9375 17.1108 11.3655 17.8726 12.1274C18.6345 12.8892 19.0625 13.9226 19.0625 15C19.0625 16.0774 18.6345 17.1108 17.8726 17.8726C17.1108 18.6345 16.0774 19.0625 15 19.0625C13.9226 19.0625 12.8892 18.6345 12.1274 17.8726C11.3655 17.1108 10.9375 16.0774 10.9375 15Z"
            fill={color || color1}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5725 3.54125C17.2042 3.05699 12.7958 3.05699 8.42751 3.54125C5.91251 3.8225 3.88126 5.80375 3.58626 8.33125C3.06801 12.762 3.06801 17.238 3.58626 21.6687C3.88126 24.1962 5.91126 26.1775 8.42751 26.4587C12.7958 26.9425 17.2042 26.9425 21.5725 26.4587C24.0875 26.1775 26.1188 24.1962 26.4138 21.6687C26.9321 17.238 26.9321 12.762 26.4138 8.33125C26.1188 5.80375 24.0888 3.8225 21.5725 3.54125ZM8.63501 5.40375C12.8654 4.93484 17.1346 4.93484 21.365 5.40375C23.0275 5.59125 24.3588 6.9025 24.5525 8.55C25.0537 12.8354 25.0537 17.1646 24.5525 21.45C24.4523 22.2563 24.0832 23.0053 23.5048 23.5759C22.9264 24.1466 22.1726 24.5056 21.365 24.595C17.1346 25.0639 12.8654 25.0639 8.63501 24.595C7.82743 24.5056 7.07357 24.1466 6.4952 23.5759C5.91683 23.0053 5.54772 22.2563 5.44751 21.45C4.94632 17.1646 4.94632 12.8354 5.44751 8.55C5.54772 7.74369 5.91683 6.99472 6.4952 6.42406C7.07357 5.8534 7.82743 5.49313 8.63501 5.40375Z"
            fill={color || color1}
          />
        </svg>
      {/* </Tooltip> */}
    </>
  );
};

export default InstagramIcon;
