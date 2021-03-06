import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux'
import Home from './index'

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Home />
            </Provider>
        )
    }
}