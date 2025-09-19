import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      details: [
        "NanoPark Sanayi Bölgesi",
        "Tahran, İran"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: [
        "+98 21 1234 5678",
        "Pazartesi - Cuma: 09:00 - 18:00"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      details: [
        "contact@namadnanotech.com",
        "info@namadnanotech.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Çalışma Saatleri",
      details: [
        "Pazartesi - Cuma: 09:00 - 18:00",
        "Cumartesi: 09:00 - 14:00"
      ]
    }
  ];

  const subjects = [
    "Genel Bilgi",
    "Ürün Danışmanlığı",
    "Hizmet Talebi",
    "Teknik Destek",
    "İş Birliği",
    "Diğer"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bizimle <span className="text-blue-300">İletişime Geçin</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Nanoteknoloji projeleriniz için uzman ekibimizle iletişime geçin. Size en uygun çözümü birlikte bulalım.
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Bize Mesaj Gönderin
                </h2>
                <p className="text-gray-600">
                  Projeleriniz hakkında detaylı bilgi almak için formu doldurun. 
                  Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">
                    Mesajınız Başarıyla Gönderildi!
                  </h3>
                  <p className="text-green-700">
                    En kısa sürede size dönüş yapacağız. Teşekkür ederiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+98 21 0000 0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Şirket/Kurum
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Şirket adı"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Konu seçiniz</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ofisimizi Ziyaret Edin
                </h2>
                <p className="text-gray-600">
                  NanoPark Sanayi Bölgesi'ndeki modern tesisimizde ekibimizle tanışmak 
                  ve laboratuvarımızı görmek isterseniz, randevu alabilirsiniz.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 font-medium">Google Harita</p>
                  <p className="text-gray-400 text-sm">NanoPark Sanayi Bölgesi</p>
                  <p className="text-gray-400 text-sm">Tahran, İran</p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Diğer İletişim Yolları
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefon ile arayın</p>
                      <p className="text-gray-600 text-sm">+98 21 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-posta gönderin</p>
                      <p className="text-gray-600 text-sm">contact@namadnanotech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white p-2 rounded-full mr-4">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Çalışma Saatleri</p>
                      <p className="text-gray-600 text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan <span className="text-blue-800">Sorular</span>
            </h2>
            <p className="text-xl text-gray-600">
              En çok merak edilen sorular ve cevapları
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Nanoteknoloji projelerinizde hangi alanlar kapsanıyor?",
                answer: "Tıp, sağlık, endüstriyel üretim, enerji, savunma ve çevre teknolojileri alanlarında nano malzeme geliştirme, yüzey kaplama ve sensör teknolojileri konularında uzmanız."
              },
              {
                question: "Proje geliştirme süreci ne kadar sürer?",
                answer: "Proje karmaşıklığına bağlı olarak 2-12 ay arasında değişir. Detaylı analiz sonrası size kesin zaman çizelgesi sunuyoruz."
              },
              {
                question: "Ar-Ge danışmanlık hizmetleriniz neleri içeriyor?",
                answer: "Proje planlama, teknoloji transferi, patent danışmanlığı, fon başvuru desteği, risk analizi ve akademik işbirlikleri konularında kapsamlı destek sağlıyoruz."
              },
              {
                question: "Eğitim programlarınıza kimler katılabilir?",
                answer: "Araştırmacılar, mühendisler, öğrenciler ve nanoteknoloji alanında çalışmak isteyen profesyoneller programlarımıza katılabilir."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;