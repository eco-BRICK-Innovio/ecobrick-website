import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import {
    Recycle, Construction, Printer, Droplets, ShieldCheck,
    TrendingUp, AlertTriangle, Lightbulb, MapPin, DollarSign, Box, ExternalLink, FileText, Thermometer, Zap, Truck, Target
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('waste');
    const [showPdfMessage, setShowPdfMessage] = useState(false);

    // Brand Colors aligned with CSS Variables
    const BRAND_PRIMARY = '#2563EB';
    const BRAND_NAVY = '#172554';
    const BRAND_BG = '#F8FAFC';
    const ACCENT_BLUE = '#38BDF8';
    const ACCENT_PEACH = '#FFF7ED';
    const ACCENT_PURPLE = '#F5F3FF';

    // Data for Charts
    const wasteGrowth = [
        { year: '2023', value: 342.7 },
        { year: '2024', value: 358.4 },
        { year: '2025', value: 377.2 },
        { year: '2026', value: 396.8 },
        { year: '2030', value: 484.8 },
    ];

    const wasteTypeData = [
        { name: 'Industrial', value: 55 },
        { name: 'Municipal (MSW)', value: 35 },
        { name: 'E-Waste', value: 10 },
    ];

    // Updated to brand-aligned distinct colors
    const PIE_COLORS = ['#0891B2', '#172554', '#CBD5E1', '#94A3B8'];

    const aggregatePricing = [
        { type: 'Virgin Crushed Stone', price: 18.5, env: 80 },
        { type: 'Natural Sand/Gravel', price: 14.2, env: 70 },
        { type: 'Recycled Concrete', price: 12.0, env: 30 },
        { type: 'eco BRICK Aggregate', price: 11.5, env: 5 },
    ];

    const TabButton = ({ id, icon: Icon, label }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`relative flex flex-col items-center justify-center pt-8 pb-6 px-6 transition-all min-w-[140px] group ${activeTab === id ? 'text-[#2563EB]' : 'text-slate-400 hover:text-slate-600'}`}
        >
            <Icon size={22} className={`mb-3 transition-transform ${activeTab === id ? 'scale-110' : 'group-hover:scale-105'}`} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-center whitespace-nowrap">{label}</span>
            {activeTab === id && <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#2563EB] rounded-t-full" />}
        </button>
    );

    // Reusable Main Message Component
    const MainMessage = ({ text, dark = false }) => (
        <div className={`mb-12 p-8 md:p-10 rounded-3xl ${dark ? 'bg-[#172554] shadow-lg' : 'bg-white shadow-sm'} border border-slate-100 min-h-[140px] flex items-center relative overflow-hidden`}>
            {/* Vertical Accent Bar */}
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2/3 ${dark ? 'bg-blue-400' : 'bg-[#172554]'} rounded-r-lg`}></div>
            
            <div className="pl-6 space-y-3">
                <h3 className={`font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 ${dark ? 'text-blue-200' : 'text-[#2563EB]'}`}>
                    <Target size={14} /> Strategic Imperative
                </h3>
                <p className={`text-base md:text-lg font-bold leading-snug tracking-tight ${dark ? 'text-white' : 'text-[#172554]'}`}>
                    {text}
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900 pt-8">
            {/* FLOATING HEADER: BRANDING */}
            <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/50 py-3 px-8 transition-all duration-300">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="text-4xl font-bold text-[#2563EB] tracking-tighter">eco</span>
                        <span className="text-4xl font-extrabold text-[#172554] tracking-tighter">BRICK</span>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em]">Strategic Review 2024-2030</span>
                        <button className="bg-[#1D4ED8] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-blue-200">
                            <ShieldCheck size={16} /> Innovation in Raw Materials
                        </button>
                    </div>
                </div>
            </header>

            {/* SPACER FOR FIXED HEADER */}
            <div className="h-24"></div>

            {/* TAB NAVIGATION */}
            <nav className="sticky top-28 z-40 bg-[var(--brand-bg)] border-b border-slate-200 px-4 pt-2 mb-12 overflow-x-auto no-scrollbar">
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 min-w-[800px]">
                    <TabButton id="waste" icon={MapPin} label="Waste Market" />
                    <TabButton id="aggregates" icon={Thermometer} label="Aggregates" />
                    <TabButton id="3dprinting" icon={Printer} label="3D Printing" />
                    <TabButton id="hotasphalt" icon={Droplets} label="Hot Asphalt" />
                    <TabButton id="coldasphalt" icon={ShieldCheck} label="Cold Asphalt" />
                    <TabButton id="inovio" icon={TrendingUp} label="Eco Solutions" />
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-20 pb-40">

                {/* SECTION 1: WASTE MARKET */}
                {activeTab === 'waste' && (
                    <div className="animate-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="md:col-span-2">
                                <MainMessage text="The U.S. waste market is growing rapidly, but escalating transportation costs and dwindling landfill capacity create a critical need for localized, circular waste-to-asset solutions." />
                            </div>
                            <div className="glass-card p-6 flex flex-col justify-center items-center text-center border-b-[6px] border-[#2563EB]">
                                <span className="text-3xl font-extrabold text-[#2563EB] mb-1">34%</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Higher Margins</span>
                                <p className="text-[10px] text-slate-400 mt-2 font-medium">vs traditional waste disposal</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div className="glass-card p-10 shadow-sm">
                                <h2 className="text-sm font-black mb-10 flex items-center gap-3 text-[var(--brand-navy)] uppercase tracking-[0.2em]">
                                    <TrendingUp size={20} /> U.S. Waste Market Trajectory <span className="text-[10px] font-bold text-slate-300 ml-auto">USD B</span>
                                </h2>
                                <div className="h-72">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={wasteGrowth}>
                                            <defs>
                                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
                                                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.05} />
                                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} />
                                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                            <Area type="monotone" dataKey="value" stroke="#2563EB" fillOpacity={1} fill="url(#colorValue)" strokeWidth={4} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="mt-8 text-xs text-slate-400 italic font-medium text-center">Expected CAGR of 5.2% through 2030, accelerated by industrial growth in the Sun Belt.</p>

                                {/* Logistics Info Section */}
                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <h3 className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <Truck size={16} /> Transportation & Logistics Burden
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                            <span className="text-[9px] uppercase font-bold text-[#1D4ED8] block mb-1 tracking-wider">Avg. Distance to Landfill</span>
                                            <span className="text-2xl font-bold text-[#1E3A8A]">30–60 Miles</span>
                                            <p className="text-[10px] text-[#4B5563] mt-2 leading-tight opacity-70">Typical one-way haul from Texas urban centers.</p>
                                        </div>
                                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                            <span className="text-[9px] uppercase font-bold text-[#1D4ED8] block mb-1 tracking-wider">Hauling Cost</span>
                                            <span className="text-2xl font-bold text-[#1E3A8A]">$0.15–$0.25</span>
                                            <p className="text-[10px] text-[#4B5563] mt-2 leading-tight opacity-70">Per ton-mile, excluding fuel surcharges.</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#4B5563] mt-6 leading-relaxed">
                                        Transportation accounts for <span className="font-bold text-[#1D4ED8]">up to 50%</span> of total waste management budgets. Rising diesel costs and driver shortages in Texas have increased logistical overhead by <span className="text-[#1D4ED8] font-bold">~12%</span> annually since 2022.
                                    </p>
                                </div>
                            </div>

                            <div className="glass-card p-10">
                                <h2 className="text-2xl font-extrabold mb-10 text-[#172554] tracking-tight">Texas Strategic Challenges</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-5 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:bg-slate-50">
                                        <div className="mt-1 p-2 bg-white rounded-xl shadow-sm border border-slate-100"><AlertTriangle className="text-[#2563EB]" size={20} /></div>
                                        <div>
                                            <h3 className="font-bold text-[#172554] uppercase text-[11px] tracking-widest mb-1">Landfill Scarcity</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">Texas MSW generation exceeds 35M tons/year. Major hubs (Austin, Dallas) facing critical capacity shortages by 2035.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:bg-slate-50">
                                        <div className="mt-1 p-2 bg-white rounded-xl shadow-sm border border-slate-100"><MapPin className="text-[#2563EB]" size={20} /></div>
                                        <div>
                                            <h3 className="font-bold text-[#172554] uppercase text-[11px] tracking-widest mb-1">Logistical Dominance</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">Waste Management Inc. and Republic Services control 60%+ of hauling, creating high barriers to entry for traditional recyclers.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-sm transition-all hover:bg-slate-50">
                                        <div className="mt-1 p-2 bg-white rounded-xl shadow-sm border border-slate-100"><Recycle className="text-[#2563EB]" size={20} /></div>
                                        <div>
                                            <h3 className="font-bold text-[#172554] uppercase text-[11px] tracking-widest mb-1">Circular Regulation</h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">Texas SB 649 provides a framework for industrial byproduct reuse, favoring eco BRICK's "trash-to-asset" model.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION 2: AGGREGATES MARKET */}
                {activeTab === 'aggregates' && (
                    <div className="animate-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="md:col-span-2">
                                <MainMessage text="eco BRICK disrupts the $40B aggregates market by providing a highly competitive alternative that offers lower costs, a carbon-negative footprint, and superior thermal properties." />
                            </div>
                            <div className="glass-card p-8 flex flex-col justify-center items-center text-center border-b-[6px] border-[#2563EB]">
                                <span className="text-4xl font-extrabold text-[#2563EB] mb-2">200M</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Ton Shortage</span>
                                <p className="text-[10px] text-slate-400 mt-2 font-medium">Texas annual deficit by 2030</p>
                            </div>
                        </div>

                        <div className="p-12 shadow-sm rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] mb-20">
                            <h2 className="text-sm font-bold mb-12 text-[#1E3A8A] uppercase tracking-[0.2em]">Thermal & Recycled Aggregates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <div className="text-center p-10 bg-white/50 rounded-2xl border border-white/50">
                                    <span className="text-[#1D4ED8] text-[10px] font-bold uppercase tracking-widest block mb-2">Market Size (2025)</span>
                                    <span className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight">$40.6B</span>
                                </div>
                                <div className="text-center p-8 bg-white/50 rounded-2xl border border-white/50">
                                    <span className="text-[#1D4ED8] text-[10px] font-bold uppercase tracking-widest block mb-2">Recycled CAGR</span>
                                    <span className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight">6.2%</span>
                                </div>
                                <div className="text-center p-8 bg-white/50 rounded-2xl border border-white/50">
                                    <span className="text-[#1D4ED8] text-[10px] font-bold uppercase tracking-widest block mb-2">TX Output Rank</span>
                                    <span className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight">#1</span>
                                </div>
                            </div>

                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Value Proposition: Price vs. Sustainability</h3>
                            <div className="h-80 w-full bg-white/30 rounded-2xl p-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={aggregatePricing}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                                        <XAxis dataKey="type" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                                        <YAxis yAxisId="left" orientation="left" stroke="#1D4ED8" axisLine={false} tickLine={false} label={{ value: 'Price ($/ton)', angle: -90, position: 'insideLeft', style: { fill: '#64748b', fontSize: 10 } }} />
                                        <YAxis yAxisId="right" orientation="right" stroke="#1E3A8A" axisLine={false} tickLine={false} label={{ value: 'Carbon Index', angle: 90, position: 'insideRight', style: { fill: '#64748b', fontSize: 10 } }} />
                                        <Tooltip cursor={{ fill: 'rgba(0,0,0,0.02)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                        <Legend iconType="circle" />
                                        <Bar yAxisId="left" dataKey="price" fill="#1D4ED8" name="Price ($/ton)" radius={[6, 6, 0, 0]} />
                                        <Bar yAxisId="right" dataKey="env" fill="#1E3A8A" name="Carbon Intensity" radius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-8 p-6 bg-white/50 rounded-xl border border-white/50 shadow-sm">
                                <p className="text-[#4B5563] vertical-accent italic text-sm leading-relaxed">
                                    While natural sand/gravel remains cheap, the rising "Green Building" demand in Dallas/Houston creates a massive opportunity for carbon-negative thermal aggregates.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION 3: 3D PRINTING CONCRETE */}
                {activeTab === '3dprinting' && (
                    <div className="animate-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="md:col-span-2">
                                <MainMessage text="As 3D construction scales in Texas, eco BRICK solves the critical lack of insulation in printed concrete walls by acting as an integrated, low-weight thermal aggregate." />
                            </div>
                            <div className="glass-card p-10 flex flex-col justify-center items-center text-center border-b-[6px] border-[#F59E0B]">
                                <span className="text-5xl font-extrabold text-[#F59E0B] mb-3">55.6%</span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Sector CAGR</span>
                                <p className="text-[10px] text-slate-400 mt-3 font-medium">Global 3D construction 2023-33</p>
                            </div>
                        </div>

                        <div className="p-12 shadow-sm rounded-3xl bg-slate-50/80 border border-slate-100 mb-20">
                            <h2 className="text-sm font-bold mb-12 text-[#172554] uppercase tracking-[0.2em]">3D Construction Innovation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div>
                                    <div className="relative h-96 bg-[#172554] rounded-3xl overflow-hidden flex items-center justify-center text-white p-12 shadow-xl">
                                        <div className="absolute top-8 left-8 text-blue-200 font-bold uppercase text-[10px] tracking-[0.3em]">Innovation Hub: Austin, TX</div>
                                        <div className="text-center">
                                            <div className="text-5xl font-black mb-3 tracking-tighter">55.6%</div>
                                            <div className="text-[10px] font-bold opacity-80 uppercase tracking-[0.4em]">Sector CAGR</div>
                                        </div>
                                        <div className="absolute bottom-0 right-0 p-10 opacity-5">
                                            <Printer size={180} />
                                        </div>
                                    </div>
                                    <div className="mt-10 space-y-5">
                                        <h3 className="font-bold text-[#172554] uppercase text-[11px] tracking-widest px-1">Technical Requirements:</h3>
                                        <ul className="grid gap-4">
                                            <li className="flex items-center gap-4 p-4 bg-white rounded-2xl text-sm font-semibold text-[#172554] shadow-sm border border-slate-100">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div> Geopolymer binders replacing Portland Cement
                                            </li>
                                            <li className="flex items-center gap-4 p-4 bg-white rounded-2xl text-sm font-semibold text-[#172554] shadow-sm border border-slate-100">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div> Low weight-to-volume ratio for cantilevers
                                            </li>
                                            <li className="flex items-center gap-4 p-4 bg-white rounded-2xl text-sm font-semibold text-[#172554] shadow-sm border border-slate-100">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></div> Integrated thermal aggregates (eco BRICK)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="glass-card p-10">
                                        <h3 className="font-bold text-[#172554] flex items-center gap-2 mb-6 text-[11px] uppercase tracking-widest">
                                            <AlertTriangle size={18} className="text-[#2563EB]" /> Material Pain Points
                                        </h3>
                                        <p className="text-xs text-[#2563EB] leading-relaxed uppercase font-black mb-3">High Thermal Conductivity</p>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">Standard 3D concrete walls lack insulation. eco BRICK aggregates solve this by providing internal thermal breaks directly during the print process.</p>
                                    </div>
                                    <div className="glass-card p-10 bg-slate-50/50">
                                        <h3 className="font-bold text-[#2563EB] flex items-center gap-2 mb-6 text-[11px] uppercase tracking-widest">
                                            The Strategic Partner: ICON
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">With <strong className="text-[#172554]">ICON</strong> (Austin) scaling massive housing projects like <em>"Wolf Ranch"</em>, the demand for locally-sourced, waste-derived aggregate is becoming a critical supply chain factor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTIONS 4 & 5: ASPHALT MARKETS */}
                {(activeTab === 'hotasphalt' || activeTab === 'coldasphalt') && (
                    <div className="animate-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="md:col-span-2">
                                <MainMessage text={activeTab === 'hotasphalt' ? "Lab tests prove that our 99% waste-derived additives dramatically improve hot asphalt performance, multiplying strength by 4x and optimizing expensive bitumen usage." : "Our cold-mixed BSM solutions provide rural and municipal markets with highly durable road materials that slash bitumen demand by 50% while utilizing ~95% waste."} />
                            </div>
                            <div className="glass-card p-8 flex flex-col justify-center items-center text-center border-b-[6px] border-[#172554]">
                                <span className="text-4xl font-extrabold text-[#172554] mb-2">
                                    {activeTab === 'hotasphalt' ? '4x' : '50%'}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#172554]/40">
                                    {activeTab === 'hotasphalt' ? 'Strength Mult.' : 'Bitumen Reduc.'}
                                </span>
                                <p className="text-[10px] text-slate-400 mt-2 font-medium text-center leading-tight">
                                    {activeTab === 'hotasphalt' ? 'Marshall Test Verification' : 'Lab Certified (BSM)'}
                                </p>
                            </div>
                        </div>

                        <div className="p-12 shadow-sm rounded-3xl bg-slate-50 border border-slate-100 mb-20">
                            <h2 className="text-sm font-bold mb-12 text-[#172554] uppercase tracking-[0.2em]">
                                {activeTab === 'hotasphalt' ? 'Hot Asphalt Innovation' : 'Cold Asphalt Mastery'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div>
                                    <h3 className="font-bold text-[#2563EB] uppercase text-[11px] tracking-[0.3em] mb-8">Market Segmentation</h3>
                                    <div className="h-80 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={wasteTypeData}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={80}
                                                    outerRadius={110}
                                                    paddingAngle={10}
                                                    dataKey="value"
                                                    stroke="none"
                                                >
                                                    {wasteTypeData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={['#0891B2', '#172554', '#CBD5E1'][index % 3]} />
                                                    ))}
                                                </Pie>
                                                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="glass-card p-10">
                                        <h4 className="font-bold text-[#2563EB] text-[11px] uppercase tracking-widest mb-3">Target Market Valuation</h4>
                                        <p className="text-5xl font-black text-[#172554] tracking-tighter">
                                            {activeTab === 'hotasphalt' ? '$1.84B' : '$3.65B'}
                                        </p>
                                        <p className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest leading-tight">{activeTab === 'hotasphalt' ? 'North America by 2030' : 'Global Market 2025'}</p>
                                    </div>

                                    {activeTab === 'hotasphalt' && (
                                        <div className="p-8 bg-white rounded-2xl shadow-sm border-l-4 border-l-[#1D4ED8] relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-5"><FileText size={80} /></div>
                                            <div className="flex justify-between items-start mb-6 relative z-10">
                                                <h4 className="font-bold text-[#1E3A8A] text-[10px] uppercase tracking-widest flex items-center gap-2">
                                                    <ShieldCheck size={16} className="text-[#1D4ED8]" /> Lab Verified Data
                                                </h4>
                                                <span className="text-[9px] bg-[#1D4ED8] text-white px-3 py-1 rounded-full font-bold tracking-widest uppercase">Marshall test</span>
                                            </div>
                                            <p className="text-sm text-[#4B5563] font-medium mb-6 leading-relaxed relative z-10">
                                                Shapir Industries confirms 10% integration maintains integrity at 4.6% Bitumen.
                                                Extracting mixtures with 4.8% bitumen and 10% additive yielded 6.3% effective bitumen.
                                                <span className="block mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100 text-[#1E3A8A] font-bold">
                                                    Results showed a stable mixture with strength increasing <span className="text-[#1D4ED8]">4x more</span> than standard compositions.
                                                </span>
                                            </p>
                                            <button
                                                className="flex items-center justify-center gap-2 w-full py-4 bg-[#1D4ED8] hover:brightness-110 text-white text-[10px] uppercase tracking-widest font-bold rounded-xl transition-all shadow-lg shadow-blue-100"
                                                onClick={() => {
                                                    setShowPdfMessage(true);
                                                    setTimeout(() => setShowPdfMessage(false), 5000);
                                                }}
                                            >
                                                <ExternalLink size={14} /> View Verified Report
                                            </button>
                                            {showPdfMessage && (
                                                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center p-6 text-center animate-in fade-in duration-300">
                                                    <p className="text-xs font-bold text-[#1E3A8A] leading-relaxed">
                                                        PDF access is secured. Lab reports are available upon request for verified partners.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="p-6 bg-white/50 rounded-xl border border-white shadow-sm">
                                        <h4 className="font-bold text-[#4B5563] text-[10px] uppercase tracking-widest mb-3 opacity-60">Impact Analysis</h4>
                                        <p className="text-sm font-medium text-[#4B5563] leading-relaxed">
                                            {activeTab === 'hotasphalt'
                                                ? "Produced from 99% waste, reducing environmental load while multiplying structural durability."
                                                : "Reduces bitumen emulsion demand by 50% and utilizes ~95% waste. Bonds surface and reduces road stress dramatically."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION 6: SOLUTIONS */}
                {activeTab === 'inovio' && (
                    <div className="animate-in space-y-12">
                        <div className="bg-[#172554] text-white p-12 md:p-24 rounded-[3rem] shadow-2xl overflow-hidden relative border border-[#172554]">
                            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[160px] -mr-64 -mt-64"></div>
                            
                            <div className="flex flex-col items-center text-center mb-12 relative z-10 pt-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none text-white drop-shadow-sm">ROAD VALUE CHAIN</h2>
                                <p className="text-blue-100/80 max-w-xl text-base mb-8 leading-relaxed font-medium">Converting complex industrial waste into high-performance, carbon-negative construction assets.</p>
                                
                                <div className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left relative group hover:bg-white/10 transition-all duration-500">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center border border-blue-400/30">
                                            <Target size={14} className="text-blue-300" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-300">Core Proposition</span>
                                    </div>
                                    <p className="text-lg md:text-xl font-bold leading-tight tracking-tight text-white">
                                        eco BRICK offers a complete, disruptive ecosystem that transforms unrecyclable waste streams into profitable, high-performing structural assets for municipalities and contractors.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/15 transition-all duration-500">
                                    <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20">
                                        <Recycle size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Waste Diversion</h3>
                                    <p className="text-blue-100/70 text-[13px] leading-relaxed font-medium">Processing 99% of non-recyclable streams—including sludge, PVC, and Styrofoam—into stable engineered materials.</p>
                                </div>
                                
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/15 transition-all duration-500">
                                    <div className="w-12 h-12 bg-blue-500/80 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-blue-400/20">
                                        <Box size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Material Assets</h3>
                                    <p className="text-blue-100/70 text-[13px] leading-relaxed font-medium">ASTM C331 compliant lightweight aggregates that outperform natural stone in insulation and acoustics.</p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:bg-white/15 transition-all duration-500">
                                    <div className="w-12 h-12 bg-blue-400/80 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-blue-300/20">
                                        <DollarSign size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-3 uppercase tracking-tight">Economic Edge</h3>
                                    <p className="text-blue-100/70 text-[13px] leading-relaxed font-medium">Municipal partners receive up to 15% tipping fee discounts and 10%+ savings on finished infrastructure.</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-12 md:p-20">
                            <h2 className="text-4xl font-extrabold mb-16 text-[#172554] tracking-tight">Strategic Alignment</h2>
                            
                            <div className="space-y-12">
                                <div className="flex flex-col md:row gap-8 md:items-start group">
                                    <div className="flex items-center gap-4 min-w-[140px]">
                                        <span className="text-3xl font-bold text-[#1D4ED8] tracking-tighter">4x</span>
                                        <Zap size={24} className="text-[#1D4ED8]" />
                                    </div>
                                    <div>
                                        <h3 className="text-[12px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em] mb-2">Strength Multiplier:</h3>
                                        <p className="text-lg text-[#4B5563] leading-snug font-medium max-w-3xl">Lab testing indicates additives increase final hot asphalt mixture strength by 400% (4x) compared to standard asphalts.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:row gap-8 md:items-start group border-t border-slate-100 pt-12">
                                    <div className="min-w-[140px]">
                                        <span className="text-3xl font-bold text-[#1D4ED8] tracking-tighter">50%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[12px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em] mb-2">Bitumen Efficiency:</h3>
                                        <p className="text-lg text-[#4B5563] leading-snug font-medium max-w-3xl">Cold-mixed mixtures reduce bitumen use by up to 50% while utilizing ~95% waste material.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:row gap-8 md:items-start group border-t border-slate-100 pt-12">
                                    <div className="min-w-[140px]">
                                        <span className="text-3xl font-bold text-[#1D4ED8] tracking-tighter">30%</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[12px] font-bold text-[#1E3A8A] uppercase tracking-[0.2em] mb-2">Thermal Improvement:</h3>
                                        <p className="text-lg text-[#4B5563] leading-snug font-medium max-w-3xl">Ideal for 3D printed housing envelopes, significantly reducing lifetime energy requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </main>

            {/* Refined Footer */}
            <footer className="max-w-6xl mx-auto mt-40 text-center text-slate-500 text-xs py-24 border-t border-slate-200">
                <div className="flex justify-center mb-10 gap-1 items-baseline">
                    <span className="text-4xl font-bold text-[#2563EB] tracking-tighter">eco</span>
                    <span className="text-4xl font-extrabold text-[#172554] tracking-tighter">BRICK</span>
                </div>
                <p className="font-bold tracking-[0.2em] uppercase text-[10px] text-[#172554]">© 2026 Market Insights | Texas Strategic Infrastructure Data</p>
                <p className="mt-4 uppercase tracking-[0.4em] font-black text-[10px] text-[#2563EB] opacity-70">Innovation in raw materials</p>
            </footer>
        </div>
    );
};

export default App;
