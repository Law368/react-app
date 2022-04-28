import sortByRating from '../helpers/sortByRatingDescending';

test('sorting by rating subtracts the 1st argument from the 2nd argument ', () => {
    const a = {vote_average: 5};
    const b = {vote_average: 10};

    expect(sortByRating(a, b)).toBe(5);
});
