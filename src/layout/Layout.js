import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler() {
        var item = 'setState...';
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({ data: myArray });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.setStateHandler}>
                    Press me to set state
                </button>
                <hr />
                <p>State: {this.state.data}</p>
            </div>
        );
    }
}

export default Layout;