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
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subjek wajib diisi.";
    if (!formData.message.trim()) tempErrors.message = "Pesan wajib diisi.";
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
        <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "rikohrmawan258@gmail.com",
      href: "mailto:rikohrmawan258@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Lokasi",
      value: "Situbondo, Indonesia",
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
  ];

  return (
<section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-[10px] sm:text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2 sm:mb-3">
            Kontak
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white px-4 sm:px-0">
            Mari Bekerja Sama
          </p>
          <div className="w-10 h-0.5 sm:w-12 sm:h-1 bg-violet-600 dark:bg-violet-400 rounded-full mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct info & socials - Full width on mobile, 5/12 on large screens */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
                Ada ide proyek menarik atau ingin berkolaborasi?
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
                Silakan isi formulir kontak atau hubungi saya langsung melalui email atau platform media sosial berikut. Saya akan mencoba merespons pesan Anda secepat mungkin.
              </p>

              {/* Direct Info */}
              <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors wrap-break-word"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3 sm:mb-4">
                Temukan Saya Di
              </p>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-violet-50 dark:hover:bg-violet-950/30 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-200 dark:hover:border-violet-900/50 hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form - Full width on mobile, 7/12 on large screens */}
          <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-sm">
            {status.success ? (
              <div className="text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center">
                {/* Check icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6 animate-bounce">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                  Pesan Terkirim!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed px-2 sm:px-0">
                  Terima kasih telah menghubungi saya. Pesan Anda telah sukses terkirim dan saya akan merespons dalam waktu 1-2 hari kerja.
                </p>
                <button
                  onClick={() => setStatus((prev) => ({ ...prev, success: false }))}
                  className="mt-6 sm:mt-8 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline cursor-pointer"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                {status.error && (
                  <div className="p-3 sm:p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900 text-[10px] sm:text-xs font-semibold text-rose-600 dark:text-rose-400">
                    {status.error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="name" className="text-[10px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                      Nama Lengkap
                    </label>
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       placeholder="Masukkan nama Anda"
                       autoComplete="name"
                      className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white dark:bg-zinc-950 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all ${errors.name
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/25"
                        : "border-zinc-200 dark:border-zinc-800 focus:border-violet-600 dark:focus:border-violet-500"
                        }`}
                    />
                    {errors.name && <span className="text-[9px] sm:text-[10px] font-semibold text-rose-500">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <label htmlFor="email" className="text-[10px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                      Alamat Email
                    </label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       placeholder="Masukkan Email Anda"
                       autoComplete="email"
                      className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white dark:bg-zinc-950 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all ${errors.email
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/25"
                        : "border-zinc-200 dark:border-zinc-800 focus:border-violet-600 dark:focus:border-violet-500"
                        }`}
                    />
                    {errors.email && <span className="text-[9px] sm:text-[10px] font-semibold text-rose-500">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="subject" className="text-[10px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                    Subjek
                  </label>
                   <input
                     type="text"
                     id="subject"
                     name="subject"
                     value={formData.subject}
                     onChange={handleChange}
                     placeholder="Apa topik pembicaraan Anda?"
                     autoComplete="off"
                    className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white dark:bg-zinc-950 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all ${errors.subject
                      ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/25"
                      : "border-zinc-200 dark:border-zinc-800 focus:border-violet-600 dark:focus:border-violet-500"
                      }`}
                  />
                  {errors.subject && <span className="text-[9px] sm:text-[10px] font-semibold text-rose-500">{errors.subject}</span>}
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label htmlFor="message" className="text-[10px] sm:text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                    Pesan Anda
                  </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={4}
                     value={formData.message}
                     onChange={handleChange}
                     placeholder="Tulis pesan lengkap Anda di sini..."
                     autoComplete="off"
                    className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white dark:bg-zinc-950 text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/25 transition-all resize-none ${errors.message
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/25"
                        : "border-zinc-200 dark:border-zinc-800 focus:border-violet-600 dark:focus:border-violet-500"
                        }`}
                  />
                  {errors.message && <span className="text-[9px] sm:text-[10px] font-semibold text-rose-500">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="mt-1 sm:mt-2 w-full py-3 px-4 sm:py-4 sm:px-6 rounded-xl font-semibold text-white bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 text-xs sm:text-sm"
                >
                  {status.submitting ? (
                    <>
                      {/* Spinner icon */}
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
