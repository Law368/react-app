import './style.scss';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {store} from './store/store';
import {MoviesList} from './components/Pages/MoviesList';
import {MovieInfo} from './components/Pages/MovieInfo';

export function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="movie/:id" element={<MovieInfo />} />
            </Routes>
        </Provider>
    );
}
// movie/<номер id>
