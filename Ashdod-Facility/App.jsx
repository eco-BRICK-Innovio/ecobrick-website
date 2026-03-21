import React from 'react';
import { 
  Recycle, 
  Trash2, 
  Settings, 
  Droplets, 
  Hammer, 
  Trees, 
  Building2, 
  Factory, 
  CheckCircle2, 
  Truck,
  BarChart3, 
  TrendingUp, 
  Target, 
  Cpu, 
  Layers, 
  Waves, 
  Coins, 
  ShoppingCart, 
  Tags, 
  Beaker, 
  Package, 
  ArrowLeftRight,
  ShieldCheck, 
  Zap, 
  Box,
  ArrowLeft
} from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, subtitle, items, colorClass, stats, rate, subSections }) => (
  <div className={`group flex flex-col p-8 rounded-3xl border shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${colorClass} h-full relative overflow-hidden`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-2xl bg-white/90 shadow-md transform transition-transform group-hover:rotate-6">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-xl font-black leading-tight">{title}</h3>
        <p className="text-sm font-bold opacity-80">{subtitle}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-2 gap-3 mb-6">
      {stats && (
        <div className="bg-white/30 backdrop-blur-md p-3 rounded-xl border border-white/20">
          <div className="text-[10px] font-bold opacity-70 uppercase tracking-wider">נתון שנתי</div>
          <div className="text-base font-black">
            {stats} {typeof stats === 'number' || !isNaN(stats.toString().replace(/,/g, '')) ? <span className="text-[10px] font-normal">טון</span> : ''}
          </div>
        </div>
      )}
      {rate && (
        <div className="bg-white/50 backdrop-blur-md p-3 rounded-xl border border-white/30">
          <div className="text-[10px] font-bold opacity-80 uppercase tracking-wider">יעד</div>
          <div className="text-xs font-black leading-tight">{rate}</div>
        </div>
      )}
    </div>

    <div className="space-y-5 flex-grow">
      {items && (
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed font-semibold">
              <div className="bg-white/40 p-0.5 rounded-full mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 opacity-80" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {subSections && subSections.map((section, sIdx) => (
        <div key={sIdx} className="mt-6 pt-6 border-t border-current/10">
          <div className="flex items-center gap-2 mb-3">
            {section.icon && <section.icon className="w-4 h-4" />}
            <span className="text-xs font-black uppercase tracking-widest">{section.title}</span>
          </div>
          <div className="grid gap-2">
            {section.items.map((item, iIdx) => (
              <div key={iIdx} className="text-xs font-bold flex justify-between items-center bg-white/20 px-3 py-2 rounded-lg border border-white/10">
                <span className="opacity-80">{item.label}</span>
                <span className="font-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => {
  // --- Data Calculations (Ratios 1/8, 1/8, 3/4) ---
  const dryWasteBase = 105761;
  const constructionWaste = dryWasteBase * 2; // 211,522 tons
  const totalProcessableMass = dryWasteBase + constructionWaste; 
  
  const hotAsphaltTons = totalProcessableMass * 0.125;
  const coldAsphaltTons = totalProcessableMass * 0.125;
  const aggregateTons = totalProcessableMass * 0.75;

  const hotAsphaltPricePerTon = 700;
  const coldAsphaltPricePer20kg = 140;
  const coldAsphaltPricePerTon = (1000 / 20) * coldAsphaltPricePer20kg; 
  const aggregatePricePerCubic = 210;
  const tonsToCubicFactor = 1.5; 

  // --- Revenue estimation (Waste Intake) ---
  const homeWasteRev = 44357 * 315; 
  const mixedWasteRev = 78244 * 302; 
  const constructionWasteRev = constructionWaste * 108; 
  const industrialWasteRev = 136 * 302; 
  const totalWasteRevenue = homeWasteRev + mixedWasteRev + constructionWasteRev + industrialWasteRev;

  // --- Discount Calculation for Step 1 Text ---
  // (350-315)*44357 + (336-302)*78244 + (120-108)*211522 + (336-302)*136
  const totalAshdodDiscount = 1552495 + 2660296 + 2538264 + 4624;

  const hotAsphaltRevenue = hotAsphaltTons * hotAsphaltPricePerTon;
  const coldAsphaltRevenue = coldAsphaltTons * coldAsphaltPricePerTon;
  const aggregateRevenue = aggregateTons * tonsToCubicFactor * aggregatePricePerCubic;
  const totalProductRevenue = hotAsphaltRevenue + coldAsphaltRevenue + aggregateRevenue;

  const formatCurrency = (val) => `₪${(val / 1000000).toFixed(1)}M`;
  const formatNumber = (val) => Math.round(val).toLocaleString();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-right selection:bg-blue-100 selection:text-blue-900" dir="rtl">
      {/* Header with Integrated Logos */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            {/* Main Brand Section */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 rounded-xl text-white shadow-lg shadow-blue-200">
                <Recycle className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                  <span className="text-blue-600 lowercase">eco</span> BRICK <span className="font-light text-slate-500">Innovio</span>
                </h1>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]" dir="ltr">ASHDOD FACILITY 2026</p>
                </div>
              </div>
            </div>

            {/* Partners Logo Section - Dividers and Partners */}
            <div className="hidden sm:flex items-center gap-5 border-r border-slate-200 pr-6 h-12">
              <div className="flex flex-col items-center ml-4">
                <img 
                  src="../ashdod-logo.png" 
                  alt="עיריית אשדוד" 
                  className="h-10 scale-[2.2] object-contain transition-all duration-300 opacity-80 hover:opacity-100 cursor-help" 
                  title="עיריית אשדוד"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 max-w-[100px] text-right leading-tight" dir="rtl">
                  חפ״א – החברה לפיתוח אשדוד
                </span>
                <img 
                  src="../hapa-logo.png" 
                  alt="חפא - החברה הכלכלית אשדוד" 
                  className="h-10 object-contain transition-all duration-300 opacity-80 hover:opacity-100 cursor-help"
                  title="חפ״א - החברה לפיתוח אשדוד"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex gap-10 text-xs font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">טכנולוגיה</a>
            <a href="#" className="hover:text-blue-600 transition-colors">קיימות</a>
            <a href="#" className="hover:text-blue-600 transition-colors">דוחות 2026</a>
          </nav>
        </div>
      </header>

      <main className="max-w-[1700px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-24 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2 rounded-full text-xs font-black mb-8 border border-blue-100 shadow-sm">
            <Target className="w-4 h-4" />
            <span className="uppercase tracking-widest font-black text-[10px]">המרת פסולת לערך כלכלי וסביבתי בשיתוף עיריית אשדוד וחפ"א</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
            מתקן אקו בריק אינוביו - אשדוד 2026: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 font-black whitespace-nowrap">מודל עסקי דו-ערוצי</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            מתקן <strong>eco BRICK Innovio</strong> באשדוד מיישם טכנולוגיות המרה מתקדמות לטיפול ב-<strong>230,860 טון</strong> פסולת בשנה, תוך יצירת מודל רווחיות מבוסס כלכלה מעגלית ושותפות מוניציפלית.
          </p>
        </section>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 mb-24">
          <ProcessStep 
            icon={Trash2}
            title="שלב 1: קליטה"
            subtitle="מיון ודמי קליטה"
            stats="230,860"
            rate="37% מיחזור"
            colorClass="bg-blue-50 border-blue-100 text-blue-900"
            items={[
              "קליטת 44,357 טון אשפה ביתית",
              "קליטת 78,244 טון מעורבת",
              "קליטת 136 טון תעשייה יבשה",
              "הפרדת ברזל וחומרים מגנטיים"
            ]}
          />
          
          <ProcessStep 
            icon={Building2}
            title="שלב 2: אקו-בריק"
            subtitle="עיבוד פסולת מוצקה"
            stats={formatNumber(totalProcessableMass)}
            rate="15 מכונות ייצור"
            colorClass="bg-orange-50 border-orange-100 text-orange-900"
            items={[
              `עיבוד ${formatNumber(totalProcessableMass)} טון מוצקים`,
              `1/8 לתוסף חם (${formatNumber(hotAsphaltTons)} טון)`,
              `1/8 לתוסף קר (${formatNumber(coldAsphaltTons)} טון)`,
              `3/4 לאגרגט (${formatNumber(aggregateTons)} טון)`,
              "שימוש במערך 3 מיקסרים רציפים"
            ]}
          />

          <ProcessStep 
            icon={Droplets}
            title="שלב 3: אורגני"
            subtitle="BIO-SEP & SQUEEZE"
            stats="127"
            rate="70% הפחתה"
            colorClass="bg-emerald-50 border-emerald-100 text-emerald-900"
            items={[
              "הפרדת פסולת אורגנית ייעודית",
              "מתקן סחיטה בלחץ גבוה",
              "צמצום של 48.3 טון נוזלים",
              "הפקת 20.7 טון מוצקים",
              "מניעת זיהומי קרקע והטמנה"
            ]}
          />

          <ProcessStep 
            icon={Factory}
            title="שלב 4: אמולסיה"
            subtitle="ביו-ביטומן ופסולת עץ"
            stats="231"
            rate="70% מיחזור"
            colorClass="bg-blue-600 border-blue-500 text-white"
            items={[
              "מיחזור 231 טון משטחי עץ",
              "שילוב המוצקים האורגניים",
              "ייצור משחה ביו-ביטומנית",
              "הפקת אמולסיה לאספלט קר",
              "חיסכון ברכש חומרים חיצוניים בדגש ביטומן"
            ]}
          />

          <ProcessStep 
            icon={Truck}
            title="שלב 5: סינרגיה"
            subtitle="מוצרי קצה לשוק"
            rate="97% הצלחה"
            colorClass="bg-emerald-600 border-emerald-500 text-white shadow-emerald-200"
            items={[
              "ייצור ואריזת אספלט קר",
              "אספקת אגרגט לבנייה ירוקה",
              "הפצת תוספי אספלט חם",
              "מינימום הטמנה (3% בלבד)",
              "עמידה בתקינה אמריקאית"
            ]}
          />

          <ProcessStep 
            icon={Coins}
            title="מודל הכנסות"
            subtitle="רווחיות משולבת"
            rate="פוטנציאל מחזור של למעלה מ 95% פסולת"
            colorClass="bg-orange-600 border-orange-500 text-white shadow-orange-200"
            subSections={[
              {
                title: <span className="inline-flex items-center gap-1.5">דמי קליטה (מקורי <ArrowLeft className="w-3.5 h-3.5 mx-0.5" strokeWidth={3} /> אחרי הנחה)</span>,
                icon: Tags,
                items: [
                  { label: "ביתית (טון)", value: <span className="inline-flex items-center gap-1.5" dir="ltr">₪315 <ArrowLeft className="w-4 h-4 text-orange-200 drop-shadow-sm" strokeWidth={3}/> ₪350</span> },
                  { label: "מעורבת (טון)", value: <span className="inline-flex items-center gap-1.5" dir="ltr">₪302 <ArrowLeft className="w-4 h-4 text-orange-200 drop-shadow-sm" strokeWidth={3}/> ₪336</span> },
                  { label: "בניין (טון)", value: <span className="inline-flex items-center gap-1.5" dir="ltr">₪108 <ArrowLeft className="w-4 h-4 text-orange-200 drop-shadow-sm" strokeWidth={3}/> ₪120</span> },
                  { label: "תעשייה יבשה", value: <span className="inline-flex items-center gap-1.5" dir="ltr">₪302 <ArrowLeft className="w-4 h-4 text-orange-200 drop-shadow-sm" strokeWidth={3}/> ₪336</span> },
                  { label: "מכירת ברזל", value: "בהתאם לשוק" },
                  { label: "הנחת עירייה של 10% על כלל הפסולת כ -", value: <span dir="ltr">(₪{formatNumber(totalAshdodDiscount)})</span> }
                ]
              },
              {
                title: "מכירת מוצרים",
                icon: ShoppingCart,
                items: [
                  { label: "שק אספלט קר", value: "₪140" },
                  { label: "קוב אגרגט", value: "₪210" },
                  { label: "תוסף חם (טון)", value: "₪700" }
                ]
              }
            ]}
          />
        </div>

        {/* REVENUE SPLIT VIEW */}
        <section className="mb-24">
          <div className="bg-slate-900 rounded-[3rem] p-1 shadow-2xl">
            <div className="bg-white rounded-[2.9rem] p-10 md:p-16">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-slate-100 pb-10">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-blue-50 rounded-2xl">
                      <ArrowLeftRight className="w-10 h-10 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-slate-900 tracking-tight">אומדן הכנסות שנתי למתקן</h3>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-1">מבט כפול לפי מקורות הכנסה (הצגת הנחת עירייה 10%)</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 px-8 py-4 rounded-3xl border border-emerald-100 text-center">
                    <p className="text-emerald-600 text-xs font-black uppercase mb-1">פוטנציאל משולב</p>
                    <p className="text-3xl font-black text-emerald-700">{formatCurrency(totalWasteRevenue + totalProductRevenue)}</p>
                  </div>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-16">
                  {/* Side A: Waste Absorption */}
                  <div>
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                          <Trash2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900">קליטה של פסולת</h4>
                     </div>
                     <div className="space-y-8">
                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">פסולת ביתית (אשדוד)</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(homeWasteRev)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-blue-600 h-full w-[25%] group-hover:w-[28%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2 flex items-center gap-1.5">
                              <span>44,357 טון ×</span>
                              <span className="text-blue-500 inline-flex items-center gap-1" dir="ltr">
                                ₪315 <ArrowLeft className="w-3 h-3 text-blue-600" strokeWidth={3}/> ₪350
                              </span>
                              <span>(אחרי הנחה)</span>
                           </p>
                        </div>

                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">מעורבת + תעשייה יבשה</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(mixedWasteRev + industrialWasteRev)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-blue-600 h-full w-[45%] group-hover:w-[48%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2 flex items-center gap-1.5">
                              <span>78,380 טון ×</span>
                              <span className="text-blue-500 inline-flex items-center gap-1" dir="ltr">
                                ₪302 <ArrowLeft className="w-3 h-3 text-blue-600" strokeWidth={3}/> ₪336
                              </span>
                              <span>(אחרי הנחה)</span>
                           </p>
                        </div>

                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">פסולת בניין</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(constructionWasteRev)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-blue-600 h-full w-[40%] group-hover:w-[43%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2 flex items-center gap-1.5">
                              <span>{formatNumber(constructionWaste)} טון ×</span>
                              <span className="text-blue-500 inline-flex items-center gap-1" dir="ltr">
                                ₪108 <ArrowLeft className="w-3 h-3 text-blue-600" strokeWidth={3}/> ₪120
                              </span>
                              <span>(אחרי הנחה)</span>
                           </p>
                        </div>

                        <div className="pt-10 mt-10 border-t-2 border-dashed border-slate-100 flex justify-between items-center">
                           <span className="text-lg font-black text-slate-900">סה"כ מקליטת פסולת:</span>
                           <span className="text-4xl font-black text-blue-600">{formatCurrency(totalWasteRevenue)}</span>
                        </div>
                     </div>
                  </div>

                  {/* Side B: Product Revenues */}
                  <div>
                     <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                          <Package className="w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900">מכירת מוצרי קצה</h4>
                     </div>
                     <div className="space-y-8">
                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">תוסף אספלט חם (1/8)</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(hotAsphaltRevenue)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-orange-50 h-full w-[15%] group-hover:w-[18%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2">{formatNumber(hotAsphaltTons)} טון × ₪700</p>
                        </div>

                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">תערובות אספלט קר (1/8)</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(coldAsphaltRevenue)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-orange-600 h-full w-[65%] group-hover:w-[68%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2">ארוז בשקי 20ק"ג (₪7,000 לטון)</p>
                        </div>

                        <div className="group relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className="text-slate-400 text-xs font-black uppercase">אגרגט לבנייה (3/4)</span>
                              <span className="text-xl font-black text-slate-800">{formatCurrency(aggregateRevenue)}</span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                              <div className="bg-orange-400 h-full w-[45%] group-hover:w-[48%] transition-all duration-700"></div>
                           </div>
                           <p className="text-[10px] text-slate-400 font-bold mt-2">~{formatNumber(aggregateTons * tonsToCubicFactor)} קוב × ₪210</p>
                        </div>

                        <div className="pt-10 mt-10 border-t-2 border-dashed border-slate-100 flex justify-between items-center">
                           <span className="text-lg font-black text-slate-900">סה"כ ממכירת מוצרים:</span>
                           <span className="text-4xl font-black text-orange-600">{formatCurrency(totalProductRevenue)}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Highlights */}
        <section className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-200 mb-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-slate-900 p-3 rounded-2xl text-white">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">מפרט תשתיות וציוד ייצור</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-orange-50/50 rounded-[2rem] border border-orange-100 group">
              <div className="flex justify-between items-start mb-6">
                <Hammer className="w-10 h-10 text-orange-600 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-black text-orange-600">15</span>
              </div>
              <div className="font-black text-slate-800 mb-2 text-lg">מכונות ייצור אקו-בריק</div>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">מערך מכונות ייצור מתקדם לייצור רציף בקיבולת שיא.</p>
            </div>
            
            <div className="p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100 group">
              <div className="flex justify-between items-start mb-6">
                <Layers className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-black text-blue-600">3</span>
              </div>
              <div className="font-black text-slate-800 mb-2 text-lg">מיקסרים רציפים</div>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">מערכת ערבוב הומוגנית המבטיחה תוצר איכותי ואחיד.</p>
            </div>

            <div className="p-8 bg-emerald-50/50 rounded-[2rem] border border-emerald-100 group">
              <div className="flex justify-between items-start mb-6">
                <Waves className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="font-black text-slate-800 mb-2 text-lg">הפרדה וסחיטה אורגנית</div>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">טכנולוגיית מיצוי מוצקים חדשנית לצמצום מסה ומשקל.</p>
            </div>

            <div className="relative p-8 rounded-[2rem] group overflow-hidden border border-blue-400/30 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-800 text-white shadow-2xl">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-[60px] rounded-full group-hover:bg-cyan-400/30 transition-all"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Package className="w-10 h-10 text-cyan-200" />
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-cyan-200 mb-1">
                      <Zap className="w-3 h-3 fill-current" />
                      <span className="text-[10px] font-black uppercase tracking-tighter">Precision Tech</span>
                    </div>
                    <div className="bg-cyan-400 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-blue-900 shadow-sm">
                      Automated
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1 mb-4">
                  <h4 className="text-xl font-black tracking-tight group-hover:text-cyan-100 transition-colors">מערך אריזה אוטומטי</h4>
                  <div className="h-1 w-16 bg-cyan-400 rounded-full"></div>
                </div>
                
                <p className="text-xs text-blue-50 font-medium leading-relaxed mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  טכנולוגיית "End-to-End" למילוי, שקילה ואיטום הרמטי של שקי אספלט קר (20 ק"ג) המוכנים להפצה.
                </p>
                
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="bg-blue-900/40 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                    <Box className="w-3 h-3 text-cyan-300" />
                    <span className="text-[9px] font-bold uppercase text-cyan-100 tracking-tighter">Smart Fill</span>
                  </div>
                  <div className="bg-blue-900/40 border border-white/10 rounded-xl p-2 flex items-center gap-2">
                    <Truck className="w-3 h-3 text-cyan-300" />
                    <span className="text-[9px] font-bold uppercase text-cyan-100 tracking-tighter">Fast Logistics</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 opacity-10 group-hover:opacity-20 transition-all duration-[2000ms]">
                <Settings className="w-32 h-32 rotate-12 group-hover:rotate-90 transition-transform duration-[3000ms]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-16">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-right">
              <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tighter text-blue-600">eco BRICK Innovio</h4>
              <p className="text-slate-400 text-sm font-bold">החזון לכלכלה מעגלית מיושם בשטח. מתקן אשדוד 2026.</p>
            </div>
            <div className="flex gap-12 flex-wrap justify-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-blue-600">97%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">מיחזור סופי</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-emerald-600">3%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">הטמנה בלבד</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-orange-600">100%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ניצול פסולת</span>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-50 text-center text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; 2026 Eco Brick Innovio Technologies | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
