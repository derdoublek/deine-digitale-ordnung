import type {Employee} from './calculation';
export type ImportEntry={index:number,bk:number,nk:number,gk:number};
export function parseWhatsApp(input:string,people:Employee[],date:string){
 const clean=input.replace(/[\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,'');
 const normalized=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const find=(s:string)=>{const text=normalized(s);const matches=people.map((p,index)=>({p,index})).filter(({p})=>{const name=normalized(p.name);return text.includes(name)||new RegExp('(^|[^a-z])'+name.split(' ')[0].replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'([^a-z]|$)').test(text)});return matches.length===1?matches[0].index:-1;};
 const entries:ImportEntry[]=[];const warnings:string[]=[];let target=-1;let counts={bk:0,nk:0,gk:0};let found=false;
 const flush=()=>{if(found){if(target<0)warnings.push('Zahlen ohne eindeutigen Mitarbeiter erkannt.');else if(entries.some(e=>e.index===target))warnings.push('Mehrere Meldungen für '+people[target].name+' – bitte einzeln importieren.');else entries.push({index:target,...counts});}counts={bk:0,nk:0,gk:0};found=false;};
 for(const line of clean.split(/\r?\n/)){if(!line.trim())continue;let body=line;const header=line.match(/^\[(\d{1,2})\.(\d{1,2})\.[^\]]*\]\s*([^:]+):\s*(.*)$/);if(header){flush();target=find(header[3]);body=header[4];if(Number(header[1])!==Number(date.slice(8,10))||Number(header[2])!==Number(date.slice(5,7)))warnings.push('WhatsApp-Datum passt nicht zum gewählten Arbeitstag.');}
 const named=find(body);if(body.includes('@')){flush();target=named;if(named<0)warnings.push('Erwähnter Mitarbeiter nicht eindeutig erkannt.');}else if(named>=0){flush();target=named;}
 for(const m of body.matchAll(/\b(\d+)\s*(BK|NK|GK)\b/gi)){const n=Number(m[1]);if(!Number.isSafeInteger(n)||n>10000){warnings.push('Auftragszahl prüfen.');continue;}counts[m[2].toLowerCase() as 'bk'|'nk'|'gk']+=n;found=true;}
 }
 flush();return {entries,warnings:[...new Set(warnings)]};
}
