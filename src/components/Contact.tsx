import { useState, useRef, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const formData = new FormData(formRef.current);
    // NOTE: You need to get your free Web3Forms Access Key by entering your email at https://web3forms.com/
    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key to start receiving emails.
    formData.append("access_key", "14eaf5a8-842d-422a-b217-d022ab55d128");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Error submitting form", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission failed", error);
      setStatus('error');
    }
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'rohandesai9218@gmail.com', href: 'mailto:rohandesai9218@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8766484845', href: 'tel:+918766484845' },
    { icon: MapPin, label: 'Location', value: 'Sangli, Maharashtra, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4"
          >
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"
          />
          <p className="mt-6 text-slate-400 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas or original opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  className="flex items-center gap-6 p-6 glass-card group hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                    <detail.icon size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{detail.label}</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{detail.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 glass-card">
              <h4 className="text-xl font-bold font-display mb-6">Connect with me</h4>
              <div className="flex gap-4">
                <a href="mailto:rohandesai9218@gmail.com" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1">
                  <Mail size={20} />
                </a>
                {/* Add more social links if available */}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 md:p-12 glass-card space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3 group"
              >
                {status === 'sending' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={24} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={24} />
                    Something went wrong
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
