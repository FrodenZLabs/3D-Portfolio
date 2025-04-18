const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold text-3xl text-center md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
