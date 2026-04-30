import React, { useState } from 'react';
import { Calendar, ChevronRight, ChevronLeft, Info, CheckCircle2, Factory, HardHat, FileText, Truck, Settings, Coins, Recycle, Beaker } from 'lucide-react';

const App = () => {
  const scrollContainerRef = React.useRef(null);
  const phases = [
    {
      title: "שלב א': הכנת התשתית והאתר (W1-3)",
      color: "bg-blue-600",
      tasks: [
        { id: 1, name: "פינוי המבנה והרחבה (0 ש\"ח)", start: 0, duration: 0.75, type: 'infra' },
        { id: 2, name: "תוכנית העמדה הנדסית (4,000 ש\"ח)", start: 0, duration: 0.5, type: 'infra' },
        { id: 3, name: "חשמול המבנה (7,000-10,000 ש\"ח)", start: 0.25, duration: 0.5, type: 'infra' },
        { id: 4, name: "הכנת ברז מים (3,000 ש\"ח)", start: 0.25, duration: 0.5, type: 'infra' },
      ]
    },
    {
      title: "שלב ב': רכש ושינוע ציוד (W3-6)",
      color: "bg-orange-500",
      tasks: [
        { id: 7, name: "רכישת ציוד חסר (1,500,000 ש\"ח)", start: 0.75, duration: 1.5, type: 'procurement' },
        { id: 8, name: "העברת ציוד קיים מאשדוד", start: 0.75, duration: 0.5, type: 'logistics' },
        { id: 9, name: "הובלה והתקנה - לוגיסטיקה (40,000 ש\"ח)", start: 1.25, duration: 0.5, type: 'logistics' },
      ]
    },
    {
      title: "שלב ג': התקנות והטמעה (W6-10)",
      color: "bg-green-600",
      tasks: [
        { id: 10, name: "התקנת קווי ייצור וסילוסים", start: 1.5, duration: 1, type: 'setup' },
        { id: 11, name: "הצבת מערבלים, אריזה ומכונות", start: 1.75, duration: 0.75, type: 'setup' },
        { id: 12, name: "חיבור קירור, חימום וסינון אוויר", start: 2, duration: 0.5, type: 'setup' },
        { id: 13, name: "הקמת מעבדה (180,000 ש\"ח)", start: 1.5, duration: 1, type: 'setup' },
        { id: 14, name: "הדרכות צוות (2 מפעילים + מנהל)", start: 2.25, duration: 0.25, type: 'setup' },
      ]
    },
    {
      title: "שלב ד': רגולציה ואישורים (במקביל)",
      color: "bg-purple-600",
      tasks: [
        { id: 5, name: "רישיון עסק - הגשה ואישורים", start: 0, duration: 4, type: 'admin' },
        { id: 6, name: "אישורי הגנת הסביבה", start: 1, duration: 3, type: 'admin' },
        { id: 17, name: "אישור ביטוחי למתקן", start: 2, duration: 1, type: 'admin' },
      ]
    },
    {
      title: "שלב ה': ארגון פסולת וחומרי גלם (W11-12)",
      color: "bg-teal-600",
      tasks: [
        { id: 19, name: "איסוף פסולת (בניין/אספלט) למוקדי ריכוז", start: 2.5, duration: 0.5, type: 'raw' },
        { id: 20, name: "גריסה וניפוי (קבלן חיצוני) לערמות", start: 2.6, duration: 0.4, type: 'raw' },
        { id: 21, name: "שינוע פסולת גרוסה למרכז האחזקה", start: 2.75, duration: 0.25, type: 'raw' },
        { id: 22, name: "איסוף והפרדת פלסטיק (ניילון/PVC)", start: 2.5, duration: 0.5, type: 'raw' },
      ]
    },
    {
      title: "שלב ו': תחילת ייצור והרצה (W12-13 ואילך)",
      color: "bg-red-500",
      tasks: [
        { id: 15, name: "ייצור תוספים לאספלט חם", start: 3, duration: 21, type: 'production' },
        { id: 16, name: "ייצור תערובת אספלט קר", start: 3.25, duration: 20.75, type: 'production' },
        { id: 18, name: "בקרת איכות שוטפת (QC)", start: 3, duration: 21, type: 'production' },
      ]
    }
  ];

  const totalMonths = 24;
  const monthWidth = 100; // px
  
  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const step = 300;
    // In RTL, scrollLeft is 0 at the right edge and becomes negative as we scroll left (into the future).
    // Or it might be positive depending on the browser. 
    // Standard way is to just use scrollBy.
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-right font-sans overflow-hidden" dir="rtl">
      {/* Top Banner */}
      <div className="bg-white border-b p-6 shadow-sm z-20">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Factory className="text-blue-600" />
              גאנט הקמת מתקן ירושלים - אקו בריק אינוביו
            </h1>
            <p className="text-slate-500 mt-1">מתווה 24 חודשים מעודכן | שלב ה' - הכנת חומרי גלם ופסולת</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleScroll('right')} title="אחורה" className="p-2 hover:bg-blue-50 rounded-lg border border-blue-200 text-blue-600 shadow-sm transition-all cursor-pointer"><ChevronRight size={24} /></button>
            <button onClick={() => handleScroll('left')} title="קדימה" className="p-2 hover:bg-blue-50 rounded-lg border border-blue-200 text-blue-600 shadow-sm transition-all cursor-pointer"><ChevronLeft size={24} /></button>
            <a href="/" className="mr-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-bold transition-all flex items-center gap-2">
              חזרה לאתר
            </a>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-blue-600"></div>תשתיות</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-orange-500"></div>רכש ושינוע</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-green-600"></div>התקנות</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-purple-600"></div>רגולציה</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-teal-600"></div>ארגון פסולת</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-4 h-4 rounded bg-red-500"></div>ייצור שוטף</div>
        </div>
      </div>

      {/* Main Gantt Grid */}
      <div className="flex-1 overflow-auto p-6" ref={scrollContainerRef}>
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 min-w-max relative">
          
          {/* Timeline Header */}
          <div className="flex flex-row border-b bg-slate-100 sticky top-0 z-30 h-16">
            <div className="gantt-sidebar p-4 font-bold border-l bg-slate-100 flex items-center shadow-[2px_0_5px_rgba(0,0,0,0.05)] text-slate-800 sticky right-0 z-40">
              משימה / אבן דרך
            </div>
            <div className="flex flex-row">
              {[...Array(totalMonths)].map((_, i) => (
                <div key={i} className={`gantt-month border-l text-center flex flex-col justify-center ${i < 4 ? 'bg-yellow-50/50' : ''}`} style={{ width: `${monthWidth}px` }}>
                  <span className="text-xs font-bold text-slate-700">חודש {i + 1}</span>
                  <span className="text-[10px] text-slate-400">{i < 3 ? `W${(i*4)+1}-${(i*4)+4}` : `Q${Math.floor(i/3)+1}`}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gantt Body */}
          <div className="relative">
            {phases.map((phase, pIdx) => (
              <div key={pIdx} className="border-b last:border-0">
                <div className="flex flex-row bg-slate-50/80 items-center">
                  <div className="gantt-sidebar p-3 font-bold text-slate-800 bg-slate-200/50 border-l flex items-center gap-2 sticky right-0 z-20">
                    <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                    {phase.title}
                  </div>
                  <div className="flex-1 h-10 border-b border-slate-100" style={{ width: `${totalMonths * monthWidth}px` }}></div>
                </div>

                {phase.tasks.map((task) => (
                  <div key={task.id} className="flex flex-row border-b border-slate-50 hover:bg-blue-50/30 transition-colors group">
                    <div className="gantt-sidebar p-3 text-xs sm:text-sm text-slate-700 border-l pr-10 flex items-center sticky right-0 bg-white z-20 group-hover:bg-blue-50/30 whitespace-normal leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 ml-3 flex-shrink-0"></div>
                      {task.name}
                    </div>
                    <div className="relative h-12 flex items-center" style={{ width: `${totalMonths * monthWidth}px` }}>
                      <div 
                        className={`h-7 rounded-md shadow-sm flex items-center px-3 text-[10px] sm:text-[11px] text-white font-semibold whitespace-nowrap overflow-hidden transition-all hover:brightness-110 ${phase.color}`}
                        style={{ marginRight: `${task.start * monthWidth}px`, width: `${task.duration * monthWidth}px` }}
                      >
                        {task.duration >= 0.8 && task.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pb-10">
          <div className="bg-white p-5 rounded-xl border border-teal-100 shadow-sm border-t-4 border-t-teal-600">
            <h3 className="font-bold text-teal-800 mb-3 flex items-center gap-2 border-b pb-2">
              <Recycle size={18} />
              ארגון פסולת (Phase E)
            </h3>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>• <b>מוקדי ריכוז:</b> איסוף פסולת בניין ואספלט לאתרים (הווטרינר).</li>
              <li>• <b>גריסה:</b> קבלן חיצוני לייצור שתי ערמות (אספלט גרוס / בניין נקי).</li>
              <li>• <b>פלסטיק:</b> הפרדת ניילון/PVC. במידה ועירוני - נדרש שטיפה וגריסה.</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm border-t-4 border-t-orange-500">
            <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2 border-b pb-2">
              <Coins size={18} />
              תקציב רכש מעודכן
            </h3>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>• <b>ציוד חסר:</b> 1,500,000 ₪ (אקסטרודר, מגרסה וכו').</li>
              <li>• <b>לוגיסטיקה:</b> 40,000 ₪ הובלת קו אשדוד וציוד חדש.</li>
              <li>• <b>מעבדה:</b> 180,000 ₪ להבטחת QC.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm border-t-4 border-t-blue-600">
            <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 border-b pb-2">
              <HardHat size={18} />
              הכנת תשתית (Phase A)
            </h3>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>• <b>חשמל ומים:</b> סה"כ כ-13,000 ₪ (כולל חשמלאי חוץ).</li>
              <li>• <b>הנדסה:</b> תוכנית העמדה לסינון אוויר וקירור (4,000 ₪).</li>
              <li>• <b>פינוי:</b> ניקוי השטח (0 ₪).</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm border-t-4 border-t-red-500">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2 border-b pb-2">
              <Factory size={18} />
              ייצור והרצה (Phase F)
            </h3>
            <ul className="text-xs space-y-2 text-slate-600">
              <li>• <b>אספלט חם/קר:</b> ייצור מבוסס בינדרים ואמולסיה.</li>
              <li>• <b>בקרת איכות:</b> בקר איכות נוכח יומיים בשבוע באתר.</li>
              <li>• <b>צוות:</b> 2 מפעילים + מנהל אתר (62,800 ₪ חודשי).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 text-white p-4 text-[11px] flex justify-between items-center shadow-inner mt-auto">
        <div className="flex gap-6">
          <span className="flex items-center gap-1 font-semibold text-teal-400 underline underline-offset-4">שיפור מיוחד: ניהול פסולת כחומר גלם (W11-12)</span>
        </div>
        <div className="flex gap-6">
          <span>פרויקט: אקו-בריק ירושלים (עדן)</span>
          <span className="opacity-70">|</span>
          <span>גרסה 3.0 - גריסה, ניפוי ושינוע פסולת</span>
        </div>
      </div>
    </div>
  );
};

export default App;
