export default function sortByRatingDescending(
    a: {vote_average: number},
    b: {vote_average: number}
) {
    const ratingA = a.vote_average;
    const ratingB = b.vote_average;
    return ratingB - ratingA;
}
