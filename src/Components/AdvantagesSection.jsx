import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import GalvixSaveTime from './../assets/galvix-save-time.svg'

const features = [
  {
    name: 'Push to deploy.',
    description:
    'Sync your billing data with Galvix automatically without manual data export/import or cleansing' ,  
     icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Receive notifications once your returns are ready for review',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Approve returns in a single click and let Galvix take care of filing and remittance for each state',
    icon: ServerIcon,
  },
]

export default function AdvantagesSection() {
  return (
    <div className="overflow-hidden bg-white md:py-12 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Save Time</h2>
              {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p> */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Spend less than 5 minutes per month on sales tax
              </p>
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
          <img
            src={GalvixSaveTime}
            alt="Product screenshot"
            className="w-1/2 h-3/4 rounded-xl  ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            // width={2432}
            // height={1442}
          />
        </div>
      </div>
    </div>
  )
}
