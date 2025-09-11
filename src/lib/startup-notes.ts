// Startup Notes Publishing System
export interface StartupNote {
	slug: string;
	title: string;
	description: string;
	publishDate: string;
	author: string;
	status: 'published' | 'draft' | 'archived';
	tags?: string[];
	company?: string;
	lastModified?: string;
}

// Notes registry - manually curated for control
export const STARTUP_NOTES: StartupNote[] = [
	{
		slug: '2025-08-buildbear-labs',
		title: 'BuildBear Labs Note',
		description:
			"Analysis of BuildBear Labs' blockchain testing infrastructure platform and Series A opportunity. Exploring market dynamics, technical differentiation, and investment considerations for this Singapore-based developer tools company.",
		publishDate: '2025-08-21',
		author: 'Michael Distel',
		status: 'published', // Change to 'published' when ready
		tags: ['Web3', 'Infrastructure', 'Series A', 'DevOps'],
		company: 'BuildBear Labs',
		lastModified: '2025-08-22'
	}
	// Add more notes here as they're created
];

// Get all published notes
export function getPublishedNotes(): StartupNote[] {
	return STARTUP_NOTES.filter((note) => note.status === 'published');
}

// Get all draft notes (for development/preview)
export function getDraftNotes(): StartupNote[] {
	return STARTUP_NOTES.filter((note) => note.status === 'draft');
}

// Get a specific note by slug
export function getNoteBySlug(slug: string): StartupNote | undefined {
	return STARTUP_NOTES.find((note) => note.slug === slug);
}

// Check if a note should be publicly accessible
export function isNotePublic(slug: string): boolean {
	const note = getNoteBySlug(slug);
	return note?.status === 'published' || false;
}

// Get notes sorted by publish date (newest first)
export function getNotesChronological(): StartupNote[] {
	return getPublishedNotes().sort(
		(a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
	);
}
