#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = '/home/michael/projects/mywebsite/src/routes/startup/notes/2025-08-buildbear-labs/+page.svelte';

let content = fs.readFileSync(filePath, 'utf8');

// Regular expression to match the collapsible section pattern
const sectionPattern = /(<section id="([^"]+)">\s*)<div class="flex items-center justify-between mb-4">\s*(<h2 class="note-heading-h2">[^<]+<\/h2>)\s*<button[^>]*on:click[^>]*>[\s\S]*?<\/button>\s*<\/div>\s*\{#if !collapsedSections\?\.\w+\('[^']+'\)\}([\s\S]*?)\{\/if\}\s*(<\/section>)/g;

// Replace with simple section structure
content = content.replace(sectionPattern, (match, sectionStart, sectionId, heading, sectionContent, sectionEnd) => {
    return `${sectionStart}${heading}\n\n${sectionContent.trim()}\n\t${sectionEnd}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Section conversion completed!');
