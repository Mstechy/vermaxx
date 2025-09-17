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
      // placeholder: replace with real API route later
      await new Promise(res => setTimeout(res, 700));
      setOk('Thanks — we will reply within 48 hours.');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setOk('Something went wrong — please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 card">
      <div>
        <label className="text-sm font-medium">Name</label>
        <input required value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border rounded p-2" />
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border rounded p-2" />
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea required value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full border rounded p-2" rows={5} />
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </button>
        {ok && <div className="text-sm text-gray-600">{ok}</div>}
      </div>
    </form>
  );
}