import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import MainLayout from '../layouts/MainLayout'

const PrivacyPage = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  useScrollToTop()

  return (
    <MainLayout>
      <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mb-12 flex items-center text-gray-400 hover:text-white transition-colors group"
            whileHover={{ x: -10 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'tr' ? 'Ana Sayfa' : 'Home'}
          </motion.button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-thin text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {language === 'tr'
                ? 'Son güncelleme: 26 Eylül 2025'
                : 'Last updated: September 26, 2025'
              }
            </motion.p>
          </motion.div>

          {/* Privacy Policy Content */}
          <div className="space-y-12">
            {language === 'tr' ? (
              <>
                {/* Turkish Content */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">1. Giriş</h2>
                  <p className="text-gray-300 leading-relaxed">
                    WaveArc ("Şirket", "biz", "bizim" veya "bize") olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz. Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat kapsamında, kişisel verilerinizin nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">2. Veri Sorumlusu</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    KVKK kapsamında veri sorumlusu WaveArc'dır.
                  </p>
                  <div className="text-gray-300">
                    <p><strong>İletişim Bilgileri:</strong></p>
                    <p>E-posta: contact@wavearc.com</p>
                    <p>Adres: Türkiye</p>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">3. Toplanan Kişisel Veriler</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda aşağıdaki kişisel verileriniz toplanabilir:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Kimlik bilgileri (ad, soyad)</li>
                    <li>İletişim bilgileri (e-posta adresi, telefon numarası)</li>
                    <li>Teknik veriler (IP adresi, tarayıcı bilgileri, cihaz bilgileri)</li>
                    <li>Kullanım verileri (site içi aktiviteler, sayfa görüntülemeleri)</li>
                    <li>Çerez ve benzeri teknolojilerle toplanan veriler</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">4. Kişisel Verilerin İşlenme Amaçları</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Hizmetlerimizi sunmak ve geliştirmek</li>
                    <li>Müşteri talep ve şikayetlerini değerlendirmek</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>İletişim faaliyetlerinin yürütülmesi</li>
                    <li>Web sitesi güvenliğinin sağlanması</li>
                    <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">5. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    KVKK'nın 5. maddesi uyarınca kişisel verileriniz aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Açık rızanızın bulunması</li>
                    <li>Sözleşmenin kurulması veya ifasının gerekli olması</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>Meşru menfaatlerimizin gerektirmesi</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">6. KVKK Kapsamındaki Haklarınız</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınız bulunmaktadır:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                    <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                    <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                    <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                    <li>Düzeltme, silme ve yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">7. Çerezler (Cookies)</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek amacıyla çerezler kullanmaktadır. Çerez kullanımımız hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz. Çerez tercihlerinizi tarayıcınız aracılığıyla yönetebilirsiniz.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">8. Veri Güvenliği</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri almaktayız. Verileriniz şifreleme teknolojileri ile korunmakta ve yetkisiz erişimlere karşı güvenlik önlemleri uygulanmaktadır.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">9. İletişim</h2>
                  <p className="text-gray-300 leading-relaxed">
                    KVKK kapsamındaki haklarınızı kullanmak veya gizlilik politikamız hakkında sorularınız için contact@wavearc.com adresinden bizimle iletişime geçebilirsiniz.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">10. Politika Güncellemeleri</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Bu Gizlilik Politikası, yasal değişiklikler ve iş süreçlerindeki güncellemeler doğrultusunda revize edilebilir. Önemli değişiklikler web sitemizde yayınlanacak ve gerekli hallerde size bildirilecektir.
                  </p>
                </motion.section>
              </>
            ) : (
              <>
                {/* English Content */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">1. Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    WaveArc ("Company", "we", "us" or "our") places great importance on protecting your personal data. This Privacy Policy explains how your personal data is collected, processed, stored, and protected under the Personal Data Protection Law No. 6698 (KVKK) and related legislation.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">2. Data Controller</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Under KVKK, the data controller is WaveArc.
                  </p>
                  <div className="text-gray-300">
                    <p><strong>Contact Information:</strong></p>
                    <p>Email: contact@wavearc.com</p>
                    <p>Address: Turkey</p>
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">3. Personal Data Collected</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    When you visit our website and use our services, the following personal data may be collected:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Identity information (name, surname)</li>
                    <li>Contact information (email address, phone number)</li>
                    <li>Technical data (IP address, browser information, device information)</li>
                    <li>Usage data (in-site activities, page views)</li>
                    <li>Data collected through cookies and similar technologies</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">4. Purposes of Processing Personal Data</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your personal data is processed for the following purposes:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Providing and improving our services</li>
                    <li>Evaluating customer requests and complaints</li>
                    <li>Fulfilling legal obligations</li>
                    <li>Conducting communication activities</li>
                    <li>Ensuring website security</li>
                    <li>Improving user experience</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">5. Legal Basis for Processing Personal Data</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In accordance with Article 5 of KVKK, your personal data is processed based on the following legal grounds:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Your explicit consent</li>
                    <li>Necessity for the establishment or performance of a contract</li>
                    <li>Fulfillment of legal obligations</li>
                    <li>Requirement of our legitimate interests</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">6. Your Rights Under KVKK</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In accordance with Article 11 of KVKK, you have the following rights:
                  </p>
                  <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                    <li>Learning whether your personal data is being processed</li>
                    <li>Requesting information if your personal data has been processed</li>
                    <li>Learning the purpose of processing your personal data and whether they are used appropriately</li>
                    <li>Knowing the third parties to whom your personal data is transferred domestically or abroad</li>
                    <li>Requesting correction of your personal data if processed incompletely or incorrectly</li>
                    <li>Requesting deletion or destruction of your personal data</li>
                    <li>Requesting notification of correction, deletion and destruction operations to third parties</li>
                    <li>Objecting to adverse results arising from automated analysis of processed data</li>
                    <li>Requesting compensation for damages caused by unlawful processing of personal data</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">7. Cookies</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website uses cookies to improve user experience and analyze site performance. For detailed information about our cookie usage, you can review our Cookie Policy. You can manage your cookie preferences through your browser.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">8. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We take necessary technical and administrative measures to ensure the security of your personal data. Your data is protected with encryption technologies and security measures are applied against unauthorized access.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">9. Contact</h2>
                  <p className="text-gray-300 leading-relaxed">
                    To exercise your rights under KVKK or for questions about our privacy policy, you can contact us at contact@wavearc.com.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-thin text-white mb-6">10. Policy Updates</h2>
                  <p className="text-gray-300 leading-relaxed">
                    This Privacy Policy may be revised in line with legal changes and updates in business processes. Significant changes will be published on our website and will be notified to you when necessary.
                  </p>
                </motion.section>
              </>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default PrivacyPage