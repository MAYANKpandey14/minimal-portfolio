import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function processOne(inputPath, webpPath, width) {
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping (source missing): ${path.basename(inputPath)}`);
    return;
  }
  const buffer = fs.readFileSync(inputPath);
  await sharp(buffer)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(webpPath);
}

async function run() {
  const assetsDir = path.join(root, 'src', 'assets');
  const publicDir = path.join(root, 'public');

  const jobs = [
    { input: '365logistics.in_.png', output: '365logistics.webp' },
    { input: 'www.germanmitharsh.com_.png', output: 'germanmitharsh.webp' },
    { input: 'www.vertexairsea.com_.png', output: 'vertexairsea.webp' },
    { input: 'www.aesphotography.in_ (1).png', output: 'aesphotography.webp' },
    { input: 'grnlsupplychain.com_ (1).png', output: 'grnlsupplychain.webp' }
  ];

  for (const job of jobs) {
    const inputPath = path.join(assetsDir, job.input);
    const webpPath = path.join(assetsDir, job.output);
    console.log(`Converting ${job.input} -> ${job.output}...`);
    await processOne(inputPath, webpPath, 1400);
    if (fs.existsSync(webpPath)) {
      console.log(`${job.output} done:`, fs.statSync(webpPath).size, 'bytes');
    }
  }

  const profileInput = path.join(publicDir, 'profile-pic.png');
  const profileOutput = path.join(publicDir, 'profile-pic.webp');
  if (fs.existsSync(profileInput)) {
    console.log('Converting profile-pic...');
    const profileBuffer = fs.readFileSync(profileInput);
    await sharp(profileBuffer)
      .resize({ width: 256, height: 256, fit: 'cover' })
      .webp({ quality: 85 })
      .toFile(profileOutput);
    console.log('profile-pic done:', fs.statSync(profileOutput).size, 'bytes');
  }

  console.log('ALL WEBP IMAGES PROCESSED SUCCESSFULLY');
}

run().catch(console.error);
