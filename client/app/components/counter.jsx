import React from 'react';

export default class counter extends React.Component {

    constructor() {
        super();
        this.counterOutputRef = React.createRef();
    }

    componentDidMount() {
        this.counterOutputRef.current.value = 0;
    }

    onAddCounter = () => {
        this.props.onAddCounter({
            ...this.props.item,
            output: parseInt(this.counterOutputRef.current.value)
        });
        this.counterOutputRef.current.value = 0;
    }

    onSetCounter = () => {
        this.props.onSetCounter({
            ...this.props.item,
            output: parseInt(this.counterOutputRef.current.value)
        });
        this.counterOutputRef.current.value = 0;
    }

    onDeleteCounter = () => {
        this.props.onDeleteCounter(this.props.item);
    }

    render() {
        return (
            <div style={{margin: '5px 0px'}}>
                <span style={{width: 200, display: 'inline-block'}}>Counter {this.props.item.name} : {this.props.item.output} </span>
                <input type="number" ref={this.counterOutputRef} />
                <button onClick={this.onAddCounter} style={{ margin: '0px 5px'}}>add</button>
                <button onClick={this.onSetCounter} style={{ margin: '0px 5px'}}>set</button>
                <button onClick={this.onDeleteCounter} style={{ margin: '0px 5px'}}>delete</button>
            </div>
        );
    }

}