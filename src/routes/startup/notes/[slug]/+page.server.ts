import { isNotePublic, getNoteBySlug, getPublishedNotes } from '$lib/startup-notes.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = async () => {
	// Return all published note slugs for prerendering
	return getPublishedNotes().map((note) => ({
		slug: note.slug
	}));
};

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	// Check if note exists and is public
	const note = getNoteBySlug(slug);

	if (!note) {
		throw error(404, 'Analysis note not found');
	}

	if (!isNotePublic(slug)) {
		// Note exists but is not published
		throw error(404, 'Analysis note not found');
	}

	return {
		note
	};
};
