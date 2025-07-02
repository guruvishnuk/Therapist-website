const services = [
  {
    title: "Anxiety & Stress",
    description:
      "Personalized strategies to manage anxiety, reduce overwhelm, and build resilience in daily life.",
    icon: "🧘‍♀️",
  },
  {
    title: "Trauma Recovery",
    description:
      "Compassionate, trauma-informed therapy to help you heal and reclaim your life after difficult experiences.",
    icon: "🌿",
  },
  {
    title: "Relationship Counseling",
    description:
      "Support for improving communication, resolving conflict, and building healthier relationships.",
    icon: "💬",
  },
  {
    title: "Self-Esteem & Growth",
    description:
      "Explore self-worth, overcome self-doubt, and build confidence through guided inner work.",
    icon: "✨",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-orange-50 text-gray-800 px-6 sm:px-12 py-16 border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4">
          Therapy Services
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mb-10">
          A range of services designed to support your mental health and personal growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
