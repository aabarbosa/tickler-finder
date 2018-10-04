import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Application from './containers/Application'

render (
    <Provider store={store}>
        <Application />
    </Provider>,
    window.document.getElementById('root')
)
