import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Cog, GraduationCap, Users, Clock, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Danışmanlık Hizmetleri",
      description: "Endüstriyel üretim ve kaynak teknolojileri alanında uzman danışmanlık",
      longDescription: "NamadNanoTech olarak, kaynak teknolojileri ve endüstriyel üretim süreçlerinde kapsamlı danışmanlık hizmetleri sunuyoruz. Deneyimli mühendis kadromuz, projelerinizin her aşamasında teknik rehberlik sağlar. Malzeme seçiminden üretim süreç optimizasyonuna, kalite kontrol sistemlerinden maliyet analizine kadar geniş bir yelpazede uzman desteği alabilirsiniz. Müşterilerimizin ihtiyaçlarına özel çözümler geliştirerek, üretim verimliliğini artırır ve operasyonel maliyetleri düşürürüz. Sektördeki yıllarca birikimimiz ve güncel teknoloji bilgimizle, işletmenizin rekabet gücünü artıracak stratejik öneriler sunuyoruz.",
      features: [
        "Teknik proje danışmanlığı ve planlama",
        "Malzeme seçimi ve optimizasyon",
        "Üretim süreç geliştirme",
        "Kalite kontrol sistem tasarımı",
        "Maliyet analizi ve verimlilik artırma",
        "Teknoloji transfer ve uygulama desteği"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Kaynak Hizmetleri",
      description: "Profesyonel kaynak işleri ve özel üretim çözümleri",
      longDescription: "Endüstriyel kaynak alanında geniş kapsamlı hizmetler sunan NamadNanoTech, her türlü kaynak işlemini en yüksek kalite standartlarında gerçekleştirir. Modern ekipmanlarımız ve sertifikalı kaynak operatörlerimizle, ince işçilikten ağır sanayi uygulamalarına kadar her projeyi başarıyla tamamlıyoruz. TIG, MIG/MAG, ark kaynağı ve özel kaynak teknikleri konusunda uzmanız. Paslanmaz çelik, karbon çelik, alüminyum ve özel alaşımlar üzerinde çalışma kabiliyetimiz bulunmaktadır. Prototip üretiminden seri üretime, onarım işlerinden özel tasarım projelerine kadar tüm ihtiyaçlarınıza cevap veriyoruz. Kalite kontrol süreçlerimiz ve test prosedürlerimizle, her işin mükemmel sonuçlanmasını garanti ediyoruz.",
      features: [
        "TIG, MIG/MAG ve ark kaynak işlemleri",
        "Paslanmaz çelik ve özel alaşım kaynağı",
        "Prototip ve özel tasarım üretimi",
        "Seri üretim ve onarım hizmetleri",
        "Kalite kontrol ve test işlemleri",
        "Sertifikalı kaynak operatörleri"
      ],
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg",
      icon: <Cog className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Symbol Akademi",
      description: "Kaynak teknolojileri ve endüstriyel beceri geliştirme eğitimleri",
      longDescription: "Symbol Akademi, NamadNanoTech'in eğitim kolu olarak kaynak teknolojileri ve endüstriyel üretim alanında kapsamlı eğitim programları sunar. Teorik bilgi ile pratik uygulamayı harmanlayan eğitim metodolojimizle, sektörün ihtiyaç duyduğu nitelikli işgücünü yetiştiriyoruz. Temel kaynak eğitimlerinden ileri seviye uzmanlık kurslarına, güvenlik eğitimlerinden kalite kontrol programlarına kadar geniş bir eğitim yelpazesi sunuyoruz. Sertifikalı eğitmenlerimiz ve modern atölye imkanlarımızla, katılımcılarımıza sektörde geçerli sertifikalar kazandırıyoruz. Bireysel eğitimlerden kurumsal eğitim paketlerine, online eğitimlerden uygulamalı atölye çalışmalarına kadar farklı format seçenekleri mevcuttur. Sürekli güncellenen müfredatımızla, sektördeki en son gelişmeleri takip ediyoruz.",
      features: [
        "Temel ve ileri seviye kaynak eğitimleri",
        "Uygulamalı laboratuvar çalışmaları",
        "Güvenlik ve kalite kontrol eğitimleri",
        "Sertifikalı eğitim programları",
        "Kurumsal eğitim çözümleri",
        "Online ve yüz yüze eğitim seçenekleri"
      ],
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İhtiyaç Analizi",
      description: "Projenizi detaylı analiz ederek en uygun çözümü belirleriz"
    },
    {
      step: "02",
      title: "Planlama",
      description: "Zaman çizelgesi ve kaynak planlaması yaparak stratejimizi oluştururuz"
    },
    {
      step: "03",
      title: "Geliştirme",
      description: "Uzman ekibimizle çözümünüzü geliştirip test ederiz"
    },
    {
      step: "04",
      title: "Uygulama",
      description: "Çözümünüzü hayata geçirir ve sürekli destek sağlarız"
    }
  ];

  const stats = [
    { number: "100+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "15+", label: "Uzman Ekip" },
    { number: "99%", label: "Müşteri Memnuniyeti" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Danışmanlık ve <span className="text-blue-300">İnovasyon Hizmetleri</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Nanoteknoloji alanındaki uzmanlığımızla projenizin başarısını garanti altına alıyoruz
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Profesyonel <span className="text-blue-800">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kaynak teknolojileri ve endüstriyel üretim alanında kapsamlı hizmet portföyümüzle projelerinizi hayata geçirin
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-blue-800 mb-4 font-medium">
                      {service.description}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Hizmet Kapsamı:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300">
                      Teklif Al
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmet <span className="text-blue-800">Sürecimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimize en iyi hizmeti sunmak için izlediğimiz sistematik süreç
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Neden <span className="text-blue-300">Bizi Tercih Etmelisiniz?</span>
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Kaynak teknolojileri ve endüstriyel üretim alanındaki derin uzmanlığımız ve deneyimimizle projelerinizi 
                en üst düzeyde başarıya ulaştırıyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Uzman Ekip</h4>
                    <p className="text-blue-100 text-sm">Sertifikalı kaynak uzmanları</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Hızlı Teslimat</h4>
                    <p className="text-blue-100 text-sm">Zamanında ve kaliteli hizmet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Kalite Garantisi</h4>
                    <p className="text-blue-100 text-sm">Uluslararası kalite standartları</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Sürekli Destek</h4>
                    <p className="text-blue-100 text-sm">Proje sonrası teknik destek</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                alt="Kaynak Atölyesi" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hizmetlerimizden Yararlanmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Uzman ekibimizle iletişime geçin ve projelerinizi en yüksek kalite standartlarında hayata geçirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Hizmet Talebi Oluştur
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300"
            >
              Ürünleri İncele
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;