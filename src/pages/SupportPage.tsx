import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import MainLayout from '../layouts/MainLayout'

const SupportPage = () => {
  const { language } = useLanguage()
  useScrollToTop()

  return (
    <MainLayout>
      <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-thin text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'tr' ? 'Destek' : 'Support'}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {language === 'tr'
                ? 'Size yardımcı olmak için buradayız. Sorularınız ve destek talepleriniz için aşağıdaki bilgileri kullanabilirsiniz.'
                : 'We are here to help you. You can use the information below for your questions and support requests.'
              }
            </motion.p>
          </motion.div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* General Support */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                </svg>
                <h3 className="text-2xl font-thin text-white">
                  {language === 'tr' ? 'Genel Destek' : 'General Support'}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {language === 'tr'
                  ? 'Genel sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.'
                  : 'Contact us for general questions, suggestions or feedback.'
                }
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span> mete@wavearc.co
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">{language === 'tr' ? 'Yanıt Süresi:' : 'Response Time:'}</span>{' '}
                  {language === 'tr' ? '24 saat içinde' : 'Within 24 hours'}
                </p>
              </div>
            </motion.div>

            {/* Technical Support */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-2xl font-thin text-white">
                  {language === 'tr' ? 'Teknik Destek' : 'Technical Support'}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                {language === 'tr'
                  ? 'Uygulama kullanımı, teknik sorunlar ve hata raporları için iletişime geçin.'
                  : 'Contact us for app usage, technical issues and bug reports.'
                }
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span> mete@wavearc.co
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">{language === 'tr' ? 'Yanıt Süresi:' : 'Response Time:'}</span>{' '}
                  {language === 'tr' ? '12 saat içinde' : 'Within 12 hours'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-thin text-white text-center mb-12">
              {language === 'tr' ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: language === 'tr' ? 'Nasıl destek alabilirim?' : 'How can I get support?',
                  answer: language === 'tr'
                    ? 'Yukarıdaki email adresinden bizimle iletişime geçebilirsiniz. Hem genel sorular hem teknik konular için mete@wavearc.co adresini kullanın.'
                    : 'You can contact us using the email address above. Use mete@wavearc.co for both general questions and technical issues.'
                },
                {
                  question: language === 'tr' ? 'Ne kadar sürede yanıt alırım?' : 'How quickly will I receive a response?',
                  answer: language === 'tr'
                    ? 'Genel destek sorularına 24 saat içinde, teknik destek sorularına 12 saat içinde yanıt vermeye çalışıyoruz.'
                    : 'We aim to respond to general support questions within 24 hours and technical support questions within 12 hours.'
                },
                {
                  question: language === 'tr' ? 'Hangi bilgileri paylaşmalıyım?' : 'What information should I share?',
                  answer: language === 'tr'
                    ? 'Sorununuzu detaylı olarak açıklayın. Teknik sorunlar için cihaz modelinizi, işletim sistemi sürümünü ve uygulama sürümünü belirtmeyi unutmayın.'
                    : 'Please describe your issue in detail. For technical problems, don\'t forget to mention your device model, operating system version and app version.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-thin text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-thin text-white mb-6">
              {language === 'tr' ? 'Hâlâ Yardıma İhtiyacınız Var mı?' : 'Still Need Help?'}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Sorularınızın yanıtını bulamadıysanız, bizimle doğrudan iletişime geçmekten çekinmeyin.'
                : 'If you couldn\'t find the answer to your questions, don\'t hesitate to contact us directly.'
              }
            </p>
            <motion.a
              href="mailto:mete@wavearc.co"
              className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'tr' ? 'İletişime Geç' : 'Contact Us'}
            </motion.a>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  )
}

export default SupportPage