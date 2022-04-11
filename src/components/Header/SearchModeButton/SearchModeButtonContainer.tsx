import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchMode} from '../../../actionCreators/searchMode';
import {Search} from '../../../enums/enum';
import {State} from '../../../reducers/commonReducer';
import SearchModeButton from './SearchModeButton';

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
            <SearchModeButton
                name={'title'}
                isActive={searchType === Search.Title}
                handleClick={handleActiveClass}
            />
            <SearchModeButton
                name={'genre'}
                isActive={searchType === Search.Genre}
                handleClick={handleActiveClass}
            />
        </>
    );
}
