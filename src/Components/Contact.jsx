/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div
      name="contact"
      className="flex items-center justify-center w-full h-screen p-4 bg-primary"
    >
      <form
        method="POST"
        action="https://getform.io/f/053b6300-77d0-40bc-aa79-9ee878993c38"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-secondary">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            // Submit the form below or shoot me an email -
            vannunganha@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-whiteBg"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="p-2 my-4 bg-whiteBg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-whiteBg"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-secondary hover:border-secondary">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
