import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import ReduceCostsSvg from './../assets/galvix-reduce-cost.svg'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Reduce the costs of outsourcing for manual filing',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Pay a risk-free monthly fee only for states where we file for you',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Get unlimited support without the need to hire an in-house resource',
    icon: ServerIcon,
  },
]





export default function ReduceCostSection() {
  return (
    <div className="overflow-hidden bg-white md:py-5 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        

        <img
            src={ReduceCostsSvg}
            alt="Product screenshot"
            className="w-1/4 h-3/4  rounded-xl  ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            // width={2432}
            // height={1442}
          />

          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:w-[45rem]">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Reduce Cost</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep resources focused on revenue-generating tasks</p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Keep resources focused on revenue-generating tasks
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {/* {feature.name} */}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
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
