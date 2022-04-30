import styled from 'styled-components';

export const StyledMovieCard = styled.div`
    width: '100%';
    margin: 0 auto;
    margin-bottom: 15px;
    cursor: pointer;
    transition: background-color 0.5s ease-out 100ms;
    border-radius: 10px;

    .movieCard__posterContainer {
        display: flex;
        justify-content: center;
    }

    .movieCard__poster {
        width: 90%;
    }

    .movieCard__title {
        font-weight: bold;
    }
    .movieCard__releaseDate {
        border: 1px solid;
        border-radius: 5px;
        height: 20px;
        text-align: center;
    }

    .movieCard__infoContainer {
        display: grid;
        grid-template: 1fr 1fr / 1fr 80px;
        padding: 10px;
    }

    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;
