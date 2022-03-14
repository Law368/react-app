import React from 'react';
import MovieCard from '../components/Content/MovieCard';

export default {
    title: 'MovieCard',
    component: MovieCard,
};

const Template = (args: any) => <MovieCard {...args} />;

// 👇 Each story then reuses that template
export const movieCard = Template.bind({});
movieCard.args = {
    componentName: 'MovieCard',
    posterPath:
        'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    title: 'Fifty Shades Freed',
    releaseDate: '2018',
    genre: 'Drama',
};

// TODO: вынести в stories movieCard, buttons и logo
