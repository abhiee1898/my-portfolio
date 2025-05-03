'use client';
import React, { FormEvent, useState } from 'react';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (apiKey) {
      formData.append('access_key', apiKey);
    } else {
      console.error('API key is not defined');
      setErrorMessage('API key is not configured.');
      return;
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    const result = await res.json();
    if (res.ok && result.success) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
      console.log('Email sent successfully:', result);
    } else {
      console.error('Failed to send email:', result);
      setErrorMessage(result.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 pt-32 relative overflow-hidden">

      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-center font-sans font-bold mb-4 text-emerald-400">
          Contact
        </h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-300 text-center">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>

        {submitted ? (
          <p className="text-center text-green-500">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-white mt-8">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="px-6 py-2 rounded-md border border-zinc-700 shadow-sm bg-emerald-400 text-gray-950 font-bold hover:bg-emerald-600"
              >
                Send Message
              </button>
            </div>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
