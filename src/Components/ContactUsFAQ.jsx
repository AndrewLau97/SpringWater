import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";

const ContactUsFAQ = () => {
  const [showTopic, setShowTopic] = useState({ contact: false });
  const [showContact, setShowContact] = useState({
    address: false,
    phoneNumber: false,
  });
  return (
    <>
      <div className="p-1 bg-white rounded-sm">
        <QuestionAndAnswer
          question="How to reach us"
          answer={
            <div className="py-2">
              <div className="border-1 border-hoverbeige mb-2 rounded-sm">
                <QuestionAndAnswer
                  question="Where can I find the restaurant?"
                  answer={
                    <div className="text-xs py-2">
                      <p>
                        You can find us at: <br />
                        <span className="font-bold"><a href="https://maps.app.goo.gl/z35c9ZSRMw2VLk7Z6" target="_blank">Springwater Cantonese</a></span>
                        <br />
                        Moor Lane, Nottingham, NG14 6FZ
                      </p>
                    </div>
                  }
                  state={showContact}
                  stateKey="address"
                  setState={setShowContact}
                  bgColour="hoverbeige"
                />
              </div>
              <div className="border-1 border-hoverbeige rounded-sm">
                <QuestionAndAnswer
                  question="How can I contact the restaurant?"
                  answer={<p className="text-xs py-2">The best way to reach us is by phone. <br/> If you would like to make a booking  or have an enquiry, please give us a call on <a href="tel:+441159654360" className="font-bold">
                        0115 965 4360.
                      </a></p>}
                  state={showContact}
                  stateKey="phoneNumber"
                  setState={setShowContact}
                  bgColour="hoverbeige"
                />
              </div>
            </div>
          }
          state={showTopic}
          stateKey="contact"
          setState={setShowTopic}
        />
      </div>
    </>
  );
};

export default ContactUsFAQ;
