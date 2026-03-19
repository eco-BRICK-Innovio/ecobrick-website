import React, { useState } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Recycle, 
  ShieldCheck, 
  BarChart3, 
  Target, 
  Droplets, 
  Factory,
  ArrowRight,
  ChevronRight,
  Info,
  Leaf,
  Layers,
  Zap,
  AlertCircle,
  Globe,
  Clock,
  Lightbulb
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Financial data based on 5-unit budget analysis
  const financials = [
    { year: 'Year 1', rev: 14.28, profit: 8.77, margin: 61, cash: 8.23 },
    { year: 'Year 2', rev: 21.42, profit: 15.01, margin: 70, cash: 22.24 },
    { year: 'Year 3', rev: 21.42, profit: 15.01, margin: 70, cash: 36.23 },
    { year: 'Year 4', rev: 21.42, profit: 15.01, margin: 70, cash: 50.23 },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 pb-12 text-left" dir="ltr">
      {/* Header & Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200">
              <Factory className="text-white w-6 h-6" />
            </div>
            {/* Professional Typographic Logo */}
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-tight leading-none">
                <span className="text-blue-500 font-light">eco</span>
                <span className="text-blue-900 font-black ml-1">BRICK</span>
                <span className="text-blue-600 font-medium italic ml-1">Innovio</span>
              </h1>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Sustainable Infrastructure</span>
            </div>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-full text-sm font-semibold">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-1.5 rounded-full transition-all ${activeTab === 'overview' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >Overview</button>
            <button 
              onClick={() => setActiveTab('strategy')}
              className={`px-6 py-1.5 rounded-full transition-all ${activeTab === 'strategy' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >Strategy</button>
            <button 
              onClick={() => setActiveTab('site')}
              className={`px-6 py-1.5 rounded-full transition-all ${activeTab === 'site' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >Production Site</button>
            <button 
              onClick={() => setActiveTab('financials')}
              className={`px-6 py-1.5 rounded-full transition-all ${activeTab === 'financials' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >ROI</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-8 space-y-8">
        
        {/* Hero Section */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <span className="bg-blue-400/30 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Round A Fundraising</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">Scaling Waste-to-Asset <br/>Infrastructure.</h2>
              <p className="mt-4 text-blue-100 text-lg max-w-xl opacity-90">
                Building the first high-capacity industrial upcycling facility in Israel. Converting 99% waste into construction and infrastructure materials at an industrial scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                  <Target className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-semibold">$10M Round A Target</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-semibold">Israel Strategic Hub</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" /> Scaled Cash Projection
              </h3>
              <div className="text-5xl font-black text-blue-900">50.2M <span className="text-xl font-medium text-slate-400">ILS</span></div>
              <p className="text-sm text-slate-500 mt-2">Projected cumulative liquidity by Year 4 at 100% site capacity.</p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-slate-600">Series A Raise</span>
                <span className="font-bold text-blue-700 font-mono">$10,000,000</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[100%]"></div>
              </div>
              <p className="text-[10px] text-slate-400 uppercase font-bold text-center italic tracking-wider">Fueling Global Expansion & Site Automation</p>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800">70% Gross Margin</h4>
              <p className="text-xs text-slate-500 mt-1">Achieved through negative feedstock costs and high-demand product output.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Layers className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800">High-Yield Site Model</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Optimized facility layout for maximum throughput per square meter. Each unit produces ~6.8 tons/hr (4 cubes/hr), expandable to 10-30 units.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800">Hardox® Durability</h4>
              <p className="text-xs text-slate-500 mt-1">Extreme wear-resistant components ensure 24/7 industrial up-time.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800">ESG Champion</h4>
              <p className="text-xs text-slate-500 mt-1">Diverting 100k+ tons of waste annually from municipal landfills.</p>
            </div>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-2 rounded-lg"><AlertCircle className="text-red-600 w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">The Problem</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                The construction industry faces a dual crisis: a critical shortage of raw materials and skyrocketing landfill fees for industrial waste. Traditional recycling handles less than 30% of construction waste, while the remaining 70% creates a multi-billion dollar liability for governments and private builders.
              </p>
              <div className="mt-6 flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-xl font-bold text-sm">
                <Target className="w-4 h-4" /> 
                Our Fix: Transforming waste from a "taxable liability" into a "high-value infrastructure asset."
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2 rounded-lg"><Globe className="text-blue-600 w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Market Size</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                The global Green Building Materials market is projected to reach <strong>$573.91 Billion by 2030</strong>. 
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm font-medium text-slate-500">Global TAM</span>
                  <span className="text-sm font-bold text-slate-800">$400B+</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm font-medium text-slate-500">Israel's Infrastructure Demand</span>
                  <span className="text-sm font-bold text-slate-800">$2.5B Annual</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-sm font-medium text-slate-500">Waste Management Liability</span>
                  <span className="text-sm font-bold text-slate-800">$100B+ Annually</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-50 p-2 rounded-lg"><Clock className="text-orange-600 w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Why Now?</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <ChevronRight className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Regulatory Pressure:</strong> New "Net-Zero" building mandates in the EU and Israel making traditional materials expensive.</p>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Landfill Scarcity:</strong> Space is running out; gate fees have increased by 200% in the last decade.</p>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <p className="text-sm text-slate-600"><strong>Supply Chain Fragility:</strong> Global disruption has tripled the cost of traditional cement and binders.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-blue-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2 rounded-lg"><Lightbulb className="text-blue-600 w-6 h-6" /></div>
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Technological Edge</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Unlike competitors who use binders to "sparkle" waste, our technology transforms diverse waste into high-quality engineered raw materials.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block">99% Waste Ratio</span>
                  <span className="text-xs text-slate-500 italic">Highest in the industry</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block">Zero-Heat Process</span>
                  <span className="text-xs text-slate-500 italic">90% energy reduction</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block">Hardox® Core</span>
                  <span className="text-xs text-slate-500 italic">Built for silica-heavy waste</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block">Multi-Shape Die</span>
                  <span className="text-xs text-slate-500 italic">Square, Star, Circle</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'site' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Israel Flagship Facility</h3>
                  <p className="text-slate-600 text-sm">A strategic 5,000 sqm industrial hub designed for high industrial production. Each eco BRICK unit produces ~6.8 tons/hr, with infrastructure built for modular expansion to 30 units and more.</p>
                </div>
                
                {/* Visual Site Plan / Layout */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center">
                  <svg viewBox="0 0 600 300" className="w-full h-auto drop-shadow-md">
                    {/* Site Boundary */}
                    <rect x="20" y="20" width="560" height="260" rx="10" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 4" />
                    
                    {/* Processing Building */}
                    <rect x="50" y="50" width="300" height="200" rx="4" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                    <text x="60" y="70" className="text-[12px] font-bold fill-slate-500 uppercase">Production Hall</text>
                    
                    {/* 5 Production Lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                      <g key={i}>
                        <rect x="70" y={85 + (i * 30)} width="120" height="20" rx="2" fill="#3b82f6" opacity={0.6 + (i * 0.1)} />
                        <rect x="200" y={85 + (i * 30)} width="40" height="20" rx="2" fill="#1e3a8a" opacity={0.8} />
                      </g>
                    ))}
                    <text x="70" y="245" className="text-[10px] fill-blue-600 italic">5x Units Initial Deployment (4 cubes/hr each)</text>
                    
                    {/* Scalable Feedstock Silos */}
                    <g>
                      {/* Construction Waste */}
                      <circle cx="410" cy="80" r="25" fill="#94a3b8" stroke="#475569" />
                      <text x="375" y="118" className="text-[7px] font-bold fill-slate-600 uppercase">Construction</text>
                      <text x="390" y="126" className="text-[7px] font-bold fill-slate-600 uppercase">Waste</text>

                      {/* Plastic Waste */}
                      <circle cx="475" cy="80" r="25" fill="#94a3b8" stroke="#475569" />
                      <text x="458" y="118" className="text-[7px] font-bold fill-slate-600 uppercase">Plastic</text>
                      <text x="463" y="126" className="text-[7px] font-bold fill-slate-600 uppercase">Waste</text>

                      {/* eco BRICK binders - 50% smaller */}
                      <circle cx="535" cy="80" r="12.5" fill="#3b82f6" stroke="#1d4ed8" />
                      <text x="515" y="102" className="text-[6px] font-bold fill-blue-700 uppercase">eco BRICK</text>
                      <text x="522" y="108" className="text-[6px] font-bold fill-blue-700 uppercase">Binders</text>
                    </g>

                    {/* Logistics / Yard */}
                    <rect x="370" y="150" width="180" height="100" rx="4" fill="#e2e8f0" />
                    <text x="380" y="170" className="text-[10px] font-bold fill-slate-400">Loading / Logistics Yard</text>
                    
                    {/* Power Substation */}
                    <rect x="520" y="30" width="40" height="40" rx="4" fill="#fef08a" stroke="#ca8a04" />
                    <Zap className="text-yellow-600 w-4 h-4" x="532" y="42" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-bold text-sm">Industrial Efficiency</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Optimized facility layout for maximum throughput per square meter. Designed for seamless scaling up to 30 parallel units.</p>
                  </div>
                  <div className="border-l-4 border-blue-900 pl-4">
                    <h5 className="font-bold text-sm">Heavy-Duty Infrastructure</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Engineered for 24/7 continuous operation with a peak output of ~34 tons/hr for the initial 5-unit cluster.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-slate-50 p-6 rounded-2xl flex flex-col gap-6">
                <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest">Site Capacity</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                    <span className="text-sm text-slate-500 font-medium">Single Unit Output</span>
                    <span className="text-sm font-bold text-blue-800">~6.8 tons / hr</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                    <span className="text-sm text-slate-500 font-medium">Volume Per Hour</span>
                    <span className="text-sm font-bold text-slate-700">4 cubes / unit</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                    <span className="text-sm text-slate-500 font-medium">Scaling Potential</span>
                    <span className="text-sm font-bold text-slate-700">Up to 30 units</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                    <span className="text-sm text-slate-500 font-medium">Total Site Area - (minimum )</span>
                    <span className="text-sm font-bold text-slate-700">5,000 sqm</span>
                  </div>
                </div>
                <div className="mt-auto p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <p className="text-xs leading-relaxed text-slate-600">
                    <Info className="inline w-3 h-3 text-blue-500 mr-1" />
                    Our operational model is designed for rapid, phased expansion. The initial $10M capital raise will secure our growth trajectory, establishing our presence across five distinct sites in strategic locations throughout Israel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              {financials.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-16 h-16" />
                  </div>
                  <div className="text-xs font-bold text-blue-500 uppercase mb-4">{f.year} Forecast</div>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-tighter">Gross Revenue</span>
                      <div className="text-2xl font-black text-slate-800">{f.rev}M <small className="text-xs font-medium text-slate-400">ILS</small></div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">Gross Profit</span>
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{f.margin}% Margin</span>
                      </div>
                      <div className="text-xl font-black text-blue-700">{f.profit}M <small className="text-xs font-medium text-blue-400">ILS</small></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Robustness Note Component */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <AlertCircle className="text-blue-600 w-6 h-6 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="text-blue-900 font-bold text-sm uppercase tracking-wide">Model Robustness Analysis</h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Note: Unlike the standard business model where eco BRICK receives tipping fees for waste treatment, 
                  <strong> this analysis conservatively values waste treatment at 0 ILS</strong>. 
                  This adjustment serves as a "stress test" to demonstrate the extreme profitability and resilience of the 
                  core manufacturing process even without secondary revenue streams.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="md:w-1/2 space-y-6">
                  <h3 className="text-xl font-bold text-slate-800">Series A Capital Allocation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We are raising <strong>$10M USD</strong> to accelerate our transition from pilot phase to industrial dominance. This capital will fund our primary production facility in Israel, featuring five fully automated lines, while simultaneously establishing the infrastructure for four additional sites nationwide.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Raise Target</span>
                      <div className="text-xl font-black text-blue-700">$10,000,000</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {/* Updated Valuation Label */}
                      <span className="text-[10px] text-slate-400 font-bold uppercase leading-tight block">
                        Pre-Money Val (Valuation set prior to the build-out of one of five initial sites in Israel)
                      </span>
                      <div className="text-xl font-black text-blue-700">$35M - $45M</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-blue-400 font-bold text-xs uppercase mb-2">Portfolio Outlook</h4>
                      <p className="text-lg font-semibold leading-snug">Projected cumulative liquidity in 48 months:</p>
                    </div>
                    <div className="text-6xl font-black text-white mt-4">50.2M <span className="text-xl font-light text-blue-400">ILS</span></div>
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 h-32 opacity-20 flex items-end gap-1 px-4 text-right">
                    <div className="bg-blue-400 w-full h-[20%]"></div>
                    <div className="bg-blue-400 w-full h-[45%]"></div>
                    <div className="bg-blue-400 w-full h-[75%]"></div>
                    <div className="bg-blue-400 w-full h-[100%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer & CTA */}
        <footer className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm">
              <p className="font-bold text-slate-700 uppercase text-xs tracking-widest mb-1">Confidential Round A Deck</p>
              <p>© 2026 eco BRICK Innovio. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="/Contact/index.html" className="bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm relative -left-[20%]">
                Contact Founder
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating ESG Badge */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs text-right">
          <div className="bg-green-100 p-2 rounded-lg">
            <Leaf className="text-green-600 w-5 h-5" />
          </div>
          <div className="text-[10px] leading-tight text-slate-500">
            <strong className="text-slate-800 block mb-0.5 uppercase tracking-wide">ESG Impact</strong>
            Scale A facility prevents 140,000 kg of CO2 equivalent emissions annually through landfill diversion.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
