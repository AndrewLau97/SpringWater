import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";
import BookingsFAQ from "./BookingsFAQ";
import YourVisitFAQ from "./YourVisitFAQ";
import MenuFAQ from "./MenuFAQ";
import OffersFAQ from "./OffersFAQ";

const DiningWithUsFAQ = () => {
  const [showTopic, setShowTopic] = useState({ dining: false });
  return (
    <>
      <div className="p-1 bg-white rounded-sm">
        <QuestionAndAnswer
          question="Your Dining Experience"
          answer={
            <div className="py-2">
              <div className="mb-2">
                  <BookingsFAQ />
              </div>
              <div className="mb-2">
                  <YourVisitFAQ />
              </div>
              <div className="mb-2">
                  <MenuFAQ />
              </div>
              <div className="">
                  <OffersFAQ />
              </div>
            </div>
          }
          state={showTopic}
          stateKey="dining"
          setState={setShowTopic}
          //   bgColour="gold"
        />
      </div>
    </>
  );
};

export default DiningWithUsFAQ;
