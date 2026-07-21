interface ITitle {
  children: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const Title = ({ children, className, style }: ITitle) => {
  return (
    <h2
      className={`text-3xl text-light font-bold tracking-wide sm:text-4xl ${
        className ? className : ""
      }`}
      style={style ? style : {}}
    >
      {children}
    </h2>
  );
};

export default Title;
