// @flow
import React, { Component } from 'react';
import { getSpotifyAuth } from '../../../api/auth/getSpotifyAuth';
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

        this.loginButton = this.loginButton.bind(this);
    }

    componentDidMount() {
        const { accessToken } = this.props;

        getTopArtists(accessToken)
            .then(r => this.setState({ artists: r.items }));
    }

    loginButton = () => {
        getSpotifyAuth();
    };

    render() {
        const { artists } = this.state;

        console.log(artists);

        return <TopListView artists={artists} />;
    }
}

export default TopList;
