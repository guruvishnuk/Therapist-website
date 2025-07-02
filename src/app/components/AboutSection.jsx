export default function AboutSection() {
  return (
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
  );
}
