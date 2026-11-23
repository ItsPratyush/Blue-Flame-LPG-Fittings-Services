import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', country: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.country ? `Country: ${formData.country}` : '',
      '',
      `Message:`,
      formData.message,
    ].filter(Boolean).join('\n');

    const mailtoLink = `mailto:${companyInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 bg-white border ${
      errors[field] ? 'border-red-400 ring-1 ring-red-400' : 'border-border'
    } rounded-xl text-sm text-charcoal placeholder:text-text-muted/60 focus:outline-none focus:border-industrial focus:ring-2 focus:ring-industrial/20 transition-all`;

  const countries = ['Kenya', 'Uganda', 'Ethiopia', 'Rwanda', 'Tanzania', 'India', 'Other'];

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-border p-8 md:p-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Email Client Opened</h3>
        <p className="text-text-muted">Your default email application should have opened with the enquiry details pre-filled. Please send the email to complete your enquiry.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 text-sm font-semibold text-industrial border border-industrial/30 rounded-xl hover:bg-industrial/5 transition-colors">Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-lg shadow-navy/5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className={inputClasses('name')} />
          {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Company Name *</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className={inputClasses('company')} />
          {errors.company && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.company}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClasses('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 XXX XXX XXX" className={inputClasses('phone')} />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Country</label>
          <select name="country" value={formData.country} onChange={handleChange} className={inputClasses('country')}>
            <option value="">Select country</option>
            {countries.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Subject *</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enquiry subject" className={inputClasses('subject')} />
          {errors.subject && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-charcoal mb-1.5">Message / Project Requirements *</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your project requirements, BOQ details, or any specific equipment needed..." rows={5} className={inputClasses('message')} />
        {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>
      <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-flame text-white font-semibold rounded-xl hover:bg-flame-dark transition-all duration-200 shadow-lg shadow-flame/25 hover:shadow-flame/35">
        <Send className="w-4 h-4" />
        Send Enquiry
      </button>
      <p className="mt-4 text-xs text-text-muted text-center leading-relaxed">
        This form will open your default email application with the enquiry details pre-filled.<br />
        You can also email your BOQs, technical specifications and project requirements directly to{' '}
        <a href={`mailto:${companyInfo.email}`} className="text-industrial font-medium hover:underline">{companyInfo.email}</a>
      </p>
    </form>
  );
}
