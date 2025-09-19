import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Nanoteknoloji Alanında Yeni Atılım: Kuantum Noktalar ile Kanser Tedavisi",
      excerpt: "NamadNanoTech araştırmacıları, kuantum noktalar kullanarak kanser hücrelerini hedefleyen yeni bir tedavi yöntemi geliştirdi. Bu yenilikçi yaklaşım, geleneksel kemoterapi yöntemlerine göre %80 daha etkili sonuçlar gösteriyor.",
      content: "Nanoteknoloji alanındaki son gelişmeler, tıp dünyasında devrim niteliğinde değişikliklere yol açıyor. NamadNanoTech'in geliştirdiği kuantum nokta teknolojisi, kanser hücrelerini seçici olarak hedefleyerek sağlıklı dokulara zarar vermeden tedavi imkanı sunuyor. Bu teknoloji, özellikle erken evre kanser vakalarında umut verici sonuçlar göstermektedir.",
      date: "2025-01-15",
      author: "Dr. Mehdi Ahmadi",
      category: "Araştırma",
      image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
      readTime: "5 dk"
    },
    {
      id: 2,
      title: "Akıllı Nano Malzemeler ile Enerji Depolama Kapasitesi %300 Arttı",
      excerpt: "Şirketimizin geliştirdiği yeni nesil akıllı nano malzemeler, geleneksel batarya teknolojilerine kıyasla üç kat daha fazla enerji depolama kapasitesi sunuyor. Bu gelişme, elektrikli araç endüstrisinde çığır açacak.",
      content: "Enerji depolama teknolojilerinde yaşanan bu büyük atılım, elektrikli araçların menzil problemini çözmeye yönelik önemli bir adım. NamadNanoTech'in geliştirdiği nano yapılı elektrot malzemeleri, şarj süresini %70 azaltırken, batarya ömrünü iki katına çıkarıyor.",
      date: "2025-01-12",
      author: "Prof. Dr. Sara Hosseini",
      category: "İnovasyon",
      image: "https://images.pexels.com/photos/159298/science-chemistry-lab-laboratory-159298.jpeg",
      readTime: "4 dk"
    },
    {
      id: 3,
      title: "Nano Yüzey Kaplamaları Hastane Enfeksiyonlarını %95 Azalttı",
      excerpt: "NamadNanoTech'in antibakteriyel nano kaplama teknolojisi, hastane ortamlarında test edildi. Sonuçlar, enfeksiyon oranlarında dramatik düşüş gösterdi ve hasta güvenliğinde yeni bir standart oluşturdu.",
      content: "Hastane kaynaklı enfeksiyonlar, dünya genelinde önemli bir sağlık sorunu. NamadNanoTech'in geliştirdiği gümüş nanopartikül içeren yüzey kaplamaları, bakterileri %99.9 oranında etkisiz hale getiriyor. Bu teknoloji, ameliyathane ekipmanlarından hasta yataklarına kadar geniş bir kullanım alanına sahip.",
      date: "2025-01-10",
      author: "Dr. Reza Karimi",
      category: "Sağlık",
      image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
      readTime: "6 dk"
    },
    {
      id: 4,
      title: "Çevre Dostu Nano Filtreler Su Kirliliğine Çözüm Sunuyor",
      excerpt: "Şirketimizin yeni geliştirdiği nano filtre teknolojisi, endüstriyel atık sulardaki ağır metalleri %99.8 oranında temizliyor. Bu çevre dostu çözüm, su kaynaklarının korunmasında önemli rol oynayacak.",
      content: "Su kirliliği, küresel çevre sorunlarının başında geliyor. NamadNanoTech'in grafene dayalı nano filtre sistemi, geleneksel arıtma yöntemlerine göre 10 kat daha etkili. Sistem, düşük enerji tüketimiyle çalışırken, filtre ömrü de geleneksel sistemlerin 5 katı.",
      date: "2025-01-08",
      author: "Dr. Maryam Nazari",
      category: "Çevre",
      image: "https://images.pexels.com/photos/3825882/pexels-photo-3825882.jpeg",
      readTime: "4 dk"
    },
    {
      id: 5,
      title: "Nano Sensörler ile Erken Hastalık Teşhisi Mümkün Hale Geldi",
      excerpt: "NamadNanoTech'in geliştirdiği ultra hassas nano sensörler, kan damlasından 15 farklı hastalığı erken aşamada tespit edebiliyor. Bu teknoloji, önleyici tıp alanında devrim yaratacak.",
      content: "Erken teşhis, birçok hastalığın başarılı tedavisinin anahtarı. Şirketimizin nano boyutlardaki biyosensörleri, hastalık belirteçlerini moleküler düzeyde algılayabiliyor. Bu teknoloji, özellikle kanser, kalp hastalıkları ve diyabet gibi kronik hastalıkların erken teşhisinde çığır açıyor.",
      date: "2025-01-05",
      author: "Prof. Dr. Ali Mohammadi",
      category: "Teknoloji",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      readTime: "5 dk"
    },
    {
      id: 6,
      title: "Savunma Sanayii için Süper Güçlü Nano Kompozit Malzemeler",
      excerpt: "Askeri uygulamalar için geliştirilen yeni nano kompozit malzemeler, çelikten 5 kat daha güçlü ancak %60 daha hafif. Bu malzemeler, zırh teknolojilerinde yeni bir çağ başlatıyor.",
      content: "Savunma sanayiinde malzeme teknolojisi kritik öneme sahip. NamadNanoTech'in karbon nanotüp takviyeli kompozit malzemeleri, yüksek darbe dayanımı ve hafiflik özelliklerini bir araya getiriyor. Bu malzemeler, askeri araçlardan koruyucu ekipmanlara kadar geniş kullanım alanı buluyor.",
      date: "2025-01-03",
      author: "Dr. Hassan Rahmani",
      category: "Savunma",
      image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg",
      readTime: "6 dk"
    }
  ];

  const categories = ["Tümü", "Araştırma", "İnovasyon", "Sağlık", "Çevre", "Teknoloji", "Savunma"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tümü");

  const filteredArticles = selectedCategory === "Tümü" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles[0];
  const regularArticles = newsArticles.slice(1);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Haberler ve <span className="text-blue-300">Gelişmeler</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Nanoteknoloji dünyasındaki en son gelişmeler, araştırma sonuçları ve şirket haberlerimizi takip edin
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Öne Çıkan Haber
            </h2>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticle.category}
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(featuredArticle.date).toLocaleDateString('tr-TR')}</span>
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <button className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors duration-200">
                    Devamını Oku
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(article.date).toLocaleDateString('tr-TR')}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <button className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900 transition-colors duration-200">
                      Oku
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Haberlerimizi Kaçırmayın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Nanoteknoloji alanındaki en son gelişmeleri ve şirket haberlerimizi e-posta ile alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;