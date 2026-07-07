import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}

        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 text-blue-600 px-5 py-2 text-sm font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold mt-6 text-gray-900">
            We'd Love to Hear From You
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions, feedback, or partnership ideas? Our team is here to
            help you. Send us a message and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition">
              <Mail className="text-blue-600 mb-4" size={35} />

              <h3 className="font-bold text-xl mb-2">Email</h3>

              <p className="text-gray-500">
                support@wireframeai.com
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition">
              <Phone className="text-blue-600 mb-4" size={35} />

              <h3 className="font-bold text-xl mb-2">
                Phone
              </h3>

              <p className="text-gray-500">
                +91 98765 43210
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition">
              <MapPin className="text-blue-600 mb-4" size={35} />

              <h3 className="font-bold text-xl mb-2">
                Office
              </h3>

              <p className="text-gray-500">
                Greater Noida, Uttar Pradesh, India
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-xl transition">
              <Clock className="text-blue-600 mb-4" size={35} />

              <h3 className="font-bold text-xl mb-2">
                Working Hours
              </h3>

              <p className="text-gray-500">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <div className="lg:col-span-2 rounded-3xl border border-gray-200 p-8 shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition w-full font-semibold"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

        {/* FAQ */}

        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                How quickly will I receive a reply?
              </h3>

              <p className="text-gray-500 mt-3">
                We usually respond within 24 hours on business days.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                Do you offer enterprise plans?
              </h3>

              <p className="text-gray-500 mt-3">
                Yes! Contact us for custom pricing and enterprise solutions.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                Can I request a demo?
              </h3>

              <p className="text-gray-500 mt-3">
                Absolutely. We'd be happy to schedule a live demo.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg">
                Is technical support available?
              </h3>

              <p className="text-gray-500 mt-3">
                Yes. Our support team is available Monday through Friday.
              </p>
            </div>

          </div>

        </div>

        {/* Map */}

        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center mb-8">
            Visit Our Office
          </h2>

          <div className="rounded-3xl overflow-hidden border h-[400px] bg-gray-100 flex items-center justify-center">

            <div className="text-center">
              <MapPin
                size={50}
                className="mx-auto text-blue-600 mb-4"
              />

              <p className="text-gray-600 text-lg">
                Embed Google Maps Here
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}