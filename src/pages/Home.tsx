import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Lightbulb, Users, Award, Target } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "İnovatif Teknoloji",
      description: "En son nanoteknoloji gelişmelerini kullanarak çözümler üretiyoruz"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Güvenilir Çözümler",
      description: "Endüstri standardlarında güvenli ve sürdürülebilir teknolojiler"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Uzman Ekip",
      description: "Alanında uzman, deneyimli mühendis ve araştırmacılardan oluşan takım"
    }
  ];

  const services = [
    {
      title: "Nano Yüzey Kaplamalar",
      description: "Tıbbi ve endüstriyel kullanım için gelişmiş nano kaplama çözümleri",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg"
    },
    {
      title: "Kuantum Sensörler",
      description: "Kuantum tabanlı ultra hassas algılama sistemleri",
      image: "https://images.pexels.com/photos/159298/science-chemistry-lab-laboratory-159298.jpeg"
    },
    {
      title: "Akıllı Nano Malzemeler",
      description: "Enerji, sağlık ve savunma uygulamaları için uyarlanabilir malzemeler",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3825882/pexels-photo-3825882.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                NamadNanoTech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Nano-Hassasiyetle Geleceği Şekillendiriyoruz
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nanoteknoloji alanında yüksek katma değerli çözümler sunan öncü teknoloji firması olarak, 
              bilimi gerçek dünya uygulamalarına dönüştürüyor ve geleceğin teknolojilerini bugüne taşıyoruz.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Çözümlerimizi Keşfedin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <div className="mt-8">
              <Link
                to="/news"
                className="inline-flex items-center text-blue-200 hover:text-white font-medium transition-colors duration-200"
              >
                Son Haberlerimizi İnceleyin
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-2 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden <span className="text-blue-800">NamadNanoTech?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nanoteknoloji alanında öncü çözümlerimizle endüstriyel dönüşümün lideri oluyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ürün ve <span className="text-blue-800">Çözümlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İleri nanoteknoloji ürünlerimiz ile endüstrilerin geleceğini şekillendiriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium"
                  >
                    Detayları Gör
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Tüm Ürünleri Görüntüle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Hakkımızda
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                NamadNanoTech, nanoteknoloji alanında yüksek katma değerli çözümler sunan öncü bir teknoloji firmasıdır. 
                Araştırma ve geliştirme odaklı yaklaşımımızla, endüstriyel uygulamalardan tıbbi teknolojilere kadar 
                geniş bir yelpazede inovatif çözümler üretiyoruz.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Uzman ekibimiz, en son teknolojik gelişmeleri takip ederek müşterilerimize özelleştirilmiş, 
                yüksek performanslı nanoteknoloji ürünleri sunmaktadır.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">50+</div>
                  <div className="text-sm text-blue-200">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">15+</div>
                  <div className="text-sm text-blue-200">Uzman Araştırmacı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">5+</div>
                  <div className="text-sm text-blue-200">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
                alt="Nanoteknoloji Araştırma" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;