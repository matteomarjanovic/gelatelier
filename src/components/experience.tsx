import CountUp from "react-countup";

const Experience = ({
  text = "Default Text",
  num,
  i,
}: {
  text: string;
  num: number;
  i: number;
}) => {
  // On mobile (1 column): no borders
  // On tablet (2 columns): border-right on odd items (0, 2)
  // On desktop (4 columns): border-right on all except last (0, 1, 2)
  const borderClass = i === 3 
    ? "" 
    : "sm:border-r lg:border-r border-primary-100";
  
  // Remove border-right on even columns in tablet view
  const tabletBorderClass = i % 2 === 1 ? "sm:border-r-0" : "";
  
  return (
    <div
      className={`flex flex-col ${borderClass} ${tabletBorderClass} items-center justify-center gap-4 py-4 sm:py-0`}
    >
      <h5 className="text-primary-100 text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ">
        {/* <CountUp
          duration={3}
          start={0}
          end={num}
          enableScrollSpy={true}
          scrollSpyDelay={0}
        /> */}
        {num}
      </h5>
      <p className="text-text-gray-200 text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9">
        {text}
      </p>
    </div>
  );
};

export default Experience;
