// @flow
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import HomeContainer from './home/HomeContainer';

const App = ({ store }: any) => (
    <Provider store={store}>
        <Fragment>
            <HomeContainer />
        </Fragment>
    </Provider>
);

export default App;
