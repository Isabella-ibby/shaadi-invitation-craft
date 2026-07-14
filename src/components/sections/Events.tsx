'use client';

import { motion } from 'framer-motion';
import { Palette, Sun, Music, Heart, PartyPopper, MapPin, Calendar, Clock, Shirt } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import eventsData from '@/data/events.json';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import React from 'react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Palette, Sun, Music, Heart, PartyPopper, MapPin, Calendar, Clock, Shirt
};

export default function Events() {
  if (!eventsData || eventsData.length === 0) return null;

  return (
    <SectionWrapper id="events" title="Wedding Events" subtitle="Join us in celebration">
      <motion.div 
        variants={staggerContainer(0.15)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {eventsData.map((event, index) => {
          const IconComp = iconMap[event.icon] || Heart;

          return (
            <motion.div key={index} variants={fadeInUp}>
              <Card variant="solid" className="h-full flex flex-col p-6 hoverable group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto transition-transform group-hover:scale-110" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                  <IconComp size={28} style={{ color: 'var(--color-primary)' }} />
                </div>
                
                <h3 className="font-heading text-2xl text-center mb-4 font-semibold" style={{ color: 'var(--color-text)' }}>
                  {event.title}
                </h3>
                
                <div className="flex-grow space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                    <span className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{event.venue}</span>
                  </div>
                </div>
                
                <p className="font-body text-sm text-center mb-6 border-t pt-4" style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                  {event.description}
                </p>
                
                {event.dressCode && (
                  <div className="mt-auto flex justify-center">
                    <Badge variant="default" className="flex items-center gap-2">
                      <Shirt size={14} /> {event.dressCode}
                    </Badge>
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
