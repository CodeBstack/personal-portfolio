import CloseIcon from '../../../components/Vectors/CloseIcon';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import '../index.scss';

interface Props {}

const Skills: React.FunctionComponent<
  Props
> = () => {
  return (
    <div className="flex flex-col gap-16 lg:flex-row  lg:gap-8">
      <ul className="flex-1 font-SF2 md:mt-10 text-text-200 text-base grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4 md:gap-y-6">
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          HTML
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          CSS
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          SCSS
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          TAILWINDCSS
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          MATERIAL UI
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          JAVASCRIPT
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          TYPESCRIPT
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          REACT JS
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          NEXT JS
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          REDUX
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          REDUX TOOLKIT
        </li>
        <li className="flex gap-2 items-center">
          <span className="rounded-full bg-text-200 w-[6px] h-[6px]"></span>{' '}
          GRAPHQL
        </li>
      </ul>
      <div className="flex-1  max-w-[450px] mb-40 md:mb-48 lg:mb-0 lg:mt-12 ">
        <div className="cubespinner">
          <div className="face1">
            <FaHtml5 color="#F06529" />
          </div>
          <div className="face2">
            <FaCss3 color="#28A4D9" />
          </div>
          <div className="face3">
            <FaSass color="#DD0031" />
          </div>
          <div className="face4">
            <FaReact color="#5ED4F4" />
          </div>
          <div className="face5">
            <FaJsSquare color="#EFD81D" />
          </div>
          <div className="face6">
            <SiTypescript color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
