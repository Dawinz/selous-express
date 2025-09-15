import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-selous-purple-100 via-selous-gray-100 to-selous-gold-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bebas font-bold text-selous-purple-800 mb-4 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            Get in touch with us for any inquiries, bookings, or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bebas font-bold text-selous-purple-800 mb-6 tracking-wide">
              {t('sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                  Jina lako *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-selous-gray-200 rounded-lg focus:border-selous-gold-400 focus:outline-none font-poppins text-base bg-selous-gray-50"
                  placeholder={t('enterFullNamePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-selous-gray-200 rounded-lg focus:border-selous-gold-400 focus:outline-none font-poppins text-base bg-selous-gray-50"
                  placeholder={t('enterEmailPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                  Namba ya Simu
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-selous-gray-200 rounded-lg focus:border-selous-gold-400 focus:outline-none font-poppins text-base bg-selous-gray-50"
                  placeholder={t('enterPhonePlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                  Ujumbe *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 border-2 border-selous-gray-200 rounded-lg focus:border-selous-gold-400 focus:outline-none font-poppins resize-none text-base bg-selous-gray-50"
                  placeholder={t('enterMessagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-selous-gold-400 to-selous-gold-500 hover:from-selous-gold-500 hover:to-selous-gold-600 text-selous-purple-800 font-poppins font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                TUMA UJUMBE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bebas font-bold text-selous-purple-800 mb-6 tracking-wide">
                {t('getInTouch')}
              </h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800 text-lg">{t('simu')}</h3>
                    <p className="text-gray-600 font-poppins"><strong>Headquarters (Songea):</strong> +255 767 350 884</p>
                    <p className="text-gray-600 font-poppins"><strong>Mwanza Office:</strong> +255 626 944 800</p>
                    <p className="text-gray-600 font-poppins"><strong>Mwanza Office:</strong> +255 755 478 744</p>
                    <p className="text-gray-600 font-poppins"><strong>Dar es Salaam:</strong> +255 654 946 844</p>
                    <p className="text-gray-600 font-poppins"><strong>Arusha:</strong> +255 757 748 040</p>
                    <p className="text-gray-600 font-poppins"><strong>Moshi:</strong> +255 757 258 844</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-selous-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800 text-lg">{t('email')}</h3>
                    <p className="text-gray-600 font-poppins">support@selous.co.tz</p>
                    <p className="text-gray-600 font-poppins">bookings@selous.co.tz</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-selous-purple-600 to-selous-purple-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800 text-lg">{t('ofisi')}</h3>
                    <p className="text-gray-600 font-poppins"><strong>Headquarters:</strong> Songea Town, Ruvuma Region</p>
                    <p className="text-gray-600 font-poppins"><strong>Mwanza Office:</strong> Nyegezi, Mwanza</p>
                    <p className="text-gray-600 font-poppins"><em>Ticketing & Parcel Services</em></p>
                  </div>
                </div>

                {/* Postal Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-selous-gold-400 to-selous-gold-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800 text-lg">Postal Address</h3>
                    <p className="text-gray-600 font-poppins">P.O. Box 301, Ruvuma</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Hours */}
            <div className="bg-gradient-to-br from-white via-selous-gray-50 to-selous-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bebas font-bold text-selous-purple-800 mb-6 tracking-wide">
                {t('wakatiWaHuduma')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-selous-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800">{t('tunapaikanaKilaSiku')}</h3>
                    <p className="text-gray-600 font-poppins">{t('timeRange')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-selous-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bebas font-bold text-gray-800">{t('customerSupportDesc')}</h3>
                    <p className="text-gray-600 font-poppins">{t('available24_7')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white text-center hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bebas font-bold mb-4 tracking-wide">
                {t('quickSupport')}
              </h3>
              <p className="font-poppins mb-6">
                {t('needImmediateAssistance')}
              </p>
              <a
                href="https://wa.me/255755478744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-500 font-poppins font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('chatOnWhatsApp')}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;