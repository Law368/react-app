import sortByReleaseDate from '../../helpers/sortByReleaseDateDescending';

test('sorting by Release date subtracts the 2nd argument from the 1st argument ', () => {
    const a = {release_date: '2022-04-22'};
    const b = {release_date: '1980-01-01'};

    expect(sortByReleaseDate(a, b)).toBe(42);
});
