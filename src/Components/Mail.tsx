const Mail = () => {
  return (
    <div className="flex items-center text-textColor gap-10 fixed bottom-32 -right-40 rotate-90">
      <a
        href="mailto:rupinder61093sandhu@gmail.com"
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        rupinder61093sandhu@gmail.com
      </a>
      <hr className="border-[2px] rounded-full w-40 text-textColor bg-textColor border-textColor"></hr>
    </div>
  );
};

export default Mail;
