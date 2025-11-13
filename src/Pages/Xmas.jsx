import Lottie from "lottie-react";
import Snow from "../animations/Snow.json";
import ChristmasLights from "../animations/ChristmasLights.json";

const Xmas = () => {
  return (
    <>
      <div className="relative flex text-black font-georgia bg-xmasgreen overflow-hidden">
        <div className="absolute sm:hidden">
          <Lottie
            animationData={Snow}
            className="w-full bg-cover h-full opacity-20"
          />
        </div>
        <div className="relative w-1/4">
          <div className="absolute md:flex flex-col hidden">
            <Lottie
              animationData={Snow}
              className="w-full bg-cover h-full opacity-50"
            />
            <Lottie
              animationData={Snow}
              className="w-full bg-cover h-full opacity-50"
            />
          </div>
          <div className="flex">
            <Lottie
              animationData={ChristmasLights}
              className="xl:w-1/3 md:w-1/2 w-full sm:flex hidden"
            />
            <Lottie
              animationData={ChristmasLights}
              className="xl:w-1/3 w-1/2 hidden md:flex scale-x-[-1]"
            />
            <Lottie
              animationData={ChristmasLights}
              className="w-1/3 hidden xl:flex"
            />
          </div>
        </div>

        <div className="text-center text-testgold sm:py-5 xl:w-1/2 sm:w-2/3 mx-auto">
          <div className="sm:text-5xl text-3xl flex items-center flex justify-between py-5 h-30 md:h-40 mb-5">
            <div className="aspect-square h-full">
              <img src="/images/xmastreereverse.png" className="h-full" alt="Golden christmas tree"/>
            </div>
            <div className="">
              <h1 className="font-alexbrush text-[clamp(1.5rem,2vw+1rem,4rem)]">
                Christmas Party Nights <br /> & New Year's Eve
              </h1>
            </div>
            <div className="aspect-square h-full flex justify-end">
              <img src="/images/xmastree.png" className="h-full" alt="Golden christmas tree mirrored"/>
            </div>
          </div>
          <div className="flex md:text-4xl justify-center gap-5 text-2xl">
            <div className=" -rotate-10 translate-y-3">
              <h1>5th, 6th</h1>
            </div>
            <div className="">
              <h1>12th, 13th</h1>
            </div>
            <div className=" rotate-10 translate-y-3">
              <h1>19th, 20th</h1>
            </div>
          </div>
          <div className="text-5xl py-5">
            <h1>December</h1>
          </div>
          <p className="pb-5">
            Make this festive season one to remember at Springwater Cantonese
          </p>
          {/* <p className="pb-5">
            During the Christmas Season, our restaurant transforms into the
            ultimate festive destination - where the warmth of the holidays
            meets the joy of the great food and good company. Gather your
            family, friends, or colleagues and celebrate with us at Springwater
            Cantonese.
          </p> */}
          <p className="pb-5">
            During the Christmas season, our restaurant comes alive with warmth,
            laughter, and festive cheer. Gather your loved ones and celebrate
            with delicious food, joyful entertainment, and a welcoming
            atmosphere. Enjoy music from our DJ, take to the dance floor, and
            let us bring the magic of Christmas straight to your table.
          </p>
          {/* <p className="pb-5">
            Throughout December, join us on Friday 5th, Saturday 6th, Friday
            12th, Saturday 13th, Friday 19th, and Saturday 20th as we bring the
            magic of Christmas to your table with entertainment, dance floor and
            delicious food served straight to you. Whether it's an intimate
            dinner, a get-together with friends, or your annual work party,
            we've created the perfect setting to make every occasion feel
            special. Then, as the year comes to close, celebrate New Year's Eve
            with us in style - a night of sparkling entertainment, dancing and
            indulgent dining to welcome in the new year in unforgettable
            fashion.
          </p> */}
          <p >
            Available Friday and Saturday nights in December leading up to
            Christmas and on New Year's Eve.
          </p>
          <p>Book early to secure your table.</p>
          <p className="pb-5">Eat as Much Menu £31 per person</p>
            <p className="italic pb-5">
              Please note: We'll be closed on Christmas Day and Boxing Day
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
            balance payment. We cannot accept individual payments on the night.
            Confirmation of numbers required 7 days before the event
          </p>
        </div>
        {/* <div className="xl:w-1/4 w-1/6 hidden lg:flex">
          <div className="aspect-square xl:w-1/2 w-full">
            <img src="/images/baubles2.png" className="w-full" />
          </div>
        </div> */}
        <div className="relative w-1/4 scale-x-[-1]">
          <div className="absolute md:flex flex-col hidden">
            <Lottie
              animationData={Snow}
              className="w-full bg-cover h-full opacity-50"
            />
            <Lottie
              animationData={Snow}
              className="w-full bg-cover h-full opacity-50"
            />
          </div>
          <div className="flex">
            <Lottie
              animationData={ChristmasLights}
              className="xl:w-1/3 md:w-1/2 w-full sm:flex hidden"
            />
            <Lottie
              animationData={ChristmasLights}
              className="xl:w-1/3 w-1/2 hidden md:flex scale-x-[-1]"
            />
            <Lottie
              animationData={ChristmasLights}
              className="w-1/3 hidden xl:flex"
            />
          </div>
        </div>
      </div>
      {/* <img className="w-full" src="/images/xmasInfo.jpg" /> */}
    </>
  );
};

export default Xmas;
