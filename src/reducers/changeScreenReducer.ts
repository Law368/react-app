export default (state: any, action: any) => {
    switch (action.type) {
        case 'changeScreen':
            return {
                screen: action.payload,
            };
        default:
            return state;
    }
};
