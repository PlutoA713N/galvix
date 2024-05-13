import React, { useState } from 'react';

const Faq = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-3">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold mb-2">Frequently asked questions</h3>
        {/* <p className="text-lg text-gray-600 font-semibold">
          Questions on your mind? We've got the answers you need.
        </p> */}
      </div>
      {items.map(({ title, content }, index) => (
        <div key={index} className="border border-gray-300 mb-3  p-4 hover:bg-slate-50 border-l-0 border-r-0 rounded-none">
          <button
            onClick={() => toggleFaq(index)}
            className="flex justify-between w-full items-center focus:outline-none "
          >
            <h4 className="flex-1 text-lg text-left font-medium">{title}</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 transition-transform ${
                activeIndex.includes(index) ? 'transform rotate-180' : ''
              }`}
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </button>
          {activeIndex.includes(index) && (
            <div className="mt-3">
              <p className="text-base">{content}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
