import * as React from 'react';

class ClassComponent extends React.Component<{}, {count: number}> {
    constructor(props: string) {
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
        return (
            <div className="counter">
                <button onClick={this.increment} className="increase">
                    +
                </button>
                <button onClick={this.decrement} className="decrease">
                    -
                </button>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export {ClassComponent};
