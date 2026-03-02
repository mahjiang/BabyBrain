#!/usr/bin/env node
// encrypt-search.js — Encrypts search-data.json with AES-256-CBC
// and injects the key into all HTML files (replacing the placeholder).
// Run after Jekyll build but before StatiCrypt encryption.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SITE_DIR = path.resolve(__dirname, '..', '_site');
const SEARCH_JSON = path.join(SITE_DIR, 'assets', 'js', 'search-data.json');
const PLACEHOLDER = '__SEARCH_ENCRYPTION_KEY__';

// --- 1. Read search-data.json ---
if (!fs.existsSync(SEARCH_JSON)) {
  console.error('search-data.json not found at', SEARCH_JSON);
  process.exit(1);
}

const plaintext = fs.readFileSync(SEARCH_JSON, 'utf8');
console.log('Read search-data.json (%d bytes)', plaintext.length);

// --- 2. Generate key and IV ---
const key = crypto.randomBytes(32);
const iv  = crypto.randomBytes(16);

// --- 3. Encrypt ---
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);

const envelope = {
  iv: iv.toString('base64'),
  ct: encrypted.toString('base64')
};

fs.writeFileSync(SEARCH_JSON, JSON.stringify(envelope));
console.log('Encrypted search-data.json (%d bytes)', JSON.stringify(envelope).length);

// --- 4. Inject key into HTML files ---
const keyB64 = key.toString('base64');

function walkDir(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full, callback);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      callback(full);
    }
  }
}

let htmlCount = 0;
walkDir(SITE_DIR, function(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.indexOf(PLACEHOLDER) !== -1) {
    fs.writeFileSync(filePath, content.split(PLACEHOLDER).join(keyB64));
    htmlCount++;
  }
});

console.log('Injected AES key into %d HTML file(s)', htmlCount);
console.log('Done.');
