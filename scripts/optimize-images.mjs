import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function processOne(inputPath, webpPath, width) {
  const buffer = fs.readFileSync(inputPath);
  await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(webpPath);
}

async function run() {
  const assetsDir = path.join(root, 'src', 'assets');
  const publicDir = path.join(root, 'public');

  console.log('Converting vertexairsea...');
  await processOne(
    path.join(assetsDir, 'www.vertexairsea.com_.png'),
    path.join(assetsDir, 'vertexairsea.webp'),
    1400
  );
  console.log('vertexairsea done:', fs.statSync(path.join(assetsDir, 'vertexairsea.webp')).size);

  console.log('Converting aesphotography...');
  await processOne(
    path.join(assetsDir, 'www.aesphotography.in_ (1).png'),
    path.join(assetsDir, 'aesphotography.webp'),
    1400
  );
  console.log('aesphotography done:', fs.statSync(path.join(assetsDir, 'aesphotography.webp')).size);

  console.log('Converting grnlsupplychain...');
  await processOne(
    path.join(assetsDir, 'grnlsupplychain.com_ (1).png'),
    path.join(assetsDir, 'grnlsupplychain.webp'),
    1400
  );
  console.log('grnlsupplychain done:', fs.statSync(path.join(assetsDir, 'grnlsupplychain.webp')).size);

  console.log('Converting profile-pic...');
  const profileBuffer = fs.readFileSync(path.join(publicDir, 'profile-pic.png'));
  await sharp(profileBuffer)
    .resize({ width: 256, height: 256, fit: 'cover' })
    .webp({ quality: 85 })
    .toFile(path.join(publicDir, 'profile-pic.webp'));
  console.log('profile-pic done:', fs.statSync(path.join(publicDir, 'profile-pic.webp')).size);

  console.log('ALL IMAGES PROCESSED SUCCESSFULLY');
}

run().catch(console.error);
