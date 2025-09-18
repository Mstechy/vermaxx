'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);
    try {
      await new Promise(res => setTimeout(res, 700)); // Simulate API
      setOk('Thanks — we will reply within 48 hours.');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setOk('Something went wrong — please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-vermaxx-green focus:ring-2 focus:ring-vermaxx-green transition duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-vermaxx-green focus:ring-2 focus:ring-vermaxx-green transition duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-vermaxx-green focus:ring-2 focus:ring-vermaxx-green transition duration-200"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 bg-vermaxx-green text-white font-semibold rounded-xl shadow-lg hover:bg-vermaxx-copper hover:scale-105 transition duration-300"
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        {ok && <p className="text-sm text-gray-600">{ok}</p>}
      </div>
    </form>
  );
}