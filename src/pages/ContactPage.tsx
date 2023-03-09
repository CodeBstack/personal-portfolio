interface ContactPageProps {}

const ContactPage: React.FunctionComponent<
  ContactPageProps
> = () => {
  return (
    <section
      className="h-screen p-[10%] relative"
      id="contact"
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
    </section>
  );
};

export default ContactPage;
