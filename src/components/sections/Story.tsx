'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Badge from '@/components/ui/Badge';
import storyData from '@/data/story.json';

export default function Story() {
  if (!storyData || storyData.length === 0) return null;

  return (
    <SectionWrapper id="story" title="Our Love Story" subtitle="Every love story is beautiful, but ours is our favorite">
      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Timeline Center Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2" style={{ backgroundColor: 'var(--color-border)' }} />
        {/* Timeline Center Line (Mobile) */}
        <div className="md:hidden absolute left-4 top-0 w-[2px] h-full" style={{ backgroundColor: 'var(--color-border)' }} />

        <div className="flex flex-col gap-12 md:gap-24">
          {storyData.map((event, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`relative flex items-center w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-start`}
              >
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-4 w-4 h-4 rounded-full -translate-x-1/2 shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }} />
                
                {/* Desktop timeline dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full -translate-x-1/2 shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }} />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div 
                    className="rounded-2xl overflow-hidden border"
                    style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  >
                    <div className="relative w-full h-48 md:h-56">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <h3 className="font-heading text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
                          {event.title}
                        </h3>
                        <Badge variant="primary">{event.date}</Badge>
                      </div>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
