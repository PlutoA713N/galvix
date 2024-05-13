import React from 'react';

const GetStartedButton = () => {
  // Inline styles using Tailwind's @apply directive
  const buttonStyles = `
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s ease;
  `;

  const buttonHoverStyles = `
    background-color: #1E3A8A;
  `;

  return (
    <button class="btn btn-blue">
        Get Started
    </button>


  );
}

export default GetStartedButton;



            {/* <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Get started
            </a> */}