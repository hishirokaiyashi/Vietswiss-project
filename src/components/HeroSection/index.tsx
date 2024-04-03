import Navigation from "../Navigation";


const HeroSection = () => {
  return (
    <div className="relative  py-[54px] bg-hero-pattern h-[500px] lg:h-[900px]  bg-no-repeat bg-center bg-cover ">
      <div className="max-w-maxWidthLayout px-[10px] mx-auto">
        <Navigation />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[108px] w-full">
          <h1 className="flex justify-center text-white lg:text-8xl md:text-5xl text-3xl">Home of Creativity</h1>
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;
