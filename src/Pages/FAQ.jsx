import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionAndAnswer from "../Components/QuestionAndAnswer";
import DiningWithUsFAQ from "../Components/DiningWithUsFAQ";
import ContactUsFAQ from "../Components/ContactUsFAQ";
import OffersFAQ from "../Components/OffersFAQ";
import OtherFAQ from "../Components/OtherFAQ";

const FAQ = () => {
  return (
    <>
      <div className="min-h-126.5 text-black">
        <div className="py-10">
          <div className="text-center pb-10">
            <h1 className="text-5xl font-georgia text-red py-5">
              Springwater Cantonese Frequently Asked Questions
            </h1>
          </div>
          <div className="md:w-2/3 md:mx-auto w-full px-5">
            <div className="mb-2">
              <DiningWithUsFAQ />
            </div>
            <div className="mb-2">
              <ContactUsFAQ />
            </div>
            <div className="mb-2">
              <OtherFAQ />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
