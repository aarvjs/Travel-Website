'use client';

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import BookingCTA from "@/components/home/BookingCTA";
import {
  Target,
  Heart,
  Globe,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const milestones = [
  { year: "2010", title: "Founded", desc: "WanderLux began as a boutique agency in Mumbai with a passion for meaningful travel." },
  { year: "2014", title: "Expanded", desc: "Grew our portfolio to 50+ destinations across Asia, Europe, and the Middle East." },
  { year: "2018", title: "Award-Winning", desc: "Recognized as India's Top Luxury Travel Agency by Travel + Leisure." },
  { year: "2023", title: "15,000+ Travelers", desc: "Crossed 15,000 happy travelers and launched our dedicated luxury concierge service." },
];

const whyUs = [
  { icon: Globe, title: "Global Reach", desc: "500+ destinations across 60+ countries with on-ground local expertise.", color: "#0EA5E9" },
  { icon: Heart, title: "Personalized Care", desc: "Every itinerary is handcrafted to your preferences, budget, and dreams.", color: "#F97316" },
  { icon: Award, title: "Award-Winning", desc: "Recognized by Travel + Leisure and Condé Nast as a top luxury agency.", color: "#A855F7" },
  { icon: Target, title: "Seamless Experience", desc: "From planning to return — one point of contact, zero hassle.", color: "#22C55E" },
  { icon: Users, title: "Expert Team", desc: "Our travel consultants have personally visited every destination they recommend.", color: "#F97316" },
  { icon: TrendingUp, title: "Best Value", desc: "Premium experiences at competitive prices with zero hidden fees.", color: "#0EA5E9" },
];

const team = [
  {
    name: "Arjun Kapoor",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Former travel journalist who turned passion into purpose. Arjun has visited 80+ countries.",
  },
  {
    name: "Priya Mehta",
    role: "Head of Luxury Experiences",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Specialist in bespoke itineraries. Priya has curated 1,000+ luxury journeys worldwide.",
  },
  {
    name: "Rohan Singh",
    role: "Senior Travel Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Adventure travel expert with deep knowledge of the Himalayas, Alps, and Southeast Asia.",
  },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        title="Our Story & Mission"
        subtitle="We believe travel is not just about places — it's about the stories you bring home."
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=85"
        breadcrumb="About"
      />

      {/* Story Section */}
      <section className="section-py" style={{ background: "#fff" }}>
        <div className="container-px">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <SectionTitle
                eyebrow="Our Journey"
                title="Born From a"
                highlight="Love of Travel"
                align="left"
              />
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                WanderLux Travels was founded in 2010 by a group of passionate explorers who believed that luxury travel should be accessible, authentic, and extraordinary. What began as a dream in a small Mumbai office has grown into one of India's most trusted boutique travel agencies.
              </p>
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  marginBottom: "32px",
                }}
              >
                We don't just book trips — we create transformative experiences. Every itinerary is crafted with meticulous attention to detail, ensuring that each journey reflects our client's dreams and exceeds their expectations.
              </p>
              <Link href="/contact" className="btn-primary">
                <ArrowRight size={16} />
                Plan Your Trip
              </Link>
            </div>

            {/* Stacked images */}
            <div style={{ position: "relative", height: "420px" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "68%",
                  height: "300px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(7,26,45,0.15)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80"
                  alt="Team planning travel"
                  fill
                  sizes="400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "60%",
                  height: "240px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(7,26,45,0.15)",
                  border: "4px solid #fff",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                  alt="Happy travelers"
                  fill
                  sizes="350px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Stats badge */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "60%",
                  transform: "translate(-50%, -50%)",
                  background: "var(--navy)",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  textAlign: "center",
                  boxShadow: "0 8px 32px rgba(7,26,45,0.3)",
                  zIndex: 10,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "#0EA5E9",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  15K+
                </p>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Happy Travelers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(180deg, var(--sand) 0%, #fff 100%)" }}
      >
        <div className="container-px">
          <SectionTitle
            eyebrow="Our History"
            title="A Decade of"
            highlight="Excellence"
            subtitle="Key milestones that shaped WanderLux into the agency it is today."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "28px",
            }}
          >
            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  padding: "28px",
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(7,26,45,0.06)",
                  borderTop: "3px solid",
                  borderColor: i % 2 === 0 ? "#0EA5E9" : "#F97316",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: i % 2 === 0 ? "#0EA5E9" : "#F97316",
                    marginBottom: "6px",
                    lineHeight: 1,
                  }}
                >
                  {m.year}
                </p>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "10px",
                  }}
                >
                  {m.title}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-py" style={{ background: "var(--navy)" }}>
        <div className="container-px">
          <SectionTitle
            eyebrow="Why WanderLux"
            title="What Makes Us"
            highlight="Different"
            subtitle="We combine world-class service with genuine passion for travel."
            light
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    padding: "28px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `${item.color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py" style={{ background: "#fff" }}>
        <div className="container-px">
          <SectionTitle
            eyebrow="Our Team"
            title="Meet the People Behind"
            highlight="Your Journey"
            subtitle="Passionate travelers who turn your dream trips into extraordinary realities."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(7,26,45,0.08)",
                  border: "1px solid rgba(7,26,45,0.05)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ position: "relative", height: "260px" }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="320px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "22px" }}>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "4px",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0EA5E9", marginBottom: "12px", letterSpacing: "0.03em" }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
