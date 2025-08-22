#!/usr/bin/env node

// Startup Notes Publishing Management Script
const fs = require('fs');
const path = require('path');

const STARTUP_NOTES_FILE = path.join(__dirname, '../src/lib/startup-notes.ts');
const NOTES_INDEX_FILE = path.join(__dirname, '../src/routes/startup/notes/+page.svelte');

function readFile(filepath) {
    return fs.readFileSync(filepath, 'utf8');
}

function writeFile(filepath, content) {
    fs.writeFileSync(filepath, content, 'utf8');
}

function publishNote(slug) {
    let content = readFile(STARTUP_NOTES_FILE);

    // Find the note and change status to 'published'
    content = content.replace(
        new RegExp(`(slug: '${slug}'[\\s\\S]*?)status: 'draft'`, 'm'),
        `$1status: 'published'`
    );

    writeFile(STARTUP_NOTES_FILE, content);
    console.log(`✅ Published note: ${slug}`);
}

function unpublishNote(slug) {
    let content = readFile(STARTUP_NOTES_FILE);

    // Find the note and change status to 'draft'
    content = content.replace(
        new RegExp(`(slug: '${slug}'[\\s\\S]*?)status: 'published'`, 'm'),
        `$1status: 'draft'`
    );

    writeFile(STARTUP_NOTES_FILE, content);
    console.log(`📝 Unpublished note: ${slug}`);
}

function toggleDraftPreview(show) {
    let content = readFile(NOTES_INDEX_FILE);

    // Toggle the showDrafts flag
    content = content.replace(
        /const showDrafts = (true|false);/,
        `const showDrafts = ${show};`
    );

    writeFile(NOTES_INDEX_FILE, content);
    console.log(`${show ? '👁️  Enabled' : '🔒 Disabled'} draft preview`);
}

function listNotes() {
    const content = readFile(STARTUP_NOTES_FILE);
    const notes = [];

    // Simple regex to extract notes (could be more robust)
    const noteMatches = content.match(/slug: '[^']+'/g) || [];
    const statusMatches = content.match(/status: '[^']+'/g) || [];

    noteMatches.forEach((match, i) => {
        const slug = match.replace("slug: '", '').replace("'", '');
        const status = statusMatches[i] ? statusMatches[i].replace("status: '", '').replace("'", '') : 'unknown';
        notes.push({ slug, status });
    });

    console.log('\n📝 Startup Notes Status:');
    console.log('========================');
    notes.forEach(note => {
        const statusIcon = note.status === 'published' ? '✅' : note.status === 'draft' ? '📝' : '📦';
        console.log(`${statusIcon} ${note.slug} (${note.status})`);
    });
    console.log('');
}

// CLI handling
const [, , command, arg] = process.argv;

switch (command) {
    case 'publish':
        if (!arg) {
            console.error('Usage: node manage-notes.js publish <slug>');
            process.exit(1);
        }
        publishNote(arg);
        break;

    case 'unpublish':
        if (!arg) {
            console.error('Usage: node manage-notes.js unpublish <slug>');
            process.exit(1);
        }
        unpublishNote(arg);
        break;

    case 'show-drafts':
        toggleDraftPreview(true);
        break;

    case 'hide-drafts':
        toggleDraftPreview(false);
        break;

    case 'list':
        listNotes();
        break;

    default:
        console.log('Startup Notes Publishing Management');
        console.log('');
        console.log('Usage:');
        console.log('  node scripts/manage-notes.js publish <slug>      - Publish a note');
        console.log('  node scripts/manage-notes.js unpublish <slug>    - Unpublish a note');
        console.log('  node scripts/manage-notes.js show-drafts         - Show drafts in index');
        console.log('  node scripts/manage-notes.js hide-drafts         - Hide drafts in index');
        console.log('  node scripts/manage-notes.js list                - List all notes');
        console.log('');
        console.log('Examples:');
        console.log('  node scripts/manage-notes.js publish 2025-08-buildbear-labs');
        console.log('  node scripts/manage-notes.js list');
}
