import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
     
      <div className="relative bg-gradient-to-r from-amber-900 to-indigo-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Reach out to The VEDS for expert consultations,
            project inquiries, professional training, or strategic collaborations.
          </p>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid gap-8 md:grid-cols-3">
     
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Phone className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Phone Number
            </h3>
            <a
              href="tel:9606601604"
              className="mt-4 block text-xl text-gray-800 font-semibold hover:text-amber-600 transition-colors text-center"
            >
              +91 96066 01604
            </a>
            <a
              href="tel:9535925954"
              className="mt-2 block text-xl text-gray-800 font-semibold hover:text-amber-600 transition-colors text-center"
            >
              +91 95359 25954
            </a>
            <p className="mt-4 text-gray-500 text-center text-sm">
              Available Mon-Sat, 9AM-7PM
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Mail className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Email Address
            </h3>
            <a
              href="mailto:thevedsgroup@gmail.com"
              className="mt-4 block text-lg text-gray-800 font-medium hover:text-green-600 transition-colors text-center break-words"
            >
              thevedsgroup@gmail.com
            </a>
            <p className="mt-4 text-gray-500 text-center text-sm">
              Response within 24 hours
            </p>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <MapPin className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Office Address
            </h3>
            <div className="mt-4 text-gray-700 leading-relaxed text-center space-y-1">
              <p>NO.1/1 Varadharajanna Building,</p>
              <p>Kurudusonnenahalli Road,</p>
              <p>Kodigehalli,</p>
              <p>Bengaluru – 560067</p>
              <p className="pt-3 border-t border-gray-200 mt-3"></p>
              <p className="pt-2 font-semibold">Shop 15, Jhansi field complex</p>
              <p>Chintamani, 562125</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info & Maps Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Business Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-amber-400" />
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span className="text-gray-300">Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-gray-300">Sunday</span>
                  <span className="font-semibold text-gray-400">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-amber-600" />
                Quick Contact
              </h3>
              <p className="text-gray-600 mb-6">
                For urgent inquiries or immediate assistance, please call us directly.
                Our team is ready to help with your vastu requirements.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:9606601604"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  96066 01604
                </a>
                <a
                  href="tel:9535925954"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  95359 25954
                </a>
              </div>
            </div>
          </div> 

          {/* Maps Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Our Locations
              </h2>
              <p className="text-gray-600 text-lg">
                Visit us at our strategically located offices across Bengaluru
              </p>
            </div>

            <div className="grid gap-8">
              {/* Map 1 */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="bg-gradient-to-r from-gray-900 to-black p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Main Office - Chintamani
                  </h3>
                </div>
                <iframe
                  title="Kodigehalli Office Location"
                  src="https://maps.google.com/maps?q=13.398362159729004,78.05213928222656&z=17&hl=en&output=embed"
                  className="w-full h-80 border-0"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Map 2 */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="bg-gradient-to-r from-gray-900 to-black p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Main Office - Bengaluru
                  </h3>
                </div>
                <iframe
                  title="Bengaluru Office Location"
                  src="https://maps.google.com/maps?q=13.005532264709473,77.72750091552734&z=17&hl=en&output=embed"
                  className="w-full h-80 border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-gradient-to-r from-amber-50 to-indigo-50 rounded-2xl p-10 border border-amber-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our expert vastu
            engineers help you create harmonious and prosperous environments.
          </p>
          <div className="mb-6 text-gray-700">
            <p className="font-semibold mb-2">Our Offices:</p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-amber-700">Bengaluru</p>
                <p className="text-sm">NO.1/1 Varadharajanna Building,</p>
                <p className="text-sm">Kodigehalli, Bengaluru – 560067</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-amber-700">Chintamani</p>
                <p className="text-sm">Shop 15, Jhansi field complex</p>
                <p className="text-sm">Chintamani, 562125</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9606601604"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
            >
              Schedule a Call - 96066 01604
            </a>
            <a
              href="tel:9535925954"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
            >
              Schedule a Call - 95359 25954
            </a>
            <a
              href="mailto:thevedsgroup@gmail.com"
              className="bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;