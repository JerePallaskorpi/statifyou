// @flow
import React, { Component } from 'react';
import { getTopArtists } from '../../../api/topLists/artists';
import TopListView from './TopListView';

type Props = {
    /* ... */
};

type State = {
    /* ... */
};

const initialState = {
    artists: [],
};

class TopList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { ...initialState };
    }

    componentDidMount() {
        const { accessToken } = this.props;

        getTopArtists(accessToken)
            .then(r => this.setState({ artists: r.items }));
    }

    render() {
        const { artists } = this.state;

        return <TopListView artists={artists} />;
    }
}

export default TopList;
