import Image from "next/image";

const Introduce = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-24 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Buy Nft - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <button className="rounded-full bg-blue-500 mt-10 min-w-[130px] text-white">
          Explore NFT
        </button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/ArbShibAi.png"
            alt="ArbShib"
            fill
            className="object-contain"
          />
        </div>
        <Image
          src="/hero-bg.png"
          alt="ArbShib"
          fill
          className="absolute xl:-top-24 xl:-right-1/2 -right-1/4  bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Introduce;
