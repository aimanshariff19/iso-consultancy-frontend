import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/certiq-logo.svg":

function Home() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
<section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24">

  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Logo */}
    <div className="flex justify-center mb-8">
      <img
        src={logo}
        alt="Certiq Consulting Group Logo"
        className="h-28 md:h-36 object-contain"
      />
    </div>

    {/* Company Name */}
    <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
      Certiq Consulting Group
    </h1>

    {/* Tagline */}
    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
      Professional ISO Certification Consultancy helping startups and enterprises
      achieve global compliance and structured growth.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex justify-center gap-6 flex-wrap">
      <Link
        to="/apply"
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold transition shadow-lg"
      >
        Apply Now
      </Link>

      <a
        href="#services"
        className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-gray-900 transition"
      >
        Our Services
      </a>
    </div>

  </div>

</section>

      {/* WAVE DIVIDER */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-16" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,80C840,64,960,64,1080,69.3C1200,75,1320,85,1380,90.7L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      {/* ISO SECTION */}
      <section className="py-20 bg-gray-50 reveal">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-900">
            ISO Certifications We Offer
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            End-to-end consultancy, documentation, implementation, audit support and certification guidance.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            {[
              "ISO 9001",
              "ISO 14001",
              "ISO 27001",
              "ISO 45001",
              "ISO 22000",
              "ISO 13485"
            ].map((title, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-6 text-center"
              >
                <h3 className="text-lg font-bold text-blue-600">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Comprehensive certification support and compliance guidance.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CERTIFICATION PROCESS SECTION */}
<section className="py-20 bg-white reveal">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-gray-900">
      Our 5-Step Certification Process
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      A structured, startup-friendly approach to achieving ISO certification efficiently.
    </p>

    <div className="grid md:grid-cols-5 gap-8 mt-16">

      {[
        {
          step: "01",
          title: "Initial Consultation",
          desc: "Understanding your business scope, industry and certification requirements."
        },
        {
          step: "02",
          title: "Gap Analysis",
          desc: "Identifying compliance gaps and preparing a detailed implementation roadmap."
        },
        {
          step: "03",
          title: "Documentation & Training",
          desc: "Developing required ISO documentation and training your internal team."
        },
        {
          step: "04",
          title: "Internal Audit",
          desc: "Conducting pre-certification audits to ensure readiness."
        },
        {
          step: "05",
          title: "Certification Support",
          desc: "Coordinating with certification bodies and supporting final audits."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >
          <div className="text-blue-600 text-3xl font-bold mb-4">
            {item.step}
          </div>

          <h3 className="font-semibold text-gray-800">
            {item.title}
          </h3>

          <p className="text-sm text-gray-600 mt-3">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section className="py-20 bg-white reveal">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-gray-900">
      What Our Clients Say
    </h2>

    <p className="mt-4 text-gray-600">
      Trusted by startups and growing businesses.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-16">

      {[
        {
          company: "TechNova Solutions",
          review:
            "The ISO 9001 certification process was smooth and well-structured. Their documentation support was outstanding."
        },
        {
          company: "GreenLeaf Foods",
          review:
            "Professional guidance throughout the ISO 22000 certification. Clear communication and timely support."
        },
        {
          company: "SecureIT Systems",
          review:
            "We achieved ISO 27001 faster than expected. Highly recommend for startups looking for structured compliance."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
        >
          <div className="text-yellow-500 mb-4">
            ★★★★★
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            "{item.review}"
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-800">
              {item.name}
            </p>
            <p className="text-sm text-gray-500">
              {item.company}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* FAQ SECTION */}
<section className="py-20 bg-gray-50 reveal">
  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-gray-900">
      Frequently Asked Questions
    </h2>

    <p className="text-center text-gray-600 mt-4">
      Everything you need to know before getting ISO certified.
    </p>

    <div className="mt-14 space-y-4">

      {[
        {
          question: "How long does ISO certification take?",
          answer: "Typically 4–12 weeks depending on company size, scope, and readiness level."
        },
        {
          question: "Is ISO certification valid internationally?",
          answer: "Yes. ISO certifications issued by accredited bodies are recognized globally."
        },
        {
          question: "Do you provide audit support?",
          answer: "Yes. We provide complete internal audit preparation and support during certification audits."
        },
        {
          question: "What is the cost of ISO certification?",
          answer: "Certification cost depends on company size and scope. We provide customized quotations after consultation."
        },
        {
          question: "Can startups apply for ISO?",
          answer: "Absolutely. Many startups get ISO certified to build trust with investors and clients."
        }
      ].map((item, index) => (
        <details
          key={index}
          className="bg-white p-6 rounded-xl shadow-md group cursor-pointer"
        >
          <summary className="font-semibold text-gray-800 list-none flex justify-between items-center">
            {item.question}
            <span className="text-blue-600 group-open:rotate-45 transition">
              +
            </span>
          </summary>

          <p className="mt-4 text-gray-600 text-sm">
            {item.answer}
          </p>
        </details>
      ))}

    </div>
  </div>
</section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white reveal">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Complete ISO Documentation",
              "Internal Audit Preparation",
              "Gap Analysis & Risk Assessment",
              "Certification Body Coordination",
              "Compliance Training",
              "Ongoing Compliance Support"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <p className="font-medium text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 reveal">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-gray-900">
      About Our Consultancy
    </h2>

    <p className="mt-6 text-gray-600 text-center max-w-3xl mx-auto text-lg">
      We are a globally focused ISO certification consultancy firm committed to helping
      startups, MSMEs, and enterprises achieve internationally recognized standards.
      Our structured approach ensures compliance, efficiency, and sustainable growth.
    </p>

    {/* Grid Section */}
    <div className="grid md:grid-cols-2 gap-12 mt-14">

      {/* Left Side */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">
          Our Mission
        </h3>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our mission is to simplify ISO certification processes by providing
          expert guidance, complete documentation support, risk analysis,
          audit preparation, and long-term compliance solutions.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8">
          Our Vision
        </h3>
        <p className="mt-4 text-gray-600 leading-relaxed">
          To become a trusted global ISO consultancy partner delivering
          transparent, efficient, and result-oriented certification services
          across industries worldwide.
        </p>
      </div>

      {/* Right Side */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">
          Why Choose Us?
        </h3>

        <ul className="mt-6 space-y-4 text-gray-600">
          <li>✔ End-to-End ISO Implementation Support</li>
          <li>✔ Experienced Compliance Consultants</li>
          <li>✔ Faster Certification Turnaround</li>
          <li>✔ Affordable & Transparent Pricing</li>
          <li>✔ Ongoing Post-Certification Support</li>
          <li>✔ Global Certification Body Coordination</li>
        </ul>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

    {/* Brand */}
    <div>
      <h3 className="text-2xl font-bold text-white">
        Certiq Consulting Group
      </h3>
      <p className="mt-4 text-sm text-gray-400">
        Startup-focused ISO certification consultancy providing
        structured documentation, audit preparation, and compliance support.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-white font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#services" className="hover:text-white transition">Services</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        <li><a href="/apply" className="hover:text-white transition">Apply</a></li>
      </ul>
    </div>

    {/* Certifications */}
    <div>
      <h4 className="text-white font-semibold mb-4">Certifications</h4>
      <ul className="space-y-2 text-sm">
        <li>ISO 9001</li>
        <li>ISO 14001</li>
        <li>ISO 27001</li>
        <li>ISO 45001</li>
        <li>ISO 22000</li>
        <li>ISO 13485</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-white font-semibold mb-4">Contact</h4>
      <p className="text-sm">Email: support@iso-consultancy.com</p>
      <p className="text-sm mt-2">Phone: +91 9876543210</p>
      <p className="text-sm mt-2">Serving Globally</p>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Certiq Consulting Group. All rights reserved.
  </div>
</footer>

    </div>
  );
}

export default Home;
