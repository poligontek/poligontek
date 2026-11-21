const measurementId='G-41LSJ1CX69';
const preferenceKey='poligontek-analytics-v1';
const banner=document.getElementById('analytics-consent');
const analyticsWindow=window as typeof window & {dataLayer?: unknown[];gtag?:(...args:unknown[])=>void;[key:string]:unknown};
let started=false;
function start(){
 if(started)return;started=true;
 analyticsWindow['ga-disable-'+measurementId]=false;
 analyticsWindow.dataLayer=analyticsWindow.dataLayer||[];
 analyticsWindow.gtag=function(){analyticsWindow.dataLayer!.push(arguments);};
 const gtag=analyticsWindow.gtag;
 gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 gtag('js',new Date());
 let referrer='';try{if(document.referrer)referrer=new URL(document.referrer).origin;}catch{}
 gtag('config',measurementId,{allow_google_signals:false,allow_ad_personalization_signals:false,cookie_domain:location.hostname,cookie_prefix:'poligontek',page_location:location.origin+location.pathname,page_referrer:referrer});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+measurementId;document.head.appendChild(script);
}
function save(value:string){
 try{localStorage.setItem(preferenceKey,value);}catch{}
 if(banner)banner.hidden=true;
 if(value==='granted')start();
 else{
  analyticsWindow['ga-disable-'+measurementId]=true;
  for(const cookie of document.cookie.split(';')){const name=cookie.split('=')[0].trim();if(name.startsWith('poligontek_ga'))for(const domain of ['',location.hostname,'.'+location.hostname])document.cookie=`${name}=; Max-Age=0; Path=/; ${domain?'Domain='+domain+'; ':''}SameSite=Lax; Secure`;}
  if(started)location.reload();
 }
}
document.querySelectorAll<HTMLButtonElement>('[data-consent]').forEach(button=>button.addEventListener('click',()=>save(button.dataset.consent!)));
document.getElementById('analytics-settings')?.addEventListener('click',()=>{document.querySelector<HTMLDialogElement>('#privacy-dialog')?.close();if(banner){banner.hidden=false;banner.querySelector<HTMLButtonElement>('button')?.focus();}});
document.querySelectorAll<HTMLAnchorElement>('[data-project] a').forEach(link=>link.addEventListener('click',()=>{if(started)analyticsWindow.gtag?.('event','project_click',{project_name:link.closest<HTMLElement>('[data-project]')?.dataset.project,language:document.documentElement.lang});}));
let preference;try{preference=localStorage.getItem(preferenceKey);}catch{}
if(preference==='granted')start();else if(preference!=='denied'&&banner)banner.hidden=false;
