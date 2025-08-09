import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  TreePine,
  Users,
  Calendar,
} from "lucide-react";
import { Link } from "react-router";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #016630 0%, #02854a 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <MessageSquare className="w-16 h-16 text-green-800" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions about organizing events, joining our community, or
              need support? We're here to help you make a positive environmental
              impact.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="py-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className=" p-8 rounded-2xl">
              <h2 className="text-3xl font-bold  mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium  mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                      style={{ "--tw-ring-color": "#016630" }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium  mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                      style={{ "--tw-ring-color": "#016630" }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium  mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                    style={{ "--tw-ring-color": "#016630" }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="event-organization">
                      Event Organization
                    </option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300"
                    style={{ "--tw-ring-color": "#016630" }}
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 resize-vertical"
                    style={{ "--tw-ring-color": "#016630" }}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 hover:opacity-90 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: "#016630" }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold  mb-6">
                  Contact Information
                </h2>
                <p className=" mb-8">
                  We're committed to helping you make a positive environmental
                  impact. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6" style={{ color: "#016630" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Email</h3>
                    <p className="">info@greenevents.com</p>
                    <p className="">support@greenevents.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6" style={{ color: "#016630" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Phone</h3>
                    <p className="">+1 (555) 123-4567</p>
                    <p className="">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" style={{ color: "#016630" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Address</h3>
                    <p className="">
                      123 Green Street
                      <br />
                      Eco City, EC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6" style={{ color: "#016630" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold ">Office Hours</h3>
                    <p className="">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className=" p-6 rounded-xl">
                <h3 className="text-xl font-semibold  mb-4">Quick Help</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <TreePine
                      className="w-5 h-5"
                      style={{ color: "#016630" }}
                    />
                    <span className="">How to organize an event</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" style={{ color: "#016630" }} />
                    <span className="">Volunteer registration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar
                      className="w-5 h-5"
                      style={{ color: "#016630" }}
                    />
                    <span className="">Event guidelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 ">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold  mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg ">
              Find quick answers to common questions about our platform and tree
              plantation events.
            </p>
          </div>

          <div className="space-y-8 text-black">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold  mb-3">
                How do I organize a tree plantation event?
              </h3>
              <p className="">
                Simply create an account, click "Create Event," and fill out the
                event details including date, location, number of volunteers
                needed, and any special requirements. Our team will review and
                approve your event within 24 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold  mb-3">
                Is there a cost to use the platform?
              </h3>
              <p className="">
                Our platform is completely free for both event organizers and
                volunteers. We believe environmental conservation should be
                accessible to everyone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold  mb-3">
                What should I bring to a tree plantation event?
              </h3>
              <p className="">
                Most events provide tools and saplings, but we recommend
                bringing water, gloves, comfortable clothing, and sun
                protection. Check the specific event details for any additional
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold  mb-3">
                Can schools and organizations participate?
              </h3>
              <p className="">
                Absolutely! We welcome participation from schools, corporations,
                NGOs, and community groups. Group registrations can be made
                through our platform, and we offer special support for
                large-scale participation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-white" style={{ backgroundColor: "#016630" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of environmental champions and start making a
            difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"/upcoming-event"}
              className="bg-white text-green-700 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Browse Events
            </Link>
            <Link
              to={"/create-event"}
              className="border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Create Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
