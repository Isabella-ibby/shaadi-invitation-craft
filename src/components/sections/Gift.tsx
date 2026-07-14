'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check, ExternalLink, CreditCard, Building, Gift as GiftIcon } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import giftsData from '@/data/gifts.json';
import { copyToClipboard } from '@/lib/utils';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Gift() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = async (text: string, id: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedStates((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [id]: false }));
      }, 2000);
    }
  };

  return (
    <SectionWrapper id="gift" title="Gift Registry" subtitle={giftsData.message}>
      <motion.div 
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* UPI Section */}
        {giftsData.showUPI && (
          <motion.div variants={fadeInUp} className={!giftsData.showBank && !giftsData.showRegistry ? 'md:col-span-2 max-w-md mx-auto' : ''}>
            <Card variant="solid" className="h-full flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <CreditCard size={28} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="font-heading text-2xl mb-6 font-semibold" style={{ color: 'var(--color-text)' }}>UPI Transfer</h3>
              
              <div className="relative w-48 h-48 mb-6 p-2 rounded-xl" style={{ backgroundColor: '#fff' }}>
                <Image
                  src={giftsData.upiQR}
                  alt="UPI QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex items-center gap-3 w-full justify-center">
                <span className="font-body text-lg" style={{ color: 'var(--color-text)' }}>{giftsData.upiId}</span>
                <button
                  onClick={() => handleCopy(giftsData.upiId, 'upi')}
                  className="p-2 rounded-full transition-colors hover:bg-white/10"
                  title="Copy UPI ID"
                >
                  {copiedStates['upi'] ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <Copy size={18} style={{ color: 'var(--color-primary)' }} />
                  )}
                </button>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Bank Details Section */}
        {giftsData.showBank && (
          <motion.div variants={fadeInUp} className={!giftsData.showUPI && !giftsData.showRegistry ? 'md:col-span-2 max-w-md mx-auto' : ''}>
            <Card variant="solid" className="h-full flex flex-col items-center p-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <Building size={28} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="font-heading text-2xl mb-8 font-semibold text-center" style={{ color: 'var(--color-text)' }}>Bank Details</h3>
              
              <div className="w-full space-y-4">
                {[
                  { label: 'Name', value: giftsData.bankDetails.name, id: 'b-name' },
                  { label: 'Account', value: giftsData.bankDetails.account, id: 'b-acc' },
                  { label: 'IFSC', value: giftsData.bankDetails.ifsc, id: 'b-ifsc' },
                  { label: 'Bank', value: giftsData.bankDetails.bank, id: 'b-bank' },
                ].map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 last:border-0">
                    <span className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.label}</span>
                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                      <span className="font-body text-right" style={{ color: 'var(--color-text)' }}>{item.value}</span>
                      <button
                        onClick={() => handleCopy(item.value, item.id)}
                        className="p-1.5 rounded-full transition-colors hover:bg-white/10 ml-2"
                        title={`Copy ${item.label}`}
                      >
                        {copiedStates[item.id] ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} style={{ color: 'var(--color-primary)' }} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Registry Links */}
        {giftsData.showRegistry && (
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h3 className="font-heading text-2xl mb-6 font-semibold text-center" style={{ color: 'var(--color-primary)' }}>Online Registries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {giftsData.registryLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card variant="outlined" className="p-6 flex items-center justify-between hoverable">
                    <div className="flex items-center gap-4">
                      <GiftIcon size={24} style={{ color: 'var(--color-primary)' }} />
                      <span className="font-body font-medium" style={{ color: 'var(--color-text)' }}>{link.name}</span>
                    </div>
                    <ExternalLink size={18} style={{ color: 'var(--color-text-muted)' }} className="transition-transform group-hover:translate-x-1" />
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
