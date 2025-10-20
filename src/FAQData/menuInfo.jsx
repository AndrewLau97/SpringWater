const menuInfo = [
  [
    "Where can I see your menu?",
    <p>
      Our full menu and prices are available on our homepage or directly through
      our link here{" "}
      <a href="/menu" className="text-blue-500 underline">
        menu page.
      </a>
    </p>,
    // `Our full menu and prices are available on our homepage or directly through our link here... ${(
    //   <a></a>
    // )}`
    "menuPrices",
  ],
  [
    "Do you have a takeaway menu?",
    <p>
      Yes! Our takeaway menu can be found on our{" "}
      <a href="/takeaway" className="text-blue-500 underline">
        website.
      </a>
    </p>,
    // `Yes! Our takeaway menu can also be found on our website. link here`
    "takeaway",
  ],
  [
    "Do you cater for allergies or special diets?",
    "Absolutely - Please ask for our allergy guide available on site before ordering if you have an allergy or special dietary requirement. Our Staff can advise if you have any further questions.",
    "allergy",
  ],
  [
    "What's your policy on serving alcohol?",
    "We take responsible service seriously. By law, alcohol cannot be sold to anyone under 18, and guests under 16 must be accompanied by an adult. Accepted IDs include a driving licence or international passport.",
    "alcohol",
  ],
  [
    "Am I allowed to bring drinks into the restaurant?",
    "Our Restaurant is fully licensed and we do not permit alcoholic or non-alcoholic drinks to be brought into the restaurant.",
    "outsideDrinks",
  ],
];

export default menuInfo;
