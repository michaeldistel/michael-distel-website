import { isNotePublic, getNoteBySlug } from '$lib/startup-notes.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
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
}
