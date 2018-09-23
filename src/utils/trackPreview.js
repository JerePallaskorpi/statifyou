// @flow

/**
 * Sets track icons to their initial state.
 *
 * @param {number} id Track preview elements id.
 */
const tracksInitialIcons = (id) => {
    const audioPreviews = document.getElementsByClassName('track-preview');
    const audioPreviewIcons = document.getElementsByClassName('track-preview-icon');

    for (let i = 0; i < audioPreviews.length; i += 1) {
        audioPreviews[i].id !== id && audioPreviews[i].pause();
    }

    for (let i = 0; i < audioPreviewIcons.length; i += 1) {
        audioPreviewIcons[i].id !== `media_${id}` && audioPreviewIcons[i].classList.replace('fa-pause', 'fa-play');
    }
};

/**
 * Handles track preview audio icons.
 *
 * @param {number} id Track preview elements id.
 * @param {Object} audioPreview Track preview element.
 */
export const trackPreview = (id, audioPreview) => {
    const audioPreviewIcon = document.getElementById(`media_${id}`);

    tracksInitialIcons(id);

    if (audioPreview.paused) {
        audioPreview.play();
        audioPreviewIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        audioPreview.pause();
        audioPreviewIcon.classList.replace('fa-pause', 'fa-play');
    }

    audioPreview.addEventListener('ended', () => {
        document.getElementById(`media_${id}`).classList.replace('fa-pause', 'fa-play');
        document.getElementById(`media_${id}`).classList.remove('audio-playing');
    });
};
