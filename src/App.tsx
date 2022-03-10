import './style.scss';
import React, {useState} from 'react';
import testImage from './img/test.jpg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import {Screen} from './enums/enum';
import {MovieData} from './interfaces/interfaces';
import {ErrorBoundary} from './components/ErrorBoundary';

export function App() {
    const [screen, setScreen] = useState(Screen.MoviesList);
    const moviesData: MovieData[] = [
        {
            id: 269149,
            title: 'Zootopia',
            tagline: 'Welcome to the urban jungle.',
            vote_average: 7.7,
            vote_count: 6795,
            release_date: '2016-02-11',
            poster_path:
                'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
            overview:
                "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
            budget: 150000000,
            revenue: 1023784195,
            genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
            runtime: 108,
        },
        {
            id: 354912,
            title: 'Coco',
            tagline: 'The celebration of a lifetime',
            vote_average: 7.8,
            vote_count: 3619,
            release_date: '2017-10-27',
            poster_path:
                'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
            overview:
                "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
            budget: 175000000,
            revenue: 700920729,
            genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
            runtime: 105,
        },
        {
            id: 284053,
            title: 'Thor: Ragnarok',
            tagline: 'No Hammer. No Problem.',
            vote_average: 7.4,
            vote_count: 5349,
            release_date: '2017-10-25',
            poster_path:
                'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
            overview:
                'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
            budget: 180000000,
            revenue: 854229371,
            genres: ['Action', 'Adventure', 'Fantasy'],
            runtime: 130,
        },
        {
            id: 321612,
            title: 'Beauty and the Beast',
            tagline: 'Be our guest.',
            vote_average: 6.8,
            vote_count: 7861,
            release_date: '2017-03-16',
            poster_path:
                'https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
            overview:
                "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
            budget: 160000000,
            revenue: 1263521126,
            genres: ['Family', 'Fantasy', 'Romance'],
            runtime: 129,
        },
    ];
    return (
        <>
            <Header moviesData={moviesData} screen={screen} />
            <ErrorBoundary>
                <Content
                    screen={screen}
                    setScreen={setScreen}
                    moviesData={moviesData}
                />
            </ErrorBoundary>

            <img src={testImage} width="50" height="100" />
            <Footer />
        </>
    );
}
