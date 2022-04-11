// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {createSelector} from '@reduxjs/toolkit';
// import {State} from '../reducers/commonReducer';
// import Content from './Content/Content';
// import {ErrorBoundary} from './ErrorBoundary';
// import Footer from './Footer/Footer';
// import InfoBlock from './Header/InfoBlock';
// import {Screen, Sort} from '../enums/enum';
// import {fetchMovies} from '../fetchMovies';
// import {MovieData} from '../interfaces/interfaces';
// import sortByReleaseDateDescending from '../helpers/sortByReleaseDateDescending';
// import sortByRatingDescending from '../helpers/sortByRatingDescending';

// export default function Wrapper() {
//     const dispatch = useDispatch();
//     const sortType = useSelector((state: State) => state.sortMode);
//     const moviesData = createSelector(
//         (state: any) => state.moviesData,
//         (moviesWrapped: {movies: MovieData[]}) => {
//             if (sortType === Sort.Rating) {
//                 moviesWrapped?.movies.sort(
//                     (a: {vote_average: number}, b: {vote_average: number}) =>
//                         sortByRatingDescending(a, b)
//                 );
//             }

//             if (sortType === Sort.ReleaseDate) {
//                 moviesWrapped?.movies.sort(
//                     (a: {release_date: string}, b: {release_date: string}) =>
//                         sortByReleaseDateDescending(a, b)
//                 );
//             }
//             return moviesWrapped.movies;
//         }
//     );
//     const movies: any = useSelector(moviesData);

//     const searchType = useSelector((state: State) => state.searchMode);

//     const [screen, setScreen] = useState(Screen.MoviesList);
//     useEffect(() => {
//         dispatch(fetchMovies());
//     }, []);
//     return (
//         <>
//             <InfoBlock moviesData={movies} searchType={searchType} />
//             <ErrorBoundary>
//                 <Content
//                     screen={screen}
//                     setScreen={setScreen}
//                     moviesData={movies}
//                 />
//             </ErrorBoundary>
//             <Footer />
//         </>
//     );
// }
// TODO:
// 1. Сделать Page для главной страницы +++
// 2. Сделать Page для страницы с информацией о фильме +++
// 3. При переходе на страницу с фильмом сделать так, чтобы в URL передовалась инофрмация о фильме(id) UseLocation (проверить есть ли в url какие то данные и если есть, то сделать запрос)
// 4. Сделать так, чтобы при перезагрузке страницы текущий url сохранялся (получить значение id из url)

// внутри MovieInfo получать данные из url c помощью location (hook useLocation)
// с помощью urlUseParams получаем обхъект для удобной работы с парами ключ-значения полученных из текущего urla
