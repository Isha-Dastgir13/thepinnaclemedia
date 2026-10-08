import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, 'public', 'assets');

const ASSETS = [
  // Brand & Nav
  '/assets/footer-logo-v2.png',
  '/assets/wordmark-white.png',
  '/assets/wordmark-ink.png',
  '/assets/favicon.png',
  '/assets/logo.png',
  '/assets/reach-out-bg.svg',
  '/assets/footer-bg.svg',
  '/assets/home/creative-bg.svg',

  // Spends Marquee
  '/assets/spends/bhs.png',
  '/assets/spends/cured.png',
  '/assets/spends/ES.png',
  '/assets/spends/ghar.png',
  '/assets/spends/histrips.png',
  '/assets/spends/HOA.png',
  '/assets/spends/natures-sunrise.png',
  '/assets/spends/obsessive.png',
  '/assets/spends/old-money.png',
  '/assets/spends/sana.png',

  // Growth Partners Marquee
  '/assets/logos/meta.png',
  '/assets/logos/google.png',
  '/assets/logos/tiktok.png',
  '/assets/logos/snapchat-v1.png',
  '/assets/logos/skala-media.png',
  '/assets/logos/suits-finnance.png',
  '/assets/logos/whop.png',
  '/assets/logos/ooptics.png',
  '/assets/logos/incogniton.png',
  '/assets/logos/growthmodo.png',
  '/assets/logos/slash.png',
  '/assets/logos/ecover-solutions.png',
  '/assets/logos/swaped.png',
  '/assets/logos/nexcale.png',

  // Client 3000+ Logos
  '/assets/home/logos/0001.png',
  '/assets/home/logos/0002.png',
  '/assets/home/logos/0003.png',
  '/assets/home/logos/0004.png',
  '/assets/home/logos/0005.png',
  '/assets/home/logos/0006.png',
  '/assets/home/logos/0007.png',
  '/assets/home/logos/0008.png',
  '/assets/home/logos/0009.png',
  '/assets/home/logos/00010.png',
  '/assets/home/logos/00011.png',
  '/assets/home/logos/00012.png',
  '/assets/home/logos/00013.png',
  '/assets/home/logos/00014.png',
  '/assets/home/logos/00015.png',

  // Icons
  '/assets/home/trends.svg',
  '/assets/home/user.svg',
  '/assets/home/map.svg',
  '/assets/home/reload.svg',
  '/assets/home/compas.svg',
  '/assets/home/check.svg',
  '/assets/home/time.svg',
  '/assets/home/coins.svg',
  '/assets/home/headphone.svg',

  // UGC Creatives (matching live Vercel names)
  '/assets/ugc/image-1.jpeg',
  '/assets/ugc/image-2.jpeg',
  '/assets/ugc/image-03.jpeg',
  '/assets/ugc/image-3.jpeg',
  '/assets/ugc/image-4.jpeg',
  '/assets/ugc/image-5.png',
  '/assets/ugc/image-6.png',
  '/assets/ugc/image-7.png',
  '/assets/ugc/image-8.jpeg',

  // Testimonial Posters & Videos
  '/assets/posters/testimonial-1.jpg',
  '/assets/posters/testimonial-2.jpg',
  '/assets/posters/testimonial-3.jpg',
  '/assets/posters/testimonial-4.jpg',
  '/assets/posters/testimonial-5.jpg',
  '/assets/posters/testimonial-6.jpg',
  '/assets/videos/Testimonial-1.mp4',
  '/assets/videos/Testimonial-2.mp4',
  '/assets/videos/Testimonial-3.mp4',
  '/assets/videos/Testimonial-4.mp4',
  '/assets/videos/Testimonial-5.mp4',
  '/assets/videos/Testimonial-6.mp4',

  // Founders & About
  '/assets/about/founders-v2.png',
  '/assets/about/hero.JPG',

  // Hero Videos / Posters
  '/assets/home/home-hero.webm',
  '/assets/home/home-hero-1280.webm',
  '/assets/creative-720.mp4',
  '/assets/posters/creative.jpg',

  // Social Icons
  '/assets/instagram.jpg',
  '/assets/linkedin.png',
  '/assets/facebook.png',
  '/assets/x-v1.png'
];

const BASES = [
  'https://www.thepinnacle.media',
  'https://pinnaclemedia-one.vercel.app'
];

async function downloadAsset(relPath) {
  const localPath = path.join(__dirname, 'public', relPath);
  const dir = path.dirname(localPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const base of BASES) {
    const url = `${base}${relPath}`;
    try {
      const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (resp.ok) {
        const buffer = await resp.arrayBuffer();
        fs.writeFileSync(localPath, Buffer.from(buffer));
        console.log(`[OK] ${relPath} from ${base} (${buffer.byteLength} bytes)`);
        return { path: relPath, status: 'OK', size: buffer.byteLength, source: base };
      }
    } catch (err) {
      // try next
    }
  }

  console.warn(`[MISSING] ${relPath} could not be fetched from either base`);
  return { path: relPath, status: 'MISSING' };
}

async function main() {
  console.log(`Starting asset verification and download... Total to check: ${ASSETS.length}`);
  const results = [];
  for (const asset of ASSETS) {
    const res = await downloadAsset(asset);
    results.push(res);
  }

  const ok = results.filter(r => r.status === 'OK');
  const missing = results.filter(r => r.status === 'MISSING');
  console.log(`\n=== SUMMARY ===`);
  console.log(`Downloaded: ${ok.length}`);
  console.log(`Missing: ${missing.length}`);
  if (missing.length > 0) {
    console.log(`Missing assets:`, missing.map(m => m.path));
  }
}

main();
