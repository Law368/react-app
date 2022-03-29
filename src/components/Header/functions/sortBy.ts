import {moviesFetch} from '../../../actionCreators/moviesFetch';
import {sortMode} from '../../../actionCreators/sortMode';
import {Sort} from '../../../enums/enum';
import {MovieData} from '../../../interfaces/interfaces';

export function sortBy(
    sortType: Sort,
    array: MovieData[],
    dispatchFunction: Function
) {
    if (sortType === Sort.ReleaseDate) {
        dispatchFunction(sortMode(Sort.ReleaseDate));

        array.sort((a: {release_date: string}, b: {release_date: string}) => {
            const releaseDateA = Number(a.release_date.substring(0, 4));
            const releaseDateB = Number(b.release_date.substring(0, 4));
            return releaseDateA - releaseDateB;
        });
        console.log(array);
        dispatchFunction(moviesFetch(array));
    } else {
        dispatchFunction(sortMode(Sort.Rating));
        array.sort((a: {vote_average: number}, b: {vote_average: number}) => {
            const ratingA = a.vote_average;
            const ratingB = b.vote_average;
            return ratingA - ratingB;
        });
        console.log(array);
        dispatchFunction(moviesFetch(array));
    }
}
