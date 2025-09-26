import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useScrollToTop } from '../hooks/useScrollToTop'
import MainLayout from '../layouts/MainLayout'
import { useState } from 'react'

const ContactPage = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
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
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-thin text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {language === 'tr'
                ? 'Projeleriniz için bizimle iletişime geçin. Fikirlerinizi gerçeğe dönüştürmek için buradayız.'
                : 'Contact us for your projects. We are here to turn your ideas into reality.'
              }
            </motion.p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-thin text-white">Email</h3>
                </div>
                <p className="text-gray-300">contact@wavearc.com</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-thin text-white">
                    {language === 'tr' ? 'Lokasyon' : 'Location'}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {language === 'tr' ? 'Türkiye' : 'Turkey'}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-white mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-thin text-white">
                    {language === 'tr' ? 'Çalışma Saatleri' : 'Working Hours'}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {language === 'tr' ? 'Pazartesi - Cuma: 09:00 - 18:00' : 'Monday - Friday: 09:00 - 18:00'}
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-thin text-white mb-6">
                {language === 'tr' ? 'Mesaj Gönderin' : 'Send Message'}
              </h3>

              <form
                action="https://formspree.io/f/xwpkvvbd"
                method="POST"
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault()
                  setIsSubmitting(true)
                  setSubmitStatus('idle')

                  try {
                    const response = await fetch('https://formspree.io/f/xwpkvvbd', {
                      method: 'POST',
                      body: new FormData(e.target as HTMLFormElement),
                      headers: {
                        'Accept': 'application/json'
                      }
                    })

                    if (response.ok) {
                      setSubmitStatus('success')
                      ;(e.target as HTMLFormElement).reset()
                    } else {
                      throw new Error('Form submission failed')
                    }
                  } catch (error) {
                    console.error('Form submission error:', error)
                    setSubmitStatus('error')

                    // Fallback to mailto
                    const formData = new FormData(e.target as HTMLFormElement)
                    const name = formData.get('name') as string
                    const email = formData.get('email') as string
                    const subject = formData.get('subject') as string
                    const message = formData.get('message') as string

                    const mailtoLink = `mailto:mete@wavearc.co?subject=${encodeURIComponent(subject || 'Website Contact')}&body=${encodeURIComponent(
                      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                    )}`
                    window.open(mailtoLink, '_blank')
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder={language === 'tr' ? 'Adınız' : 'Your Name'}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    name="_replyto"
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    name="_subject"
                    type="text"
                    placeholder={language === 'tr' ? 'Konu' : 'Subject'}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={language === 'tr' ? 'Mesajınız' : 'Your Message'}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Formspree hidden fields */}
                <input type="hidden" name="_next" value="/" />
                <input type="hidden" name="_captcha" value="false" />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting
                    ? (language === 'tr' ? 'Gönderiliyor...' : 'Sending...')
                    : (language === 'tr' ? 'Mesaj Gönder' : 'Send Message')
                  }
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm"
                  >
                    {language === 'tr'
                      ? '✅ Mesajınız başarıyla gönderildi!'
                      : '✅ Message sent successfully!'
                    }
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-yellow-400 text-center text-sm"
                  >
                    {language === 'tr'
                      ? '⚠️ Mail uygulamanız açılacak'
                      : '⚠️ Your mail app will open'
                    }
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10"
          >
            <h2 className="text-3xl sm:text-4xl font-thin text-white mb-6">
              {language === 'tr' ? 'Projelerinizi Konuşalım' : 'Let\'s Discuss Your Projects'}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Her türlü proje için açığız. Küçük bir web sitesinden büyük kurumsal çözümlere kadar.'
                : 'We are open to all kinds of projects. From small websites to large enterprise solutions.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200 text-sm">
                {language === 'tr' ? 'Web Geliştirme' : 'Web Development'}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200 text-sm">
                {language === 'tr' ? 'Mobil Uygulamalar' : 'Mobile Apps'}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200 text-sm">
                {language === 'tr' ? 'UI/UX Tasarım' : 'UI/UX Design'}
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200 text-sm">
                {language === 'tr' ? 'Danışmanlık' : 'Consulting'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}

export default ContactPage