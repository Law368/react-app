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
            <Router>
                <Routes>
                    <Route path="/movie/:id" element={<MovieInfo />} />
                    <Route path="/" element={<MoviesList />} />
                    <Route path="*" element={<MoviesList />} />
                </Routes>
            </Router>
        </Provider>
    );
}
// movie/<номер id>
