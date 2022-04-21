import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {compareStoreAndURLId} from '../../components/Pages/functions/compareStoreAndURLId';

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: () => mockDispatch,
// }));

// it('Compares IDs from Store and URL', () => {
//     const mockedDispatch = jest.fn();
//     useSelector.mockImplementation((selectorFn) =>
//         selectorFn(yourMockedStoreData)
//     );
//     useDispatch.mockReturnValue(mockedDispatch);
//     mount(
//         <Router>
//             <Clients history={historyMock} />
//         </Router>
//     );
//     expect(mockDispatch).toHaveBeenCalledWith(/*arguments your expect*/);
// });

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn().mockImplementation(() => ({id: 25})),
    useDispatch: jest.fn().mockImplementation(() => mockedDispatch),
}));

jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockImplementation(() => ({id: 25})),
}));

describe('testing comparison of ID from store and URL', () => {
    it('do something', () => {
        // compareStoreAndURLId();
        // mockedDispatch();
        useSelector();
        expect(mockedDispatch).toHaveBeenCalled();
    });
});
