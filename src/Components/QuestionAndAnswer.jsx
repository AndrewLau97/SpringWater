import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";


const QuestionAndAnswer =({question, answer, state, stateKey, setState, bgColour})=>{
  const bgMap={hoverbeige:"bg-hoverbeige"}
    const backgroundColour=bgMap[bgColour]||""  
    function changeState(stateKey, value) {
    setState((prevShowOuterQuestions) => ({
      ...prevShowOuterQuestions,
      [stateKey]: value,
    }));
  }

    return (<>
     <div className="w-full font-merriweather">
          <div
            className="flex justify-between items-center  hover:cursor-pointer"
            onClick={() => {
              changeState(
                stateKey,
                !state[stateKey]
              );
            }}
          >
            <div className={`${bgColour?`${backgroundColour}`:""} w-full px-2 flex justify-between items-center`}>
                <h1>{question}</h1>
                {state[stateKey]?<ChevronUpIcon className="h-5"/>:<ChevronDownIcon className="h-5"/>}
            </div>
            <motion.span
              animate={{ rotate: state[stateKey] ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            ></motion.span>
          </div>
          <AnimatePresence>
            {state[stateKey] && (
              <motion.div
                key={stateKey}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden px-5"
              >
                {answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div></>)
}


export default QuestionAndAnswer