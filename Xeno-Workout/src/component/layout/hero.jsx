const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-start h-full px-5">
      <div className="absolute top-0 right-52 bg-dark-900 px-3 py-9 rounded-bl-[200px]">
        <HeroIllustration />
      </div>
      <HeroHeader />
    </div>
  );
};

const HeroIllustration = () => {
  return (
    <img src="/src/assets/svg/fitness-99.svg" className="size-[500px] -z-10" />
  );
};

const HeroHeader = () => {
  return (
    <div className="relative font-poppins text-blush z-10 pl-52  w-1/2">
      <h3 className="text-5xl font-bold  w-full leading-relaxed mb-5">
        Tidak ada kata Terlambat untuk{" "}
        <span className="bg-green-600 px-1 rounded">Workout</span>
      </h3>
      <HeroText />
    </div>
  );
};

const HeroText = () => {
  return (
    <p className="text-urbanist text-blush text-xl w-5/6 tracking-wide">
      Kejar bentuk tubuh impianmu dengan berolahraga, Workout bisa jadi salah
      satu pilihan terbaik untuk mendapatkannya 💪🏻
    </p>
  );
};
export default HeroSection;
