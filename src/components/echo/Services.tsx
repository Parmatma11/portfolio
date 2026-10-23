import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { services, profile } from '@/data/portfolio';

const Services = () => {
  return (
    <section id="services" data-theme="light" className="relative bg-cream text-ink py-28 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-5xl tracking-tight mb-4">
            The Services I Provide
          </h2>
          <p className="text-xs md:text-sm text-ink/50 max-w-md mx-auto leading-relaxed">
            Building full-stack applications tailored to your needs and goals, with a consistent
            experience across the stack.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="border-t border-ink/15">
            {services.map((service) => (
              <AccordionItem
                key={service.number}
                value={service.number}
                className="border-b border-ink/15 data-[state=open]:bg-night data-[state=open]:text-cream transition-colors duration-500 rounded-sm px-0 data-[state=open]:px-6"
              >
                <AccordionTrigger className="py-6 hover:no-underline [&>svg]:w-5 [&>svg]:h-5">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="label-mono opacity-40">{service.number}</span>
                    <span className="font-display font-bold text-base md:text-xl uppercase tracking-tight">
                      {service.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-[3.25rem] pr-4">
                  <p className="text-sm text-cream/70 leading-relaxed mb-4 max-w-lg">
                    {service.description}
                  </p>
                  <p className="label-mono text-cream/40 mb-4">
                    Deliverables: <span className="text-cream/60">{service.deliverables}</span>
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(service.title + ' inquiry')}`}
                    className="inline-flex items-center gap-1 label-mono text-cream hover:text-cream/70"
                  >
                    Inquire <ArrowUpRight className="w-3 h-3" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
