import React from 'react'
import GetStartedButton from './GetStartedButton'

function Form() {
  return (
    <div>
      {/* <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}
          <div>
            <label htmlFor="Full-name" className="block text-sm font-semibold leading-6 text-gray-900">
            <div className="mt-2.5 flex justify-center">
              <input
                type="text"
                name="Full-name"
                id="Full-name"
                placeholder='Full-name'
                autoComplete="family-name"
                className="block w-[25%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </label>

            <label htmlFor="Email" className="block text-sm font-semibold leading-6 text-gray-900">
            <div className="mt-2.5 flex justify-center">
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder='Email'
                autoComplete="family-name"
                className="block w-[25%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </label>


            <label htmlFor="Mobile number" className="block text-sm font-semibold leading-6 text-gray-900">
            <div className="mt-2.5 flex justify-center">
              <input
                type="text"
                name="Mobile number"
                id="Mobile number"
                placeholder='Mobile number'
                autoComplete="family-name"
                className="block w-[25%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            </label>
          </div>

          <GetStartedButton className="flex justify-center w-[30VW]"/>
    </div>
  )
}

export default Form
