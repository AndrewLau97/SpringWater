import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";
import yourVisitInfo from "../FAQData/yourVisitInfo";

const YourVisitFAQ = () => {
  const [showTopic, setShowTopic] = useState({ visit: false });
  const [showVisitInfo, setShowVisitInfo] = useState({
    openingTimes: false,
    dressCode: false,
    disableAccess: false,
  });

  return (
    <>
      <div className="border-1 border-hoverbeige rounded-sm">
        <QuestionAndAnswer
          question="During Your Visit"
          answer={
            <div className="py-2">
              {yourVisitInfo.map((question) => (
                <div
                  key={question[2]}
                  className="border-1 border-hoverbeige my-2"
                >
                  <QuestionAndAnswer
                    question={question[0]}
                    answer={<h1 className="text-xs py-2">{question[1]}</h1>}
                    state={showVisitInfo}
                    stateKey={question[2]}
                    setState={setShowVisitInfo}
                    bgColour="hoverbeige"
                  />
                </div>
              ))}
            </div>
          }
          state={showTopic}
          stateKey="visit"
          setState={setShowTopic}
          bgColour="hoverbeige"
        />
      </div>
    </>
  );
};

export default YourVisitFAQ;
