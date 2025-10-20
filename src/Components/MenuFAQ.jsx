import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";
import menuInfo from "../FAQData/menuInfo";

const MenuFAQ=()=>{
    const [showTopic, setShowTopic] = useState({ menu: false });
        const [showMenuInfo,setShowMenuInfo]=useState({
            takeaway:false,
            menuPrices:false,
            allergy:false,
            alcohol:false,
        })
        return (<>
        <div className="border-1 border-hoverbeige rounded-sm">
        <QuestionAndAnswer
          question="Our Menu"
          answer={
            <div className="py-2">
              {menuInfo.map((question) => (
                <div
                  key={question[2]}
                  className="border-1 border-hoverbeige my-2"
                >
                  <QuestionAndAnswer
                    question={question[0]}
                    answer={<div className="text-xs py-2">{question[1]}</div>}
                    state={showMenuInfo}
                    stateKey={question[2]}
                    setState={setShowMenuInfo}
                    bgColour="hoverbeige"
                  />
                </div>
              ))}
            </div>
          }
          state={showTopic}
          stateKey="menu"
          setState={setShowTopic}
          bgColour="hoverbeige"
        />
      </div>
        </>)
}


export default MenuFAQ