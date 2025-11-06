import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

      setSubmitted(true);
    } catch (err) {
      console.error("Email send failed:", err);
      setError("Oops! Something went wrong. Please try again later.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 " +
    "focus:border-blue-600 bg-white shadow-sm transition";

  return (
    <section
      className="py-24 px-8 sm:px-16 md:px-20 max-w-4xl mx-auto 
                 bg-gradient-to-br from-blue-100 via-white to-purple-100 
                 rounded-2xl shadow-lg border border-gray-200"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-blue-700 tracking-tight">
        Get In Touch
      </h2>

      <p className="mb-10 font-bold text-center text-blue-700 text-lg">
        Feel free to reach out by filling the form below.
      </p>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold text-xl py-10">
          ✅ Thank you for your message! <br /> I’ll get back to you soon.
        </div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-blue-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-blue-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-blue-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Type your message here..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-6 rounded-xl 
                       font-bold text-xl shadow-xl hover:bg-blue-700 
                       focus:outline-none focus:ring-4 focus:ring-blue-300 
                       transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                       flex items-center justify-center gap-3"
          >
            Send Message
            <MdSend size={26} className="inline-block" />
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactMe;
