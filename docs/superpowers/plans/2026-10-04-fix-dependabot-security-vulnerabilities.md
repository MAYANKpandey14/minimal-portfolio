# Dependabot Security Vulnerabilities Remediation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely eliminate all 22 open Dependabot security vulnerabilities across 10 packages in `package.json` and `package-lock.json`, verifying that the application builds, lints, and runs with zero regressions.

**Architecture:** Update direct dependencies (`react-router-dom`, `postcss`, `sharp`) to their latest secure releases and configure fine-grained npm `overrides` for transitive dependencies (`js-yaml`, `nanoid`, `browserslist`, `brace-expansion` [both 1.x and 2.x trees], `baseline-browser-mapping`, `@humanfs/node`, and `postcss-selector-parser`). Regenerate `package-lock.json` and run rigorous automated validation (types, linter, production build).

**Tech Stack:** Node.js 20+, npm 10+, React 19, Vite 7, PostCSS 8, Sharp 0.35, Tailwind CSS v4.

---

## 100% Vulnerability Coverage Matrix (All 22 Alerts)

| Alert # | Package | Severity | Current Version | CVE / Advisory | Required Version | Remediation Mechanism |
|---|---|---|---|---|---|---|
| **#75** | `react-router` | 🔴 High | `7.11.0` | RSC Mode CSRF Bypass | `>= 7.18.2` | Direct dependency bump in `package.json` |
| **#66** | `react-router` | 🔴 High | `7.11.0` | CVE-2026-55685 | `>= 7.18.0` | Direct dependency bump in `package.json` |
| **#68** | `react-router` | 🟡 Medium | `7.11.0` | CVE-2026-53669 | `>= 7.18.0` | Direct dependency bump in `package.json` |
| **#67** | `react-router` | 🟡 Medium | `7.11.0` | CVE-2026-53666 | `>= 7.18.0` | Direct dependency bump in `package.json` |
| **#63** | `react-router` | 🟡 Medium | `7.11.0` | CVE-2026-53668 | `>= 7.13.0` | Direct dependency bump in `package.json` |
| **#62** | `react-router` | 🟡 Medium | `7.11.0` | CVE-2026-53667 | `>= 7.18.0` | Direct dependency bump in `package.json` |
| **#72** | `postcss` | 🔴 High | `8.5.6` | CVE-2026-73646 | `>= 8.5.18` | Direct devDependency bump + npm override |
| **#71** | `postcss` | 🔴 High | `8.5.6` | CVE-2026-45623 | `>= 8.5.12` | Direct devDependency bump + npm override |
| **#81** | `postcss` | 🟡 Medium | `8.5.6` | CVE-2026-69153 | `>= 8.5.23` | Direct devDependency bump + npm override |
| **#77** | `postcss` | 🟡 Medium | `8.5.6` | CVE-2026-41305 | `>= 8.5.10` | Direct devDependency bump + npm override |
| **#92** | `sharp` | 🔴 High | `0.35.3` | GHSA-g89c-p67h-r497 | `>= 0.35.4` | Direct devDependency bump to `^0.35.5` |
| **#93** | `js-yaml` | 🔴 High | `4.1.1` | CVE-2026-84375 | `>= 4.3.2` | Transitive npm override |
| **#82** | `js-yaml` | 🔴 High | `4.1.1` | GHSA-2jg2-4ch7-h545 | `>= 4.3.1` | Transitive npm override |
| **#64** | `js-yaml` | 🔴 High | `4.1.1` | CVE-2026-59869 | `>= 4.3.0` | Transitive npm override |
| **#61** | `js-yaml` | 🟡 Medium | `4.1.1` | CVE-2026-53550 | `>= 4.2.0` | Transitive npm override |
| **#90** | `browserslist` | 🔴 High | `4.28.1` | CVE-2026-73088 | `>= 4.28.7` | Transitive npm override |
| **#88** | `nanoid` | 🔴 High | `3.3.11` | CVE-2026-73086 | `>= 3.3.12` | Transitive npm override |
| **#78** | `brace-expansion` (2.x) | 🔴 High | `2.0.2` | CVE-2026-13149 | `>= 2.1.2` | Subtree override (`@typescript-eslint/typescript-estree`) |
| **#69** | `brace-expansion` (1.x) | 🔴 High | `1.1.12` | CVE-2026-13149 | `>= 1.1.16` | Root override for 1.x consumers |
| **#87** | `@humanfs/node` | 🟡 Medium | `0.16.7` | GHSA-humanfs | `>= 0.16.8` | Transitive npm override |
| **#91** | `baseline-browser-mapping` | 🟡 Medium | `2.9.11` | CVE-2026-45819 | `>= 2.11.0` | Transitive npm override |
| **#86** | `postcss-selector-parser` | 🟢 Low | `6.1.2` | CVE-2026-9358 | `>= 6.1.3` | Transitive npm override |

---

### Task 1: Update Direct Dependencies in `package.json`

**Files:**
- Modify: `package.json:59, 78, 79`

- [ ] **Step 1: Check existing values in `package.json`**

Verify lines:
- Line 59: `"react-router-dom": "^7.11.0"`
- Line 78: `"postcss": "^8.5.6"`
- Line 79: `"sharp": "^0.35.3"`

- [ ] **Step 2: Update direct dependency versions in `package.json`**

Edit `package.json`:
```json
// Under "dependencies":
"react-router-dom": "^7.18.4",

// Under "devDependencies":
"postcss": "^8.5.28",
"sharp": "^0.35.5",
```

- [ ] **Step 3: Validate `package.json` syntax**

Run:
```bash
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))"
```
Expected output: Exits cleanly with code 0 (no syntax errors).

---

### Task 2: Configure Fine-Grained NPM `overrides` in `package.json`

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add the complete `overrides` object into `package.json`**

Insert the following `overrides` block directly before the closing brace in `package.json`:

```json
  "overrides": {
    "postcss": "^8.5.28",
    "sharp": "^0.35.5",
    "js-yaml": "^4.3.2",
    "nanoid": "^3.3.12",
    "browserslist": "^4.29.3",
    "@typescript-eslint/typescript-estree": {
      "brace-expansion": "^2.1.2"
    },
    "brace-expansion": "^1.1.16",
    "@humanfs/node": "^0.17.0",
    "baseline-browser-mapping": "^2.11.27",
    "postcss-selector-parser": "^6.1.3"
  }
```

- [ ] **Step 2: Verify `overrides` integrity via node script**

Run:
```bash
node -e "const p = JSON.parse(require('fs').readFileSync('package.json', 'utf8')); console.log(JSON.stringify(p.overrides, null, 2))"
```
Expected output: Prints formatted JSON containing all 10 override keys.

---

### Task 3: Install Updates & Regenerate `package-lock.json`

**Files:**
- Modify: `package-lock.json`
- Modify: `node_modules/`

- [ ] **Step 1: Execute npm install with overrides enforced**

Run:
```bash
npm install
```
Expected output: Packages are updated, tree is re-resolved, and `package-lock.json` is updated.

- [ ] **Step 2: Verify resolved versions in `package-lock.json` against all 22 alerts**

Run:
```bash
node -e "const lock = JSON.parse(require('fs').readFileSync('package-lock.json', 'utf8')); const check = [ ['react-router', '7.18.2'], ['postcss', '8.5.23'], ['sharp', '0.35.4'], ['js-yaml', '4.3.2'], ['nanoid', '3.3.12'], ['browserslist', '4.28.7'], ['@humanfs/node', '0.16.8'], ['baseline-browser-mapping', '2.11.0'], ['postcss-selector-parser', '6.1.3'] ]; check.forEach(([pkg, min]) => { const instances = Object.entries(lock.packages).filter(([k]) => k.includes('node_modules/' + pkg)); console.log(pkg + ': ' + instances.map(([k,v]) => v.version).join(', ')); });"
```
Expected output:
- `react-router`: versions >= 7.18.2
- `postcss`: versions >= 8.5.23
- `sharp`: versions >= 0.35.4
- `js-yaml`: versions >= 4.3.2
- `nanoid`: versions >= 3.3.12
- `browserslist`: versions >= 4.28.7
- `@humanfs/node`: versions >= 0.16.8
- `baseline-browser-mapping`: versions >= 2.11.0
- `postcss-selector-parser`: versions >= 6.1.3

- [ ] **Step 3: Verify both 1.x and 2.x `brace-expansion` instances**

Run:
```bash
node -e "const lock = JSON.parse(require('fs').readFileSync('package-lock.json', 'utf8')); const be = Object.entries(lock.packages).filter(([k]) => k.includes('node_modules/brace-expansion')); console.log(be.map(([k,v]) => ({ path: k, version: v.version })));"
```
Expected output:
- All 1.x instances have version >= `1.1.16`
- All 2.x instances have version >= `2.1.2`

---

### Task 4: Complete Build, Type, and Lint Verification

**Files:**
- Test: Full repository health check

- [ ] **Step 1: Run TypeScript compiler and production build**

Run:
```bash
npm run build
```
Expected output:
```
vite v7.3.0 building client environment for production...
✓ built in ...s
```
Exits with code 0.

- [ ] **Step 2: Run ESLint**

Run:
```bash
npm run lint
```
Expected output: Exits with code 0, no linting regressions.

---

### Task 5: Commit and Instructions for Pushing to GitHub

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Stage and commit updated manifests**

Run:
```bash
git add package.json package-lock.json
git commit -m "fix(security): resolve all 22 Dependabot vulnerabilities via dependency updates and overrides"
```

- [ ] **Step 2: Verify git status is clean**

Run:
```bash
git status
```
Expected output: `nothing to commit, working tree clean`.

- [ ] **Step 3: Push changes to GitHub (User instruction)**

Once pushed to `origin/main` via:
```bash
git push
```
GitHub Dependabot will automatically re-evaluate the repo manifest and close all 22 open alerts on `https://github.com/MAYANKpandey14/minimal-portfolio/security/dependabot`.
