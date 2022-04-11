export default function sortByReleaseDateDescending(
    a: {release_date: string},
    b: {release_date: string}
) {
    const releaseDateA = Number(a.release_date.substring(0, 4));
    const releaseDateB = Number(b.release_date.substring(0, 4));
    return releaseDateA - releaseDateB;
}
