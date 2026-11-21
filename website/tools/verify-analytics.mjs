import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(path.join(path.dirname(path.dirname(process.execPath)),'node_modules','playwright'));
const base=process.argv[2]||'http://127.0.0.1:4321';
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const context=await browser.newContext();const page=await context.newPage();const requests=[];
 page.on('request',r=>{if(/google-analytics|googletagmanager/.test(r.url()))requests.push(r.url());});
 await page.goto(base,{waitUntil:'networkidle'});
 if(requests.length)throw Error('Analytics requested before consent');
 await page.locator('[data-consent="denied"]').click();await page.reload({waitUntil:'networkidle'});
 if(requests.length)throw Error('Analytics requested after rejection');
 await page.locator('#open-privacy').click();await page.locator('#analytics-settings').click();
 if(await page.locator('dialog').evaluate(el=>el.open))throw Error('Privacy dialog blocks consent controls');
 const received=page.waitForResponse(r=>/google-analytics\.com\/g\/collect/.test(r.url())&&r.url().includes('tid=G-41LSJ1CX69'),{timeout:45000});
 await page.locator('[data-consent="granted"]').click();
 const response=await received;if(![200,204].includes(response.status()))throw Error('Google rejected Analytics request');
 if(!requests.some(url=>url.includes('id=G-41LSJ1CX69')))throw Error('Incorrect Analytics stream');
 const projectEvent=page.waitForRequest(r=>/google-analytics\.com\/g\/collect/.test(r.url())&&(r.url()+'\n'+(r.postData()||'')).includes('project_click'),{timeout:45000});
 await page.locator('#ubotw .btn-primary').click();await projectEvent;
 await page.locator('#open-privacy').click();await page.locator('#analytics-settings').click();
 await Promise.all([page.waitForNavigation({waitUntil:'networkidle'}),page.locator('[data-consent="denied"]').click()]);
 if(await page.locator('script[src*="googletagmanager"]').count())throw Error('Analytics loaded after revoking consent');
 if((await context.cookies()).some(cookie=>cookie.name.startsWith('poligontek_ga')))throw Error('Analytics cookies remain after revocation');
 console.log('PASS: no tracking before consent or after rejection; acceptance sends a successful collection request; project_click is recorded; consent can be revoked and cookies removed.');
 await context.close();
}finally{await browser.close();}
