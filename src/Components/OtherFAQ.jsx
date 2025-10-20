import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";

const OtherFAQ = () => {
  const [showTopic, setShowTopic] = useState({ other: false });
  const [showOther, setShowOther] = useState({
    eCig: false,
    parkingRestrictions: false,
    pets:false,
    barred:false,
  });
  return (
    <>
      <div className="p-1 bg-white rounded-sm">
        <QuestionAndAnswer
          question="Other"
          answer={<div className="py-2">
              <div className="border-1 border-hoverbeige mb-2 rounded-sm">
                <QuestionAndAnswer
                  question="Am I allowed to use e-cigarettes or vape in the restaurant?"
                  answer={<p className="text-xs py-2">No, smoking indoors is not allowed, including the use of e-cigarettes or vaping devices. This policy applies to all areas where food is prepared or served to ensure the comfort and safety of all guests.</p>}
                  state={showOther}
                  stateKey="eCig"
                  setState={setShowOther}
                  bgColour="hoverbeige"
                />
              </div>
              <div className="border-1 border-hoverbeige mb-2 rounded-sm">
                <QuestionAndAnswer
                  question="Is there customer parking?"
                  answer={<p className="text-xs py-2">There is a large car park on site available for customer use.</p>}
                  state={showOther}
                  stateKey="parkingRestrictions"
                  setState={setShowOther}
                  bgColour="hoverbeige"
                />
              </div>
              <div className="border-1 border-hoverbeige rounded-sm">
                <QuestionAndAnswer
                  question="I have been banned from the restaurant"
                  answer={<p className="text-xs py-2">At Springwater Cantonese, we strive to provide a safe, welcoming, and enjoyable environment for all our guests. To maintain this, we may occasionally need to bar individuals whose behaviour compromises the comfort or safety of others. This includes anyone who leaves without paying for their meal. Such decisions are made at the discretion of the restaurant manager and are final.</p>}
                  state={showOther}
                  stateKey="barred"
                  setState={setShowOther}
                  bgColour="hoverbeige"
                  />
              </div>
                  {/* <div className="border-1 border-hoverbeige rounded-sm">
                    <QuestionAndAnswer
                      question="Am I allowed to bring drinks into the restaurant?"
                      answer={<p className="text-xs py-2">Our Restaurant is fully licensed and we do not permit alcoholic or non-alcoholic drinks to be brought into the restaurant. </p>}
                      state={showOther}
                      stateKey="pets"
                      setState={setShowOther}
                      bgColour="hoverbeige"
                    />
                  </div> */}
            </div>}
          state={showTopic}
          stateKey="other"
          setState={setShowTopic}
        />
      </div>
    </>
  );
};

export default OtherFAQ;
