interface ContactPageProps {}

const ContactPage: React.FunctionComponent<
  ContactPageProps
> = () => {
  return (
    <section
      className="h-screen p-[10%] relative"
      id="contact"
    >
      <h1 className="text-secondary">
        ContactPage
      </h1>
    </section>
  );
};

export default ContactPage;
