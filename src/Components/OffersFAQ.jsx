import { useState } from "react"
import QuestionAndAnswer from "./QuestionAndAnswer"

const OffersFAQ=()=>{
    const [showTopic, setShowTopic]=useState({offer:false})
    return (<>
    <div className="border-1 border-hoverbeige rounded-sm">
        <QuestionAndAnswer question="Vouchers"
        answer={<p className="text-xs py-2">Vouchers are available to purchase in the restaurant and can be used for dining in only. Please note that vouchers can't be used for takeaway orders.</p>} state={showTopic} stateKey="offer" setState={setShowTopic} bgColour="hoverbeige"/>
        </div></>)
}


export default OffersFAQ