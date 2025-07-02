import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 text-gray-800 flex flex-col items-center justify-center px-6 sm:px-12 py-20">
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-4">
            Dr. Serena Blake, PsyD
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Licensed Clinical Psychologist in Los Angeles
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Helping you manage anxiety, improve relationships, and heal from trauma with personalized therapy sessions —{" "}
            <span className="block sm:inline">available both in-person and online.</span>
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-md"
          >
            Book a Free Consult
          </a>
        </section>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-white text-gray-800 px-6 sm:px-12 py-16 border-t border-gray-200"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4">
            About Dr. Serena Blake
          </h2>
          <p className="text-md sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I&apos;m a licensed clinical psychologist based in Los Angeles with over 10 years of experience helping individuals
            overcome anxiety, depression, and trauma. My approach blends evidence-based therapies with compassionate, personalized care.
          </p>
          <p className="text-md sm:text-lg text-gray-700 leading-relaxed mt-4 max-w-3xl mx-auto">
            Whether you&apos;re navigating a major life change, struggling in your relationships, or simply want to improve your
            mental well-being — I&apos;m here to support and guide you with warmth and respect. I offer both in-person and secure online sessions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="w-full bg-orange-100 text-center text-sm text-gray-600 py-6 border-t">
        &copy; 2025 Dr. Serena Blake. All rights reserved.
      </footer>
    </>
  );
}
