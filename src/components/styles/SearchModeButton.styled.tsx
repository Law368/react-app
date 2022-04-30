import styled from 'styled-components';

type Props = {
    isActive: boolean;
};

export const StyledSearchModeButton = styled.button<Props>`
    background-color: ${(props) =>
        props.isActive ? 'rgb(214, 93, 93);' : 'rgb(97, 97, 97);'}

    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
    border-width: 0px;
    border: none;
    padding: 5px 20px;
    cursor: pointer;
    margin-right: 15px;
`;
