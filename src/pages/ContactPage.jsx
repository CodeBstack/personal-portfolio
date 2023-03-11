// interface ContactPageProps {}

// const ContactPage: React.FunctionComponent<
//   ContactPageProps
// > = () => {
//   return (
//     <section
//       className="h-screen p-[10%] relative"
//       id="contact"
//     >
//   <div className="text-center items-center flex gap-4 md:gap-6 flex-col">
//     <p className="font-SF2 text-secondary text-base md:text-xl">
//       <span className="mr-6">04.</span> What's
//       Next?
//     </p>
//     <h1 className="font-SF3 text-text-200 text-4xl md:text-6xl">
//       Get In Touch
//     </h1>

//     <p className=" w-full max-w-[300px] text-text-200 text-base md:text-xl">
//       Got a question or proposal, or just want
//       to say hello? Go ahead.
//     </p>
//   </div>
//     </section>
//   );
// };

// export default ContactPage;

// import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const ContactPage = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        // console.log("~ e", e);
        // const isValid = await trigger();
        // if (!isValid) {
        e.preventDefault();
        // }
    };

    return (
        <section id="contact" className="contact py-48">
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
                className="text-center items-center flex gap-4 md:gap-6 flex-col mb-[60px]"
            >
                <div className="text-center items-center flex gap-4 md:gap-6 flex-col">
                    <p className="font-SF2 text-secondary text-base md:text-xl">
                        <span className="mr-6">04.</span> What's
                        Next?
                    </p>
                    <h1 className="font-SF3 text-text-200 text-4xl md:text-6xl">
                        Get In Touch
                    </h1>

                    <p className=" w-full max-w-[300px] text-text-200 text-base md:text-xl">
                        Got a question or proposal, or just want
                        to say hello? Go ahead.
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
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                    method="POST"
                    className="flex flex-col"
                >
                    <div className="flex flex-col justify-start items-center md:flex-row md:justify-between gap-3 mb-3">
                        <div className="w-full flex-1">
                            <input
                                className="w-full bg-[#233554] font-SF1 placeholder-text-200 p-4"
                                type="text"
                                placeholder="Name"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="text-red mt-1">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}
                        </div>

                        <div className="w-full flex-1">
                            <input
                                className="w-full bg-[#233554] font-SF1 placeholder-text-200 p-4"
                                type="text"
                                placeholder="Email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                        </div>
                    </div>

                    <input
                        className="w-full bg-[#233554] font-SF1 placeholder-text-200 p-4"
                        type="text"
                        placeholder="Subject"
                        {...register("subject", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.subject && (
                        <p className="text-red mt-1">
                            {errors.subject.type === "required" && "This field is required."}
                            {errors.subject.type === "maxLength" && "Max length is 200 char."}
                        </p>
                    )}

                    <textarea
                        className="w-full mt-3 bg-[#233554] font-SF1 placeholder-text-200 p-4"
                        name="message"
                        placeholder="Message"
                        rows="6"
                        cols="50"
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className="text-red mt-1">
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                        </p>
                    )}

                    <button
                        className="p-5 cursor-none mt-[30px] border border-secondary bg-transparent font-SF1 text-secondary rounded-[3px] text-sm self-center hover:border-secondary transition duration-500"
                        type="submit"
                    >
                        Send Message
                    </button>

                    {/* <Button variant='outlined' sx={{ width: 'fit-content' }}>Send Message</Button> */}
                </form>
            </motion.div>
            {/* </div> */}
        </section>
    );
};

export default ContactPage;