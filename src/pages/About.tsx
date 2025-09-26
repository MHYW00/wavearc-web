import MainLayout from '../layouts/MainLayout'

const About = () => {

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-thin text-white mb-8 leading-tight">
            Transforming Enterprises
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Since 2018
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            WaveArc is a global technology consulting firm specializing in enterprise-grade
            digital transformation solutions. We've helped 500+ companies across 40 countries
            achieve measurable business outcomes through innovative technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-thin text-white mb-2">2018</div>
              <div className="text-sm text-gray-500">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-thin text-white mb-2">500+</div>
              <div className="text-sm text-gray-500">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-thin text-white mb-2">40+</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-thin text-white mb-2">$2.5B+</div>
              <div className="text-sm text-gray-500">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                To empower enterprises with cutting-edge technology solutions that drive
                sustainable growth, operational efficiency, and competitive advantage in
                the digital economy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Innovation First</h3>
                    <p className="text-gray-400 font-light">Leading-edge solutions built on proven enterprise frameworks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Global Scale</h3>
                    <p className="text-gray-400 font-light">Multi-region expertise with local market understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Results Driven</h3>
                    <p className="text-gray-400 font-light">Measurable outcomes with guaranteed ROI commitments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-medium text-white mb-6">By The Numbers</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Client Retention Rate</span>
                  <span className="text-white font-medium">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Average Project ROI</span>
                  <span className="text-white font-medium">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Implementation Success Rate</span>
                  <span className="text-white font-medium">99.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Global Team Members</span>
                  <span className="text-white font-medium">200+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto mb-16">
            Industry veterans with decades of experience in enterprise technology
            and digital transformation.
          </p>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <span className="text-sm text-blue-300 font-medium">
                Combined 100+ Years of Enterprise Experience
              </span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default About