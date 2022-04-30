import styled from 'styled-components';

type Props = {
    isActive: boolean;
};

export const StyledSearchResults = styled.p<Props>`
    margin-right: 35px;
    cursor: pointer;
    color: ${(props) =>
        props.isActive ? 'rgb(214, 93, 93);' : 'rgb(77, 77, 77);'};
`;
