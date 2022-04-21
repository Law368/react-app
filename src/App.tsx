import './style.scss';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {store} from './store/store';
import {MoviesList} from './components/Pages/MoviesList';
import {MovieInfo} from './components/Pages/MovieInfo';
import {Page404} from './components/Pages/Page404';

export function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="movie/:id" element={<MovieInfo />} />
                <Route path="movies" element={<MoviesList />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Provider>
    );
}
