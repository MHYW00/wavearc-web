import MainLayout from '../layouts/MainLayout'
import { useTranslation } from 'react-i18next'

const CaseStudies = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
            {t('nav.caseStudies')}
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and client testimonials.
          </p>
        </div>
      </section>
    </MainLayout>
  )
}

export default CaseStudies