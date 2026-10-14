"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null });

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus({ submitting: false, success: true, error: null });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "rikohrmawan258@gmail.com",
      href: "mailto:rikohrmawan258@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Situbondo, Indonesia",
      href: null,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Availability",
      value: "Open for freelance",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/rikchooo",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rikohrmwn29",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rk.hrmwn_",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left: Headline */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-r border-border/30 lg:border-r lg:border-border/30">
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
                LET&apos;S CREATE SOMETHING EXTRAORDINARY
              </h2>
              <div className="w-12 h-px bg-border/30"></div>
            </div>

            {/* Center: Form/Description */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center border-r border-border/30 lg:border-r lg:border-border/30">
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                I&apos;m currently open for new projects, collaborations, and freelance opportunities.
                Whether you have a specific project in mind or just want to explore possibilities, let&apos;s start a conversation.
              </p>

              {status.success ? (
                <div className="text-center py-8 px-4 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-4">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-sm text-muted max-w-sm leading-relaxed px-2">
                    Thank you for reaching out. I&apos;ll get back to you within 1-2 business days.
                  </p>
                  <button
                    onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                    className="mt-6 text-sm font-bold text-foreground hover:text-muted transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {status.error && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-sm font-medium text-rose-500">
                      {status.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        autoComplete="name"
                        className={`px-4 py-3 rounded-lg border bg-background text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${errors.name
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
                          : "border-border focus:border-foreground/30"
                        }`}
                      />
                      {errors.name && <span className="text-[10px] font-medium text-rose-500">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        autoComplete="email"
                        className={`px-4 py-3 rounded-lg border bg-background text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${errors.email
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
                          : "border-border focus:border-foreground/30"
                        }`}
                      />
                      {errors.email && <span className="text-[10px] font-medium text-rose-500">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What&apos;s this about?"
                      autoComplete="off"
                      className={`px-4 py-3 rounded-lg border bg-background text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${errors.subject
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-border focus:border-foreground/30"
                      }`}
                    />
                    {errors.subject && <span className="text-[10px] font-medium text-rose-500">{errors.subject}</span>}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      autoComplete="off"
                      className={`px-4 py-3 rounded-lg border bg-background text-sm text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none ${errors.message
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
                        : "border-border focus:border-foreground/30"
                      }`}
                    />
                    {errors.message && <span className="text-[10px] font-medium text-rose-500">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="mt-2 py-3 px-6 rounded-lg font-semibold text-background bg-foreground hover:bg-muted hover:text-foreground transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-sm"
                  >
                    {status.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-background" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "LET'S WORK TOGETHER"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Info */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted mb-6">GET IN TOUCH</h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex gap-4 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center text-muted group-hover:text-foreground group-hover:border-foreground/30 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-foreground group-hover:text-muted transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4">FOLLOW ME</p>
                <div className="flex flex-wrap items-center gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border/50 bg-background text-muted hover:text-foreground hover:border-foreground/30 hover:bg-card transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}