import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function createOgImage() {
  const publicDir = path.join(root, 'public');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090D16" />
        <stop offset="50%" stop-color="#0B0F17" />
        <stop offset="100%" stop-color="#08101A" />
      </linearGradient>
      <radialGradient id="emerald-glow" cx="85%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#10B981" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="cyan-glow" cx="15%" cy="85%" r="45%">
        <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#06B6D4" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#E2E8F0" />
      </linearGradient>
      <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#10B981" />
        <stop offset="100%" stop-color="#34D399" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg-grad)" />
    <rect width="1200" height="630" fill="url(#emerald-glow)" />
    <rect width="1200" height="630" fill="url(#cyan-glow)" />

    <!-- Grid / Matrix subtle texture pattern -->
    <g opacity="0.08" stroke="#10B981" stroke-width="1">
      <path d="M 0 100 L 1200 100 M 0 200 L 1200 200 M 0 300 L 1200 300 M 0 400 L 1200 400 M 0 500 L 1200 500" />
      <path d="M 150 0 L 150 630 M 300 0 L 300 630 M 450 0 L 450 630 M 600 0 L 600 630 M 750 0 L 750 630 M 900 0 L 900 630 M 1050 0 L 1050 630" />
    </g>

    <!-- Outer border -->
    <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#1E293B" stroke-width="2" />
    <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="#10B981" stroke-width="1" opacity="0.3" />

    <!-- Brand Header -->
    <g transform="translate(80, 85)">
      <!-- Terminal / Code Badge -->
      <rect x="0" y="0" width="210" height="42" rx="21" fill="#131C2E" stroke="#10B981" stroke-width="1" stroke-opacity="0.4" />
      <text x="24" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#10B981">&lt;mayankpandey/&gt;</text>
      
      <!-- Availability pill -->
      <g transform="translate(770, 0)">
        <rect x="0" y="0" width="270" height="42" rx="21" fill="#131C2E" stroke="#334155" stroke-width="1" />
        <circle cx="24" cy="21" r="5" fill="#10B981" />
        <text x="38" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#94A3B8">Available for Client Projects</text>
      </g>
    </g>

    <!-- Main Typography Content -->
    <g transform="translate(80, 190)">
      <!-- Name -->
      <text x="0" y="65" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="url(#text-grad)" letter-spacing="-0.03em">
        Mayank Pandey
      </text>

      <!-- Role / Headline -->
      <text x="0" y="125" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="700" fill="url(#accent-grad)">
        Freelance Web Designer &amp; Developer
      </text>

      <!-- Description -->
      <text x="0" y="180" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#94A3B8">
        Building high-converting websites and modern web apps engineered for speed, trust, and online growth.
      </text>
    </g>

    <!-- Pill tags bottom -->
    <g transform="translate(80, 480)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="220" height="46" rx="23" fill="#131C2E" stroke="#10B981" stroke-width="1" stroke-opacity="0.3" />
      <text x="24" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0">✦ Custom Web Design</text>

      <!-- Pill 2 -->
      <rect x="236" y="0" width="205" height="46" rx="23" fill="#131C2E" stroke="#10B981" stroke-width="1" stroke-opacity="0.3" />
      <text x="260" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0">⚡ Sub-Second Speed</text>

      <!-- Pill 3 -->
      <rect x="457" y="0" width="215" height="46" rx="23" fill="#131C2E" stroke="#10B981" stroke-width="1" stroke-opacity="0.3" />
      <text x="481" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0">📈 Google SEO Ranked</text>

      <!-- Pill 4 -->
      <rect x="688" y="0" width="195" height="46" rx="23" fill="#131C2E" stroke="#10B981" stroke-width="1" stroke-opacity="0.3" />
      <text x="712" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#E2E8F0">⚛ React &amp; TypeScript</text>
    </g>

    <!-- Bottom URL watermark -->
    <g transform="translate(80, 560)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#64748B">
        mayankpandey.dev
      </text>
    </g>
  </svg>
  `;

  const svgBuffer = Buffer.from(svg);

  // Generate PNG 1200x630 (universal social preview card)
  const pngPath = path.join(publicDir, 'og-image.png');
  await sharp(svgBuffer)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(pngPath);
  console.log('Generated public/og-image.png:', fs.statSync(pngPath).size, 'bytes');

  // Generate WebP 1200x630
  const webpPath = path.join(publicDir, 'og-image.webp');
  await sharp(svgBuffer)
    .webp({ quality: 90 })
    .toFile(webpPath);
  console.log('Generated public/og-image.webp:', fs.statSync(webpPath).size, 'bytes');
}

createOgImage().catch(console.error);
