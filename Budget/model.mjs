export function calculate(d){
 const s=d.settings,n=x=>Number(x)||0,I=r=>n(s[r]), machines=I(5),months=[];
 const fx=s[6]==='ILS'?1:s[6]==='USD'?I(7):I(8);
 const wasteMix=d.waste.reduce((a,r)=>a+n(r[1]),0),productMix=d.products.reduce((a,r)=>a+n(r[1]),0);
 const gate=d.waste.reduce((a,r)=>a+n(r[1])*n(r[2]),0),wasteCost=d.waste.reduce((a,r)=>a+n(r[1])*(n(r[3])+n(r[4])),0),productPrice=d.products.reduce((a,r)=>a+n(r[1])*n(r[2]),0);
 const equipment=d.equipment.map(r=>{const count=machines===0?0:n(r[2])+(n(r[3])>0?Math.ceil(machines/n(r[3])):0);return {count,capex:count*n(r[1]),power:count*n(r[4])*n(r[5])}});
 const equipmentCount=equipment.reduce((a,r)=>a+r.count,0),power=equipment.reduce((a,r)=>a+r.power,0),capex=equipment.reduce((a,r)=>a+r.capex,0)*(1+I(31));
 const steadyTons=machines*I(11)*I(12)*I(13)*I(14);
 let fixed=0,fixedWage=0,variable=0,variableWage=0;
 const costs=d.costs.map(r=>{const isWage=r[1]==='Payroll',mult=isWage?1+I(19):1,price=n(r[2])*mult;let qty=0;
 if(r[3]==='Unit'||r[3]==='Equipment item'){qty=r[3]==='Equipment item'?equipmentCount:n(r[4])+(n(r[5])>0?Math.ceil(machines/n(r[5])):0);fixed+=price*qty;if(isWage)fixedWage+=price*qty}
 else {const perWaste=r[3]==='Product tonne'?I(15):1;qty=steadyTons*perWaste;variable+=price*perWaste;if(isWage)variableWage+=price*perWaste}
 return {qty,amount:qty*price};});
 let cash=I(29),ar=0,ap=0,depreciated=0,gap=0;
 for(let m=0;m<48;m++){
 const year=Math.floor(m/12),inflation=(1+I(24))**year,run=n(d.ramp[m]),hours=I(12)*I(13)*I(14)*run,waste=machines*hours*I(11),product=waste*I(15);
 const sales=product*productPrice*(1+I(22))**year,gates=waste*gate*(1+I(23))**year,revenue=sales+gates;
 const raw=waste*wasteCost*inflation,binder=product*I(16)/1000*I(17)*inflation,electricity=power*hours*I(18)*inflation,other=waste*variable*inflation,overhead=fixed*inflation,opex=raw+binder+electricity+other+overhead,ebitda=revenue-opex;
 const dep=Math.min(capex*I(25)/12,Math.max(0,capex-depreciated));depreciated+=dep;const beforeTax=ebitda-dep,tax=Math.max(0,beforeTax)*I(26),profit=beforeTax-tax;
 const wage=(fixedWage+waste*variableWage)*inflation,supplierExpense=opex-wage;
 const receipts=I(27)===0?revenue:(m<I(27)?0:months[m-I(27)]?.revenue??0),payments=I(28)===0?supplierExpense:(m<I(28)?0:months[m-I(28)]?.supplierExpense??0);
 const operatingCash=receipts-payments-wage-tax,investment=m===0?capex:0,equity=m===0?I(30):0,change=operatingCash-investment+equity,opening=cash;
 cash+=change;ar+=revenue-receipts;ap+=supplierExpense-payments;gap=Math.max(gap,-cash,0);
 months.push({month:m+1,date:new Date(I(20),I(21)-1+m,1),run,hours,waste,product,sales,gates,revenue,raw,binder,electricity,other,overhead,opex,ebitda,margin:revenue?ebitda/revenue:0,dep,beforeTax,tax,profit,receipts,payments,wage,supplierExpense,operatingCash,investment,equity,change,opening,cash,ar,ap,gap,netEquipment:capex-depreciated});
 }
 const sumKeys=['waste','product','sales','gates','revenue','raw','binder','electricity','other','overhead','opex','ebitda','dep','beforeTax','tax','profit','operatingCash','investment','equity'];
 const years=Array.from({length:4},(_,y)=>{const group=months.slice(y*12,y*12+12),v={...group[11]};for(const key of sumKeys)v[key]=group.reduce((a,r)=>a+r[key],0);v.margin=v.revenue?v.ebitda/v.revenue:0;return v});
 const errors=[];if(Math.abs(wasteMix-1)>1e-6)errors.push('Waste mix must total 100%.');if(Math.abs(productMix-1)>1e-6)errors.push('Product mix must total 100%.');
 if(!(fx>0))errors.push('Enter a positive exchange rate for the selected currency.');
 if(d.waste.some(r=>n(r[1])>0&&(r[2]===null||r[2]==='')))errors.push('Enter a gate fee for every active waste stream, including an explicit zero when applicable.');
 if(d.products.some(r=>n(r[1])>0&&(r[2]===null||r[2]==='')))errors.push('Enter a price for every active product.');
 if(!Number.isInteger(machines)||machines<0)errors.push('Machine count must be a nonnegative whole number.');
 if([27,28].some(r=>!Number.isInteger(I(r))||I(r)<0||I(r)>24))errors.push('Customer and supplier credit terms must be whole months from 0 to 24.');
 if(d.ramp.some(r=>n(r)<0||n(r)>1)||I(14)<0||I(14)>1)errors.push('Utilization and ramp-up must be between 0% and 100%.');
 if(I(12)>24||I(12)<0||I(13)>31||I(13)<0)errors.push('Check the working hours and days.');
 return {months,years,fx,wasteMix,productMix,gate,productPrice,wasteCost,equipment,equipmentCount,power,capex,costs,steadyTons,errors,gap};
}
