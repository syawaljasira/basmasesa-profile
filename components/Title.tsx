interface ITitle {
  children: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const Title = ({ children, className, style }: ITitle) => {
  return (
    <h2
      className={`text-3xl text-light font-bold tracking-wide sm:text-4xl lg:text-2.5vw 2xl:text-2.7vw ${
        className ? className : ""
      }`}
      style={style ? style : {}}
    >
      {children}
    </h2>
  );
};

export default Title;
