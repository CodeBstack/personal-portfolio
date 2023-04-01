import React from 'react';
import { useState } from 'react';
interface Props {
  color?: string;
}

const GithubIcon = ({ color }: Props) => {
  // const [color1, setColor] = useState('#A8B2D1');
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // onMouseEnter={() => setColor('#64FFDA')}
        // onMouseLeave={() => setColor('#A8B2D1')}
      >
        <path
          d="M9.25 21.75C3.875 23.5 3.875 18.625 1.75 18M16.75 24.25V19.875C16.75 18.625 16.875 18.125 16.125 17.375C19.625 17 23 15.625 23 9.875C22.9985 8.3812 22.4157 6.94664 21.375 5.875C21.8631 4.57746 21.8181 3.13953 21.25 1.875C21.25 1.875 19.875 1.5 16.875 3.5C14.334 2.83823 11.666 2.83823 9.125 3.5C6.125 1.5 4.75 1.875 4.75 1.875C4.18185 3.13953 4.13692 4.57746 4.625 5.875C3.58432 6.94664 3.00152 8.3812 3 9.875C3 15.625 6.375 17 9.875 17.375C9.125 18.125 9.125 18.875 9.25 19.875V24.25"
          stroke={color || '#A8B2D1'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default GithubIcon;
