import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import { ArrowRightIcon, DocumentTextIcon, IdentificationIcon } from '@heroicons/react/20/solid';

import doubleArrowSvg from '../assets/doubleArrows.svg'
import forms from '../assets/form.svg'
import registers from '../assets/register.svg'

const features = [
  {
    name: ' Connect your billing system ',
    description:
    'We connect with your existing accounting, billing, or e-commerce platforms, like Quickbooks, Stripe, Shopify, and others, to sync your invoice or order data every month.',
    icon: ArrowRightIcon,
  },
  {
    name: 'Tell us where you are registered',
    description: 'For each state where you are registered, we set up details like tax registration numbers, filing frequency, etc., and ensure you are all set for timely filings.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Review & approve returns ',
    description: 'We share the draft returns for your review by the 5th of every month. Once you approve, we will file your tax returns in each state and share acknowledgment copies for future reference.',
    icon: IdentificationIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white   ">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="md:w-[70vw]">
              {/* <h2 className="   text-center font-semibold leading-7 text-indigo-600">HOW IT WORKS</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center max-w-[90vw]">Put sales tax return filing on autopilot in 3 easy steps</p> */}
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p> */}
              <dl className="mt-10 max-w-xl  text-base leading-7 text-gray-600 lg:max-w-none md:flex ">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-9 flex flex-col">
                    <dt className="inline font-semibold text-gray-900 w-[2rem] h-[2rem]">
                      <feature.icon className=" absolute  top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {/* <img src={feature.icon} /> */}
                    </dt>{' '}
                    <p className='font-bold'>Step {index + 1}</p>
                    <h2 className='text-black font-bold"'>{feature.name}</h2>
                    <dd className="">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}
