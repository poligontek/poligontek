import path from 'node:path';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(path.join(path.dirname(path.dirname(process.execPath)),'node_modules','playwright'));
const base=process.argv[2]||'http://127.0.0.1:4321';
let checks=0;
function check(value,message){checks++;if(!value)throw Error(message);}
await fs.mkdir('.site-artifacts',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 for(const width of [360,768,1440])for(const lang of ['es','en','pt']){
  const context=await browser.newContext({viewport:{width,height:1000}});
  const page=await context.newPage();const errors=[];const failed=[];
  page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
  const url=lang==='es'?'/':`/${lang}/`;
  await page.goto(base+url,{waitUntil:'networkidle'});
  check(await page.locator('script[src*="googletagmanager"]').count()===0,'Analytics absent before consent');
  await page.locator('[data-consent="denied"]').click();
  check(await page.locator('html').getAttribute('lang')===lang,'HTML language');
  check(await page.locator('main > section').count()===5,'Five agreed sections');
  check(await page.locator('h1').count()===1,'Single main heading');
  check(await page.locator('link[hreflang]').count()===4,'Four alternate language links');
  check(await page.locator('link[rel=canonical]').getAttribute('href')==='https://poligontek.com'+url,'Correct self canonical');
  check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No horizontal overflow');
  await page.locator('#trabajos').scrollIntoViewIfNeeded();
  await page.locator('.project-browser img').evaluate(el=>el.decode());
  check(await page.locator('.project-browser img').evaluate(el=>el.complete&&el.naturalWidth>0),'Localized screenshot loads');
  check(await page.locator('.site-header').evaluate(el=>Math.abs(el.getBoundingClientRect().top)<1),'Navbar remains at top');
  check(await page.locator('[data-project="realfat32"] .btn-primary').getAttribute('href')==='https://realfat32.poligontek.com'+url,'Localized product destination');
  check(await page.locator('#trabajos article.project').count()===2,'Two actual portfolio projects');
  check(await page.locator('#ubotw .btn-primary').getAttribute('href')==='https://ubotw.poligontek.com/','UBotW product destination');
  await page.locator('#ubotw img').evaluate(el=>el.decode());
  check(await page.locator('#ubotw img').evaluate(el=>el.complete&&el.naturalWidth>0),'UBotW screenshot loads');
  if(width===360){await page.locator('.menu-toggle').click();check(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='true','Mobile menu opens');await page.locator('#main-nav a[href="#proceso"]').click();check(await page.locator('.menu-toggle').getAttribute('aria-expanded')==='false','Mobile menu closes after navigation');}
  await page.locator('.language-menu summary').click();const target=lang==='en'?'pt':'en';await page.locator(`.language-options a[lang="${target}"]`).click();await page.waitForURL(base+`/${target}/`);
  check(await page.locator('html').getAttribute('lang')===target,'Language switch navigates to translated page');
  await page.locator('#open-privacy').click();check(await page.locator('dialog').evaluate(el=>el.open),'Privacy dialog opens');await page.locator('dialog form button').click();check(!await page.locator('dialog').evaluate(el=>el.open),'Privacy dialog closes');
  check(errors.length===0,'No browser errors');check(failed.length===0,'No failed resources');
  await page.goto(base+url,{waitUntil:'networkidle'});
  await page.screenshot({path:`.site-artifacts/poligontek-${lang}-${width}.png`,fullPage:true});
  await context.close();
 }
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto(base+'/en/');check((await page.locator('h1').innerText()).includes('Good ideas.'),'English content available without JavaScript');check(await page.locator('main > section').count()===5,'Sections work without JavaScript');await context.close();
 console.log(`PASS: ${checks} checks across 3 languages and 3 viewport widths, menus, privacy and static content.`);
}finally{await browser.close();}
