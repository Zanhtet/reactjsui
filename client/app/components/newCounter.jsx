import React from 'react';

export default class newCounter extends React.Component {

    constructor() {
        super();
        this.counterNameRef = React.createRef();
        this.countId = 0;
    }

    onNewCounter = () => {
        const counterName = this.counterNameRef.current.value;

        this.props.onNewCounter({
            id: this.countId,
            name: counterName,
            output: 0,
        });

        this.counterNameRef.current.value = '';
        this.countId = this.countId + 1;
    }

    render() {
        return (
            <div>
                <span style={{width: 200, display: 'inline-block'}}>Add counter:</span>
                <input type="text" ref={this.counterNameRef} />
                <button style={{ margin: '0px 5px'}} onClick={this.onNewCounter}>add</button>
            </div>
        );
    }

}