'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionTitle from '@/components/common/SectionTitle';

const WHATSAPP = 'https://wa.me/919999999999?text=Hello%20WanderLux%2C%20I%20would%20like%20to%20plan%20a%20trip.';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 99999 99999', '+91 88888 88888'],
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@wanderlux.travel', 'bookings@wanderlux.travel'],
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Level 12, Bandra Kurla Complex,', 'Mumbai, Maharashtra 400051'],
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.08)',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'WhatsApp: 24/7'],
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.08)',
  },
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 400);
  };

  return (
    <>
      <PageHero
        title="Let's Plan Your Journey"
        subtitle="Our travel experts are ready to craft the perfect itinerary just for you."
        image="https://images.unsplash.com/photo-1495562569060-2eec283d3391?w=1600&q=85"
        breadcrumb="Contact"
      />

      {/* Contact Info Cards */}
      <section
        className="section-py"
        style={{ background: 'var(--sand)' }}
      >
        <div className="container-px">
          <SectionTitle
            eyebrow="Get In Touch"
            title="We're Here to"
            highlight="Help You Travel"
            subtitle="Reach out via any channel — we typically respond within a few hours."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '80px',
            }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    padding: '28px',
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(7,26,45,0.07)',
                    border: '1px solid rgba(7,26,45,0.05)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: info.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={22} color={info.color} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '10px',
                    }}
                  >
                    {info.title}
                  </h4>
                  {info.lines.map((line, i) => (
                    <p key={i} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          {/* Form + WhatsApp */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'flex-start',
            }}
          >
            {/* Form */}
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginBottom: '8px',
                }}
              >
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.65 }}>
                Tell us about your dream trip and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '40px',
                    background: 'rgba(34,197,94,0.06)',
                    border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: '20px',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle size={48} color="#22C55E" style={{ marginBottom: '16px' }} />
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '10px',
                    }}
                  >
                    Message Sent!
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    Thank you for reaching out. Our travel expert will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Dream Destination
                      </label>
                      <input
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        placeholder="e.g. Maldives, Bali"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        No. of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={form.travelers}
                        onChange={handleChange}
                        className="input-field"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select</option>
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3–5 People</option>
                        <option>6–10 People</option>
                        <option>10+ People</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                        Budget (per person)
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="input-field"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="">Select Range</option>
                        <option>Under $500</option>
                        <option>$500 – $1,000</option>
                        <option>$1,000 – $2,500</option>
                        <option>$2,500 – $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '6px' }}>
                      Tell Us About Your Trip
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any specific requirements, travel dates, or special occasions..."
                      className="input-field"
                      style={{ resize: 'vertical', minHeight: '100px' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right: WhatsApp + Map */}
            <div>
              {/* WhatsApp CTA */}
              <div
                style={{
                  padding: '32px',
                  background: 'linear-gradient(135deg, #071A2D, #0c2a47)',
                  borderRadius: '20px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(37,211,102,0.15)',
                    border: '2px solid rgba(37,211,102,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <MessageCircle size={30} color="#25D366" fill="#25D366" />
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px',
                  }}
                >
                  Prefer to Chat?
                </h4>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  Message us on WhatsApp for an instant response. Our team is available 24/7 to help you plan.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 32px',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)';
                  }}
                >
                  <MessageCircle size={20} fill="#fff" />
                  Open WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '220px',
                  background: 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(7,26,45,0.05))',
                  border: '1px solid rgba(7,26,45,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <MapPin size={32} color="#0EA5E9" />
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--navy)',
                  }}
                >
                  Bandra Kurla Complex
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Mumbai, Maharashtra 400051
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#0EA5E9',
                    textDecoration: 'none',
                    marginTop: '4px',
                  }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
