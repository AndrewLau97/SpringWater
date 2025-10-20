import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";
import bookingInfo from "../FAQData/bookingsInfo";

const BookingsFAQ = () => {
  const [showTopic, setShowTopic] = useState({ bookings: false });
  const [showBookings, setShowBookings] = useState({
    BookingsTaken: false,
    HowToBook: false,
    LargeGroups: false,
    Deposit:false,
    Payment:false,
    AdvanceBookings: false,
    WalkIns: false,
    CancelBooking: false,
  });

  return (
    <>
      <div className="border-1 border-hoverbeige rounded-sm">
        <QuestionAndAnswer
          question="Reservations"
          answer={
            <div className="py-2">
              {bookingInfo.map((question) => (
                <div
                  key={question[2]}
                  className="border-1 border-hoverbeige my-2"
                >
                  <QuestionAndAnswer
                    question={question[0]}
                    answer={<h1 className="text-xs py-2">{question[1]}</h1>}
                    state={showBookings}
                    stateKey={question[2]}
                    setState={setShowBookings}
                    bgColour="hoverbeige"
                  />
                </div>
              ))}
            </div>
          }
          state={showTopic}
          stateKey="bookings"
          setState={setShowTopic}
          bgColour="hoverbeige"
        />
      </div>
    </>
  );
};

export default BookingsFAQ;
