// import { Tooltip } from '@mui/material';
import React from 'react';
import { useState } from 'react';

interface Props {
  color?: string;
}

const MailIcon = ({ color }: Props) => {
  // const [color1, setColor] = useState('#A8B2D1');

  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // onMouseEnter={() => setColor('#64FFDA')}
        // onMouseLeave={() => setColor('#A8B2D1')}
      >
        <path
          d="M18.3253 3.51152L28.3627 10.0358C28.7173 10.2663 28.8947 10.3816 29.0232 10.5354C29.1369 10.6715 29.2223 10.8289 29.2745 10.9984C29.3334 11.19 29.3334 11.4015 29.3334 11.8245V21.6001C29.3334 23.8403 29.3334 24.9604 28.8974 25.816C28.5139 26.5687 27.902 27.1806 27.1493 27.5641C26.2937 28.0001 25.1736 28.0001 22.9334 28.0001H9.06669C6.82648 28.0001 5.70637 28.0001 4.85073 27.5641C4.09808 27.1806 3.48615 26.5687 3.10266 25.816C2.66669 24.9604 2.66669 23.8403 2.66669 21.6001V11.8245C2.66669 11.4015 2.66669 11.19 2.72558 10.9984C2.77771 10.8289 2.86315 10.6715 2.97688 10.5354C3.10537 10.3816 3.2827 10.2663 3.63738 10.0358L13.6747 3.51152M18.3253 3.51152C17.4836 2.96444 17.0628 2.6909 16.6094 2.58447C16.2086 2.4904 15.7915 2.4904 15.3907 2.58447C14.9372 2.6909 14.5164 2.96444 13.6747 3.51152M18.3253 3.51152L26.5815 8.87807C27.4987 9.47421 27.9572 9.77228 28.1161 10.1503C28.2549 10.4806 28.2549 10.8529 28.1161 11.1832C27.9572 11.5612 27.4987 11.8593 26.5815 12.4554L18.3253 17.822C17.4837 18.3691 17.0628 18.6426 16.6094 18.749C16.2086 18.8431 15.7915 18.8431 15.3907 18.749C14.9372 18.6426 14.5164 18.3691 13.6747 17.822L5.4185 12.4554C4.50137 11.8593 4.04281 11.5612 3.88399 11.1832C3.74519 10.8529 3.74519 10.4806 3.88399 10.1503C4.04281 9.77228 4.50137 9.47421 5.4185 8.87807L13.6747 3.51152M28.6667 25.3334L19.8096 17.3334M12.1905 17.3334L3.33335 25.3334"
          stroke={color || ' #A8B2D1'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default MailIcon;

