export const getYoutubeEmbedUrl = (url) => {
    if (!url) return null;

    let videoId = null;

    // Farklı YouTube URL formatlarını destekle
    // youtube.com/watch?v=VIDEO_ID
    // youtu.be/VIDEO_ID
    // youtube.com/embed/VIDEO_ID

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        videoId = match[2];
    } else {
        return null; // Geçersiz URL
    }

    return `https://www.youtube.com/embed/${videoId}`;
};
