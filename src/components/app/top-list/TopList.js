// @flow
import React, { Component } from 'react';
import { getUserTopList } from '../../../api/topLists/topList';
import TopListView from './TopListView';

type Props = {
    /* ... */
};

type State = {
    /* ... */
};

const initialState = {
    items: [],
};

class TopList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { ...initialState };
    }

    componentDidMount() {
        const { accessToken } = this.props;

        getUserTopList(accessToken, 'medium_term', 'tracks')
            .then(r => this.setState({ items: r.items }));
    }

    render() {
        const { items } = this.state;

        console.log(items);

        return <TopListView items={items} />;
    }
}

export default TopList;
