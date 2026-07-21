interface ISubtitle {
  children: React.ReactNode;
  className?: string | undefined;
}

const Subtitle = ({ children, className }: ISubtitle) => {
  return (
    <h2
      className={`text-2xl text-light font-semibold tracking-wide ${
        className ? className : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
