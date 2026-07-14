'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';

const rsvpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  attending: z.enum(['yes', 'no'], { required_error: 'Please let us know if you can attend' }),
  guestCount: z.coerce.number().min(1).max(10).optional(),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestCount: 1,
      mealPreference: 'No Preference',
    },
  });

  const isAttending = watch('attending') === 'yes';

  const onSubmit = async (data: RSVPFormValues) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit RSVP');
      }

      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMessage('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="rsvp" title="RSVP" subtitle="We'd love to hear from you">
      <div className="max-w-2xl mx-auto mt-12">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mb-6"
              >
                <CheckCircle2 size={80} style={{ color: 'var(--color-primary)' }} />
              </motion.div>
              <h3 className="font-heading text-3xl mb-4" style={{ color: 'var(--color-primary)' }}>
                Thank You!
              </h3>
              <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>
                Your response has been received. We can&apos;t wait to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Full Name *</label>
                  <input
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Email Address *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Phone Number</label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Will you attend? *</label>
                  <div className="flex gap-4 h-[50px] items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="yes" {...register('attending')} className="accent-[var(--color-primary)] w-4 h-4" />
                      <span className="font-body text-sm" style={{ color: 'var(--color-text)' }}>Joyfully Accept</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" value="no" {...register('attending')} className="accent-[var(--color-primary)] w-4 h-4" />
                      <span className="font-body text-sm" style={{ color: 'var(--color-text)' }}>Regretfully Decline</span>
                    </label>
                  </div>
                  {errors.attending && <p className="text-red-400 text-xs mt-1">{errors.attending.message}</p>}
                </div>
              </div>

              {isAttending && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Number of Guests</label>
                      <input
                        {...register('guestCount')}
                        type="number"
                        min="1"
                        max="10"
                        className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300"
                        style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Meal Preference</label>
                      <select
                        {...register('mealPreference')}
                        className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300 appearance-none"
                        style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                      >
                        <option value="No Preference">No Preference</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Dietary Restrictions (Optional)</label>
                    <input
                      {...register('dietaryRestrictions')}
                      className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300"
                      style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                      placeholder="e.g., Gluten-free, Nut allergy"
                    />
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block font-body text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Message for the couple</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg font-body outline-none transition-all duration-300 resize-none"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                  placeholder="Leave a wish or a song request..."
                />
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-900/30 border border-red-500/50 text-red-200 text-sm font-body text-center">
                  {errorMessage}
                </div>
              )}

              <div className="pt-4 text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={status === 'submitting'}
                  className="w-full md:w-auto min-w-[200px]"
                >
                  Send RSVP
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
