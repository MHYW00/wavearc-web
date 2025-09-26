import MainLayout from '../layouts/MainLayout'

const Brands = () => {
  return (
    <MainLayout>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
            Our Brands
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of innovative brands and solutions.
          </p>
        </div>
      </section>
    </MainLayout>
  )
}

export default Brands