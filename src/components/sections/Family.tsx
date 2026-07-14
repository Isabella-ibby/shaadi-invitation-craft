'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import familyData from '@/data/family.json';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Family() {
  if (!familyData || familyData.length === 0) return null;

  return (
    <SectionWrapper id="family" title="Our Families" subtitle="The people who mean the world to us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-5xl mx-auto">
        {familyData.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col">
            <h3 className="font-heading text-3xl text-center mb-10 font-semibold" style={{ color: 'var(--color-primary)' }}>
              {group.title}
            </h3>
            
            <motion.div 
              variants={staggerContainer(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 gap-x-6 gap-y-10"
            >
              {group.members.map((member, memberIdx) => (
                <motion.div key={memberIdx} variants={fadeInUp} className="flex flex-col items-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 p-1" style={{ borderColor: 'var(--color-primary)' }}>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg md:text-xl text-center mb-1" style={{ color: 'var(--color-text)' }}>
                    {member.name}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-center uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                    {member.relation}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
