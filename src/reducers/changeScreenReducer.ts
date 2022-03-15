export default (state, action) => {
    switch (action.type) {
        case 'changeScreen':
            return {
                screen: action.payload,
            };
        default:
            return state;
    }
};
