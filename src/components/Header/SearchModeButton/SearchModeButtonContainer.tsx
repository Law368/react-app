import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchMode} from '../../../actionCreators/searchMode';
import {Search} from '../../../enums/enum';
import {State} from '../../../reducers/commonReducer';
import {StyledSearchModeButton} from '../../styles/SearchModeButton.styled';

export function SearchModeButtonContainer() {
    const searchType = useSelector((state: State) => state.searchMode);
    const dispatch = useDispatch();

    const handleActiveClass = (name: string) => () => {
        if (name === 'title') {
            dispatch(searchMode(Search.Title));
        }
        if (name === 'genre') {
            dispatch(searchMode(Search.Genre));
        }
    };
    return (
        <>
            {' '}
            <StyledSearchModeButton
                isActive={searchType === Search.Title}
                onClick={handleActiveClass('title')}
                type="button"
            >
                {'title'}
            </StyledSearchModeButton>
            <StyledSearchModeButton
                isActive={searchType === Search.Genre}
                onClick={handleActiveClass('genre')}
                type="button"
            >
                {'genre'}
            </StyledSearchModeButton>
        </>
    );
}
