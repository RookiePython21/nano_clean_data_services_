import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    question: 'Do we need to shut down equipment during cleaning?',
    answer:
      'No. Our technicians are trained to work around live, powered equipment without any interruption to your operations. ESD-safe procedures and anti-static tools ensure zero risk to your hardware.',
  },
  {
    question: 'Are your technicians background checked?',
    answer:
      'Yes. Every team member undergoes a full background check, drug screening, and is trained in ESD-safe and controlled environment procedures before their first assignment.',
  },
  {
    question: 'How often should a data center be cleaned?',
    answer:
      'We recommend quarterly deep cleans at minimum, with monthly maintenance for high-traffic or high-density environments. Our assessment visit will help determine the optimal schedule for your facility.',
  },
  {
    question: 'What certifications do you hold?',
    answer:
      'Our team is trained to ASHRAE, NFPA, and ISO 14644 cleanliness standards for data center environments. We stay current with evolving industry protocols and update our training annually.',
  },
  {
    question: 'Do you provide documentation for audits?',
    answer:
      'Absolutely. Every service includes before/after photos, particle count readings, and a detailed compliance report. Documentation is delivered digitally within 24 hours of service completion.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We currently serve data centers across the continental United States. Contact us at info@controlledenvservices.com or call (800) 555-0199 for availability in your specific region.',
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-slate-600 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Everything you need to know about our data center cleaning services. Can't find
            an answer?{' '}
            <a
              href="mailto:info@controlledenvservices.com"
              className="text-cyan-600 hover:text-cyan-500 underline underline-offset-2"
            >
              Email us
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl bg-white px-6 shadow-sm data-[state=open]:border-cyan-200 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-slate-900 hover:text-cyan-700 font-semibold text-sm sm:text-base py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
