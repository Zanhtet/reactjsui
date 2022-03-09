import React from 'react';
import NewCounter from './newCounter';
import Counter from './counter';
import { getApi, postApi, putApi, deteleApi } from '../services/apiService';

export default class app extends React.Component {

    constructor() {
        super();

        this.state = {
            counters: []
        };

        this.timer = null;
        this.apiURL = 'https://counters-dot-sse-2021-jk.appspot.com/api/';
        this.timerInterval = 5000;
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.state.counters.map(counter => {
                getApi(this.apiURL + counter.name, (response) => {
                    console.log(response);
                    counter.output = parseInt(response);
                    this.setState({
                        counters: this.state.counters.map(item => item.id === counter.id ? counter : item)
                    });
                });
            });
        }, this.timerInterval);
    }

    onNewCounter = (counter) => {
        getApi(this.apiURL + counter.name, (response) => {
            counter.output = parseInt(response);
            this.setState({
                counters: [
                    ...this.state.counters,
                    counter
                ],
            });
        });
    }

    onAddCounter = (counter) => {
        postApi(this.apiURL + counter.name, counter.output, (response) => {
            counter.output = parseInt(response);
            this.setState({
                counters: this.state.counters.map(item => item.id === counter.id ? counter : item)
            });
        });
    }

    onSetCounter = (counter) => {
        putApi(this.apiURL + counter.name, counter.output, (response) => {
            counter.output = parseInt(response);
            this.setState({
                counters: this.state.counters.map(item => item.id === counter.id ? counter : item)
            });
        });
    }

    onDeleteCounter = (counter) => {
        deteleApi(this.apiURL + counter.name, (response) => {
            this.setState({
                counters: this.state.counters.filter(item => item.id !== counter.id)
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <h2>SSE Sign-off Task: React.js UI</h2>
                <NewCounter onNewCounter={this.onNewCounter} />
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} item={counter} onAddCounter={this.onAddCounter} onSetCounter={this.onSetCounter} onDeleteCounter={this.onDeleteCounter} />
                ))}
            </React.Fragment>
        );
    }

}