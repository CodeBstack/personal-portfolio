// import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { useState } from 'react';

interface Props {
  color?: string;
}

const LinkedInIcon = ({ color }: Props) => {
  const [color1, setColor] = useState('#A8B2D1');

  return (
    <>
      {/* <Tooltip
        title="LinkedIn"
        placement="right-start"
      > */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setColor('#64FFDA')}
          onMouseLeave={() => setColor('#A8B2D1')}
        >
          <path
            d="M6.37501 9.25H1.37501C1.20925 9.25 1.05028 9.31585 0.933072 9.43306C0.815862 9.55027 0.750014 9.70924 0.750014 9.875V24.875C0.750014 25.0408 0.815862 25.1997 0.933072 25.3169C1.05028 25.4342 1.20925 25.5 1.37501 25.5H6.37501C6.54077 25.5 6.69974 25.4342 6.81695 25.3169C6.93416 25.1997 7.00001 25.0408 7.00001 24.875V9.875C7.00001 9.70924 6.93416 9.55027 6.81695 9.43306C6.69974 9.31585 6.54077 9.25 6.37501 9.25ZM5.75001 24.25H2.00001V10.5H5.75001V24.25ZM19.5 9.25C18.1438 9.25 16.825 9.6975 15.75 10.5238V9.875C15.75 9.70924 15.6842 9.55027 15.567 9.43306C15.4497 9.31585 15.2908 9.25 15.125 9.25H10.125C9.95925 9.25 9.80028 9.31585 9.68307 9.43306C9.56586 9.55027 9.50001 9.70924 9.50001 9.875V24.875C9.50001 25.0408 9.56586 25.1997 9.68307 25.3169C9.80028 25.4342 9.95925 25.5 10.125 25.5H15.125C15.2908 25.5 15.4497 25.4342 15.567 25.3169C15.6842 25.1997 15.75 25.0408 15.75 24.875V18C15.75 17.5027 15.9476 17.0258 16.2992 16.6742C16.6508 16.3225 17.1277 16.125 17.625 16.125C18.1223 16.125 18.5992 16.3225 18.9508 16.6742C19.3025 17.0258 19.5 17.5027 19.5 18V24.875C19.5 25.0408 19.5659 25.1997 19.6831 25.3169C19.8003 25.4342 19.9593 25.5 20.125 25.5H25.125C25.2908 25.5 25.4497 25.4342 25.567 25.3169C25.6842 25.1997 25.75 25.0408 25.75 24.875V15.5C25.748 13.843 25.0889 12.2544 23.9172 11.0828C22.7456 9.9111 21.157 9.25198 19.5 9.25ZM24.5 24.25H20.75V18C20.75 17.1712 20.4208 16.3763 19.8347 15.7903C19.2487 15.2042 18.4538 14.875 17.625 14.875C16.7962 14.875 16.0014 15.2042 15.4153 15.7903C14.8293 16.3763 14.5 17.1712 14.5 18V24.25H10.75V10.5H14.5V12.0037C14.5 12.1332 14.5401 12.2595 14.615 12.3651C14.6898 12.4707 14.7955 12.5505 14.9177 12.5935C15.0398 12.6364 15.1722 12.6404 15.2967 12.6048C15.4211 12.5693 15.5315 12.496 15.6125 12.395C16.2544 11.5813 17.1342 10.9883 18.1293 10.6985C19.1243 10.4088 20.185 10.4367 21.1634 10.7785C22.1418 11.1204 22.9891 11.759 23.5872 12.6053C24.1854 13.4517 24.5044 14.4636 24.5 15.5V24.25ZM4.33501 0.5025C4.18814 0.492148 4.04075 0.491313 3.89376 0.5C3.42597 0.468171 2.95663 0.532728 2.51481 0.689674C2.07298 0.84662 1.66809 1.09261 1.3252 1.41241C0.982319 1.73221 0.708749 2.119 0.521438 2.54883C0.334126 2.97867 0.237064 3.44238 0.236264 3.91125C0.232382 4.37522 0.323856 4.83505 0.505016 5.26221C0.686175 5.68937 0.953157 6.07476 1.2894 6.39448C1.62565 6.7142 2.024 6.96144 2.45974 7.12086C2.89548 7.28028 3.35933 7.34849 3.82251 7.32125H3.85751C4.30524 7.3526 4.75476 7.29546 5.1804 7.15309C5.60604 7.01072 5.99947 6.78591 6.33823 6.49149C6.67699 6.19707 6.95445 5.83881 7.15475 5.43716C7.35505 5.03552 7.47428 4.59835 7.50564 4.15062C7.53699 3.7029 7.47985 3.25338 7.33748 2.82774C7.19511 2.4021 6.9703 2.00866 6.67588 1.6699C6.38146 1.33114 6.0232 1.05369 5.62155 0.853389C5.2199 0.653085 4.78274 0.533853 4.33501 0.5025ZM4.29126 6.075C4.14691 6.08812 4.00162 6.08687 3.85751 6.07125H3.82251C3.52167 6.09386 3.21942 6.0535 2.93506 5.95274C2.6507 5.85197 2.39047 5.69302 2.17099 5.48603C1.95151 5.27904 1.77761 5.02856 1.66038 4.75058C1.54315 4.4726 1.48517 4.17323 1.49014 3.87158C1.49512 3.56993 1.56293 3.27264 1.68926 2.99867C1.81559 2.72471 1.99766 2.4801 2.22385 2.28046C2.45003 2.08081 2.71536 1.93053 3.00289 1.83919C3.29042 1.74786 3.59383 1.71748 3.89376 1.75C4.46729 1.69729 5.03827 1.87457 5.48109 2.24284C5.92391 2.61112 6.2023 3.14022 6.25501 3.71375C6.30772 4.28728 6.13044 4.85826 5.76217 5.30108C5.39389 5.7439 4.86479 6.02229 4.29126 6.075Z"
            fill={color || color1}
          />
        </svg>
      {/* </Tooltip> */}
    </>
  );
};

export default LinkedInIcon;
