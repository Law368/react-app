import * as React from 'react';

class CreateElementCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    };

    decrement = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return React.createElement(
            'div',
            {className: 'counter'},
            React.createElement(
                'button',
                {onClick: this.increment, className: 'increase'},
                '+'
            ),
            React.createElement(
                'button',
                {onClick: this.decrement, className: 'decrease'},
                '-'
            ),
            React.createElement('h2', null, this.state.count)
        );
    }
}

export default CreateElementCounter;
