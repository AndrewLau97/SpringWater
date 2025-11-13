const ChineseNewYear = () => {
  const zodiacAnimals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const currentYear = new Date().getFullYear();
  const zodiacYear = ((currentYear - 2020) % 12) + 1;
  const zodiac = zodiacAnimals[zodiacYear < 0 ? zodiacYear + 12 : zodiacYear];
  return (
    <>
      <div className="text-black font-georgia min-h-121.5 flex text-center bg-cnyred text-testgold">
        <div className="xl:w-1/4 w-1/6 hidden lg:flex">
          <div className="aspect-square xl:w-1/2 w-full">
            <img
              src="/images/CNYLanterns.png"
              className="full"
              alt="Chinese new year lanterns"
            />
          </div>
          <div className="aspect-square w-1/2 hidden xl:inline">
            <img
              src="/images/CNYLanterns2.png"
              className="w-full"
              alt="Chinese new year lanterns mirrored"
            />
          </div>
        </div>
        <div className="sm:py-5 xl:w-1/2 sm:w-4/5 mx-auto">
          <div className="sm:hidden">
            <img
              src="/images/CNYMobile.png"
              alt="Chinese new year lanterns hanging from a tree"
            />
          </div>
          <div className="px-5">
            <div className="flex">
              <div className="w-1/4 scale-x-[-1]">
                <img src="/images/CNYHorse.png" className="w-full" alt="A golden horse rearing up on two legs for the year of the horse"/>
              </div>
              <div className="">
                <div className="lg:text-5xl text-3xl flex items-center flex justify-center py-5">
                  <div className="w-1/4 scale-x-[-1]">
                    <img src="/images/CNYHorse.png" className="w-full hidden" alt="A golden horse rearing up on two legs for the year of the horse"/>
                  </div>
                  <div className="">
                    <h1 className="font-alexbrush">Happy</h1>
                    <h1 className="font-alegreyasc">Chinese New Year</h1>
                  </div>
                  <div className="w-1/4">
                    <img src="/images/CNYHorse.png" className="w-full hidden" alt="A golden horse rearing up on two legs for the year of the horse"/>
                  </div>
                </div>
                <h1 className="text-3xl">
                  {currentYear + 1} - The Year of the {zodiac}
                </h1>
                <a
                  className="underline hover:cursor-pointer"
                  href={`https://chinesenewyear.net/zodiac/${zodiac.toLowerCase()}/`}
                  target="_blank"
                >
                  Explore the year of the {zodiac.toLowerCase()}
                </a>
                <p>Learn about this year's zodiac and what it symbolises</p>
                <br />
              </div>
              <div className="w-1/4">
                <img src="/images/CNYHorse.png" className="w-full" alt="A golden horse rearing up on two legs for the year of the horse"/>
              </div>
            </div>
            <div className="flex md:text-4xl justify-center gap-5 text-2xl">
              <div className=" -rotate-10 translate-y-3">
                <h1>15th, 16th</h1>
              </div>
              <div className="">
                <h1>17th, 18th</h1>
              </div>
              <div className=" rotate-10 translate-y-3">
                <h1>19th, 20th</h1>
              </div>
            </div>
            <div className="text-5xl py-5">
              <h1>February</h1>
            </div>
            <p className="pb-5">
              Celebrate the start of a new lunar year in spectacular style at
              Springwater Cantonese! For one unforgettable week, our restaurant
              comes alive with the colour, sound, and excitement of traditional
              festivities.
            </p>
            <p className="pb-5">
              Join us for an unforgettable week of celebrations, flavour, and
              festive spirit - and start your year with good luck and great
              memories
            </p>
            <p className="pb-5">
              Please book in advance in order to avoid disappointment -{" "}
              <a href="tel:+441159654360" className="font-merriweather">
                0115 965 4360
              </a>
            </p>
            <p className="pb-5 text-xs">
              Booking terms and conditions:£5 per person non-refundable deposit.
              For group bookings, we require the organiser to arrange the full
              balance payment. We cannot accept individual payments on the
              night. Confirmation of numbers required 7 days before the event
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 w-1/6 hidden lg:flex">
          <div className="aspect-square w-1/2 hidden xl:inline">
            <img
              src="/images/CNYLanterns.png"
              className="w-full"
              alt="Chinese new year lanterns"
            />
          </div>
          <div className="aspect-square xl:w-1/2 w-full">
            <img
              src="/images/CNYLanterns2.png"
              className="full"
              alt="Chinese new year lanterns mirrored"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChineseNewYear;
