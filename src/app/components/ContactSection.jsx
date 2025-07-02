export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-orange-50 text-gray-800 px-6 sm:px-12 py-16 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-6">
          Contact & Booking
        </h2>
        <p className="text-md sm:text-lg text-center text-gray-700 mb-10">
          Ready to take the next step? Fill out the form below to book a free 15-minute consultation.
          I’ll get back to you within 24 hours.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              required
              rows="5"
              placeholder="Tell me a little about what you'd like support with..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
