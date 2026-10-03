import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function run() {
  const assetsDir = path.join(root, 'src', 'assets');
  const files = ['365logistics', 'germanmitharsh', 'vertexairsea', 'aesphotography', 'grnlsupplychain'];

  for (const name of files) {
    const webpPath = path.join(assetsDir, `${name}.webp`);
    const avifPath = path.join(assetsDir, `${name}.avif`);
    if (!fs.existsSync(webpPath)) {
      console.log(`Skipping AVIF conversion for ${name}: WebP file not found.`);
      continue;
    }
    const buffer = fs.readFileSync(webpPath);
    console.log(`Processing ${name} to AVIF...`);
    await sharp(buffer).avif({ quality: 75, effort: 6 }).toFile(avifPath);
    console.log(`Done ${name}.avif:`, fs.statSync(avifPath).size, 'bytes');
  }
}

run().catch(console.error);
