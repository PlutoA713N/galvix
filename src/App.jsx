import React from 'react'
import Header from './Components/Header'
import SalesTaxFilingSection from './Components/SalesTaxFilingSection'
import NewsLetterSection from './Components/NewsLetterSection'
import FeatureSection from './Components/FeatureSection'
import AdvantagesSection from './Components/AdvantagesSection'
import ReduceCostSection from './Components/ReduceCostSection'
import MitigateRisks from './Components/MitigateRisks'
import Heading from './Components/Heading'
import Image from './Components/Image'
import SmallSections from './Components/SmallSections'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import FAQ from './Components/FAQ'
import GetStarted from './Components/GetStarted'
import Form from './Components/Form'

import Footer from './Components/Footer'


const data = {
  howItWorks: 'HOW IT WORKS',
  steps: 'Put sales tax return filing on autopilot in 3 easy steps',
  benefits: 'BENEFITS',
  about: 'Galvix is an online sales tax filing service for small businesses',
  performance: '100% DONE-FOR-YOU',
  simplifyWork: 'Simplify your sales tax process with our comprehensive solution',
  different: 'GALVIX IS DIFFERENT',
  service: 'Exceptional Customer Service, Without Extra Costs',
  support: 'Stop paying extra for “Enterprise Support”. We offer unlimited exceptional customer service, already included with all our plans.',
}


const features = {
  featureOne :  [
    {
      name: 'Automated Data Sync',
      description:
        'Plug all the billing channels you use and sync the data required for return preparation and filing',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Draft Returns.',
      description: 'Review draft returns and ask for any changes before we file',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Tax Credit Adjustments.',
      description: 'Reduce your tax burden by letting us claim tax credits for you against refunded orders or state offered incentives',
      icon: CloudArrowUpIcon,
    },
  ],
  featureTwo: [
    {
      name: 'Notifications',
      description:
        'Stay focused on your business and get notified of any important updates requiring your action',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Payment Remittances.',
      description: 'Never worry about making payments to each state manually with our fully automated payment remittances',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Audit Documentation.',
      description: 'Access all past filings from a single online dashboard',
      icon: CloudArrowUpIcon,
    },
  ],
  featureThree: 
    [
      {
        name: ' Live chat & call support ',
        description:
          'Our sales tax experts are a chat away from assisting you with any issues. Prefer talking? Use the Galvix app to schedule a call at a time that works for you.',
        icon: CloudArrowUpIcon,
      },
      {
        name: 'Never call a state again ',
        description: `We communicate on your behalf with state agencies, so that you don't have to.`,
        icon: CloudArrowUpIcon,
      },
      {
        name: 'State mail processed for you',
        description: 'We scan, read and reply to state letters on your behalf, while keeping you in the loop.',
        icon: CloudArrowUpIcon,
      },
    ]
}


 const Faqs = [
  {
    title: 'Do I need to learn or use any software for sales tax return preparation & filing?',
    content:
      'No, you don’t need to learn or use any other software for preparing or filing your sales tax returns. Avalara, Vertex, and other do-it-yourself sales tax software give you a tool to do your own taxes. Galvix does your sales tax returns preparation and filing for you end-to-end.',
  },
  {
    title: 'Does Galvix sync with Quickbooks or other accounting or billing software?',
    content:
      'Galvix provides out-of-the-box integrations with popular accounting, billing, and e-commerce software like Quickbooks, Stripe, Xero, and Shopify. This allows us to automatically sync your invoice or order data for preparing your tax returns.',
  },
  {
    title: 'How do I contact my sales tax team at Galvix?',
    content:
      'You can schedule a call with your team (or send them a message) whenever you’d like. There’s no extra fee or hourly charges for support - we’re always happy to help you with anything related to sales tax for your business.',
  },
  {
    title: "Where are your sales tax experts located? What are their qualifications?",
    content:
      `Each customer's primary point of contact is a dedicated in-house, professionally-trained sales tax expert based in North America. What makes Galvix unique is that we blend the human touch with modern technology. Our in-house team is also supported by machine learning technology, which allows us to automatically process large amounts of financial data instantly and prepare your tax returns faster and accurately.`,
  },


  {
    title: 'Do I need to pay for anything besides Galvix to file my sales tax?',
    content:
      'A few states require a registration fee; however, most states are free. Besides that, the only recurring charge is your monthly/quarterly/annual filings.',
  },
  {
    title: 'Do I have to sign a long-term contract?',
    content:
      `No, we don't require customers to sign a long-term contract. You pay month-to-month and only when we file taxes or register you for a state.`,
  },
  {
    title: "What assurances does Galvix make for clients?",
    content: `We guarantee your sales tax is filed on time, or we'll pay your penalty and interest charges.`
  },

  {
    title: 'How do I get started?',
    content:
      `Getting started is easy - just sign up for our complimentary consultation call, during which we will understand your business and a little bit about your billing/accounting stack. We will then share a service agreement for your review and sign-off. Post that, our onboarding team will set up the Galvix account for you, while connecting to your billing or accounting software and configuring details like your existing tax registration numbers for each state, filing frequencies, etc. Once the account is active (usually takes about a week), no further steps are required from your end. We will prepare and share the draft returns for your review and approval by the 5th of every month. Once we get your approval (latest by the 10th), we will file your tax returns while uploading copies of the acknowledgments and any other documentation to your online account.`,
  },
  {
    title: `I have a "question" that didn’t get "answer"ed here. What do I do?`,
    content: `Contact us at hello@galvix.com or schedule a complimentary consultation with our team here.`
  },

]


function App() {
  return (
    <div>
      <Header />
      <SalesTaxFilingSection />
      <Heading paragraph={data.howItWorks} heading={data.steps} />
      <FeatureSection />
      <Heading paragraph={data.benefits} heading={data.about} />
      <AdvantagesSection />
      <ReduceCostSection />

      <MitigateRisks />
      <Heading paragraph={data.performance} heading={data.simplifyWork} />      
      <Image />
      <Heading />

      <SmallSections features={features.featureOne} />
      <SmallSections features={features.featureTwo} />


      <Heading paragraph={data.different} heading={data.service} paragraphTwo={data.support} />      
      <SmallSections features={features.featureThree} />


      <FAQ items={Faqs}/>
      <NewsLetterSection />

      {/* <GetStarted /> */}
      
      <Footer />

    </div>
  )
}

export default App
