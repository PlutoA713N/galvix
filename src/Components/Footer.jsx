import React from 'react';

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Terms of Service
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
           <a href="https://twitter.com/galvixhq" class="text-gray-400 hover:text-gray-500"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="https://www.linkedin.com/company/galvix" class="text-gray-400 hover:text-gray-500">
           <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clip-rule="evenodd"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"></svg> </a> 

        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 Galvix, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
