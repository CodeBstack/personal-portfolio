import StarIcon from '@mui/icons-material/Star';
import {
  useForm,
  SubmitHandler,
} from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import InstagramIcon from '../components/Vectors/InstagramIcon';
import TwitterIcon from '../components/Vectors/TwitterIcon';
import LinkedInIcon from '../components/Vectors/LinkedInIcon';
import GithubIcon from '../components/Vectors/GithubIcon';
import MailIcon from '../components/Vectors/MailIcon';

interface Props {
  className: string;
}

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = ({ className }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<
    FormValues
  > = async (data) => {
    // Setting each input data into the emailjs template keys.
    let formValues = {
      from_name: data.name,
      email_id: data.email,
      message: data.message,
    };

    emailjs
      .send(
        'service_lveo1m8',
        'template_qcz012d',
        formValues,
        'c0ngDyg0sYLt5OQYc'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          reset({
            name: '',
            email: '',
            message: '',
          });
        },
        () => {
          alert(
            'Failed to send the message, please try again'
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className={`overflow-x-hidden contact ${className}`}
    >
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-center items-center flex gap-4 md:gap-6 flex-col mb-[40px]"
      >
        <div className="text-center items-center flex gap-4 md:gap-6 flex-col">
          <p className="font-SF2 text-secondary-dark dark:text-secondary text-base md:mt4 md:text-xl">
            <span className="mr-6">04.</span>{' '}
            What's Next?
          </p>
          <h1 className="font-SF3 text-primary-dark dark:text-text-200 text-4xl md:text-6xl">
            Get In Touch
          </h1>

          <p className=" w-full max-w-[300px] text-light-text dark:text-text-200 text-base md:text-xl">
            Got a question or proposal, or just
            want to say hello? Go ahead.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="w-full max-w-[632px] mx-auto"
      >
        <form
          target="_blank"
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          // action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
          // method="POST"
          className="flex flex-col"
        >
          <div className="flex flex-col justify-start items-center md:flex-row md:justify-between gap-3 lg:gap-6">
            <div className="w-full flex-1">
              <input
                className="w-full bg-primary-dark dark:bg-[#112240] font-SF1 placeholder-text-light-text dark:placeholder-text-200 p-4"
                type="text"
                placeholder="Name"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-error mt-1">
                  {errors.name.type ===
                    'required' &&
                    'This field is required.'}
                  {errors.name.type ===
                    'maxLength' &&
                    'Max length is 100 char.'}
                </p>
              )}
            </div>

            <div className="w-full flex-1">
              <input
                className="w-full bg-primary-dark dark:bg-[#112240] font-SF1 placeholder-text-light-text dark:placeholder-text-200 p-4"
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-error mt-1">
                  {errors.email.type ===
                    'required' &&
                    'This field is required.'}
                  {errors.email.type ===
                    'pattern' &&
                    'Invalid email address.'}
                </p>
              )}
            </div>
          </div>

          <textarea
            className="w-full mt-3 lg:mt-10 bg-primary-dark dark:bg-[#112240] font-SF1 placeholder-text-light-text dark:placeholder-text-200 p-4"
            placeholder="Message"
            rows={6}
            cols={50}
            {...register('message', {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-error mt-1">
              {errors.message.type ===
                'required' &&
                'This field is required.'}
              {errors.message.type ===
                'maxLength' &&
                'Max length is 2000 char.'}
            </p>
          )}

          <button
            className="px-4 py-2 mt-[30px] border border-secondary-dark dark:border-secondary bg-transparent font-SF2 text-secondary-dark dark:text-secondary rounded-[3px] text-sm self-center hover:bg-secondary-dark hover:text-text-300 dark:hover:bg-secondary dark:hover:text-primary transition duration-500"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <div className="flex flex-col items-center mt-40 w-full ">
        <div className="flex mb-[30px]  md:hidden footer_socials ">
          <a
            aria-label="Go to Samuel Olumide Github page"
            title="Github page"
            href="https://github.com/CodeBstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            aria-label="Go to Samuel Olumide Instagram page"
            title="Instagram page"
            href="https://www.instagram.com/samuel__olumide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            aria-label="Go to Samuel Olumide Twitter page"
            title="Twitter page"
            href="https://twitter.com/SunmonuSam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            aria-label="Go to Samuel Olumide LinkedIn page"
            title="LinkedIn page"
            href="https://www.linkedin.com/in/samuel-sunmonu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            aria-label="Email Me"
            title="Email Me"
            href="mailto: ssamuelolumide@gmail.com"
          >
            <MailIcon />{' '}
          </a>
        </div>
        <p className="font-SF1 text-xs md:text-sm text-light-text dark:text-text-200 mb-2">
          Developed by Samuel Olumide
        </p>

        {/* MOBILE STARS */}
        <div className="flex md:hidden gap-2 items-center">
          <StarIcon
            fontSize="medium"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
          <StarIcon
            fontSize="medium"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
          <StarIcon
            fontSize="medium"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
        </div>

        {/* DESKTOP STARS */}
        <div className="hidden md:flex gap-2 items-center">
          <StarIcon
            fontSize="large"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
          <StarIcon
            fontSize="large"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
          <StarIcon
            fontSize="large"
            sx={{
              color: `${
                document.documentElement
                  .className === 'dark'
                  ? '#64FFDA'
                  : '#020A13'
              }`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
