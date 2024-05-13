import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import MitigateRisksSvg from './../assets/galvix-mitigate-risk.svg'

const features = [
  {
    name: 'Push to deploy.',
    description: 'Get your sales tax handled by experts with decades of experience',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Stay confident by optionally reviewing returns before filing ',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Access all records in a single dashboard, minimizing disruption during an audit',
    icon: ServerIcon,
  },
  {
    name: 'Database backups.',
    description: 'Minimize potential errors through automation',
    icon: ServerIcon,
  },
]

export default function MitigateRisks() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="max-w-auto md:w-[35rem]">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Mitigate Risk</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-[40rem]">Improve accuracy and reduce audit risk</p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Improve accuracy and reduce audit risk
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon key={feature.name} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {/* {feature.name} */}
                    </dt>{' '}
                    <dd key={feature.name} className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div  className="">
          <img
            src={MitigateRisksSvg}
            alt="Product screenshot"
            // className="w-1/2 h-1/2 max-w-none rounded-xl ring-1 ring-gray-400/10  md:w-[57rem] ml-0 md:-ml-4 lg:-ml-0
            // "
            className='ml-[5rem]'
            // width={2432}
            // height={1442}
          />

          </div>
        </div>
      </div>
    </div>
  )
}
