export default function Heading({heading, paragraph, paragraphTwo}) {
    return (
      <>
        {/*
          This Heading requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">{paragraph}</p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight max-w-[80rem] text-gray-900 sm:text-5xl">{heading}</h1>
            {paragraphTwo && <p className="mt-6 text-base leading-7 text-gray-600">{paragraphTwo}</p>}
             {/* <div className="mt-10 flex items-center justify-center gap-x-6"> 
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>  */}
          </div>
        </main>
      </>
    )
  }
  