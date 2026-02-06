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
  // Responsive border logic:
  // Mobile (1 column): no borders
  // Tablet (2 columns): border-right on left column only (indices 0, 2)
  // Desktop (4 columns): border-right on all except last (indices 0, 1, 2)
  
  const isTabletLeftColumn = i % 2 === 0; // indices 0, 2 in 2-column layout
  const isNotLastItem = i !== 3;
  
  const borderClasses = [
    "border-primary-100",
    isTabletLeftColumn && "sm:border-r", // tablet: left column has border
    isNotLastItem && "lg:border-r",      // desktop: all except last have border
  ].filter(Boolean).join(" ");
  
  return (
    <div
      className={`flex flex-col ${borderClasses} items-center justify-center gap-4 py-4 sm:py-0`}
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
