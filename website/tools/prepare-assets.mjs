import fs from 'node:fs/promises';
import sharp from 'sharp';
await fs.mkdir('public/images',{recursive:true});
for(const language of ['es','en','pt']) await sharp(`../RealFat32/Web/dist/assets/screenshot-${language}.png`).webp({quality:88}).toFile(`public/images/realfat32-${language}.webp`);
const svg=Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f6f8ff"/><rect x="64" y="64" width="64" height="64" rx="14" fill="#2545d4"/><path d="M82 112V80h19l11 11-11 11H91v10zm9-19h7l3-3-3-3h-7z" fill="white"/><text x="148" y="110" font-family="Segoe UI,Arial" font-size="44" font-weight="700" fill="#151c32">PoligonTek</text><text x="64" y="290" font-family="Segoe UI,Arial" font-size="94" font-weight="700" fill="#151c32">Good ideas.</text><text x="64" y="400" font-family="Segoe UI,Arial" font-size="94" font-weight="700" fill="#2545d4">Software that works.</text><text x="68" y="535" font-family="Segoe UI,Arial" font-size="29" fill="#586174">Software · Apps · Web</text></svg>`);
await sharp(svg).png().toFile('public/images/social-card.png');
console.log('Prepared three localized product images and the social card.');
