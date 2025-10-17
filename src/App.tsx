import { ArrowRight, Package, Globe2, TrendingUp, Leaf, Settings, Mail, MapPin, CheckCircle2, Users, Sparkles, BarChart3, Award, Ship } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">DAF-AGRO</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition font-medium">Services</a>
            <a href="#vision" className="text-gray-700 hover:text-emerald-600 transition font-medium">Vision</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition font-medium">Contact</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
            Get in Touch
          </a>
        </nav>
      </header>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(5 150 105) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Uganda Investment Authority Recognized</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                Bridging Global Supply Chains with <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Ugandan Agriculture</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A leading agribusiness integrator based in Kampala, specializing in import-export operations, agricultural machinery, and quality produce trading across East Africa and international markets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-bold">
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 hover:scale-105 transition-all duration-300 text-lg font-bold">
                  Contact Us
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Shipments</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Agricultural field"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Growing Together</h3>
                  <p className="text-white/90">Connecting farms to global markets</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Ship className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Global</div>
                    <div className="text-sm text-gray-600">Trade Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Agricultural machinery"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Spices"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Farming"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="https://images.pexels.com/photos/4505898/pexels-photo-4505898.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Warehouse"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">About</span> DAF-AGRO LIMITED
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A privately held agribusiness and trading company recognized by Uganda Investment Authority, operating at the intersection of local agriculture and global markets.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-emerald-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Globe2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Import & Export Excellence</h3>
                    <p className="text-gray-600">Dual trade capability connecting Ugandan markets with global suppliers and buyers across regional and international markets.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Settings className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Machinery Solutions</h3>
                    <p className="text-gray-600">Sourcing and supplying agricultural machinery, printing components, and processing equipment to enhance productivity.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-teal-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Package className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Agricultural Products</h3>
                    <p className="text-gray-600">Trading in quality agricultural commodities including dry split ginger and other produce for domestic and export markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px'}}></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-center">Our Competitive Advantages</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <MapPin className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-2">Strategic Location</h4>
                    <p className="text-emerald-50">Kampala's commercial hub</p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-2">Established Network</h4>
                    <p className="text-emerald-50">International partnerships</p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-2">Dual Trade Capability</h4>
                    <p className="text-emerald-50">Import-export flexibility</p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-2">Diverse Portfolio</h4>
                    <p className="text-emerald-50">Comprehensive solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full mb-4">
              <span className="text-emerald-700 font-semibold text-sm">WHAT WE DO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across the agricultural value chain, powered by expertise and global connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4246209/pexels-photo-4246209.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Import operations"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Import Operations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sourcing high-quality agricultural inputs, machinery parts, printing components, and processing equipment from international suppliers including India and other global markets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Agricultural machinery & equipment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Processing equipment & spare parts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Agricultural commodities & inputs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3856428/pexels-photo-3856428.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Export operations"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Globe2 className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Export Operations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Facilitating export pathways for quality Ugandan agricultural produce to international markets, ensuring compliance with phytosanitary and quality standards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quality agricultural produce</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Compliance & quality assurance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">International market access</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Agro-processing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Leaf className="w-8 h-8 text-teal-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agro-Processing Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recognized by Uganda Investment Authority as an agro-processing entity, we provide comprehensive support to strengthen the agricultural value chain.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Processing equipment supply</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Value chain integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Technical support & consulting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-10">
                <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Partnership development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Building sustainable partnerships across the value chain from smallholder farmers to global buyers, strengthening Uganda's agricultural competitiveness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Supplier network development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Market linkage facilitation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Trade relationship management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Agricultural landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-emerald-900/90"></div>
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-emerald-300 font-semibold text-sm">OUR PURPOSE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-gray-100 text-lg leading-relaxed">
                To be a leading agribusiness integrator in East Africa, bridging global supply chains with local farms, delivering quality inputs, machinery, and export solutions to strengthen Uganda's agricultural competitiveness.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
              <ul className="space-y-4 text-gray-100">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Source high-quality agricultural and machinery inputs for farmers and processors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Facilitate export pathways for Ugandan produce to international markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Maintain robust standards in logistics, quality assurance, and compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>Build sustainable partnerships from smallholders to global buyers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full mb-4">
              <span className="text-emerald-700 font-semibold text-sm">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Ready to explore import-export solutions, partnerships, and agricultural trading opportunities?
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 relative overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Kampala cityscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 to-green-700/95"></div>
                </div>

                <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 group">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all">
                          <MapPin className="w-6 h-6 text-white flex-shrink-0" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-lg">Address</h4>
                          <p className="text-emerald-50 leading-relaxed">
                            Plot 1122, Sir Apollo Kaggwa Road<br />
                            Babu House, Opposite MBI, Plot 268<br />
                            Kampala, Uganda
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all">
                          <Mail className="w-6 h-6 text-white flex-shrink-0" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1 text-lg">Email</h4>
                          <a href="mailto:dafagroltd@gmail.com" className="text-emerald-50 hover:text-white transition text-lg">
                            dafagroltd@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-10 border-t border-white/20">
                    <p className="text-emerald-50 text-sm leading-relaxed">
                      DAF-AGRO LIMITED is a registered agribusiness entity recognized by the Uganda Investment Authority and listed in business intelligence directories.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-10 lg:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-lg"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-lg"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none text-lg"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-5 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl">
                <Leaf className="text-white w-8 h-8" />
              </div>
              <span className="text-3xl font-bold text-white">DAF-AGRO LIMITED</span>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl">
              Bridging Global Supply Chains with Ugandan Agriculture
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <a href="#about" className="hover:text-emerald-400 transition">About</a>
              <span>•</span>
              <a href="#services" className="hover:text-emerald-400 transition">Services</a>
              <span>•</span>
              <a href="#vision" className="hover:text-emerald-400 transition">Vision</a>
              <span>•</span>
              <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
            </div>

            <div className="pt-8 border-t border-gray-700 w-full max-w-4xl">
              <p className="text-gray-400 text-sm">
                Plot 1122, Sir Apollo Kaggwa Road, Kampala, Uganda
              </p>
              <p className="text-gray-500 text-sm mt-4">
                © 2024 DAF-AGRO LIMITED. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
