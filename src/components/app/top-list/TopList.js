// @flow
import React, { Component } from 'react';
import { getUserTopList } from '../../../api/topLists/topList';
import TopListView from './TopListView';

type Props = {
    accessToken: string,
};

type State = {
    items: Array<Object>,
    settings: {
        type: string,
        timeRange: string,
    },
};

const initialState = {
    items: [],
    settings: {
        type: 'tracks',
        timeRange: 'medium_term',
        timeRangeText: '6 months',
        sliderValue: 2,
    },
};

class TopList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { ...initialState };

        this.handleTimeRangeChange = this.handleTimeRangeChange.bind(this);
        this.handleTypeClick = this.handleTypeClick.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
    }

    componentDidMount() {
        const { accessToken } = this.props;

        getUserTopList(accessToken, 'medium_term', 'tracks')
            .then(r => this.setState({ items: r.items }));
    }

    handleTimeRangeChange(sliderValue: number) {
        let timeRange;
        let timeRangeText;
        switch (sliderValue) {
            case 1:
                timeRange = 'short_term';
                timeRangeText = '1 Month';
                break;
            case 2:
                timeRange = 'medium_term';
                timeRangeText = '6 Months';
                break;
            case 3:
                timeRange = 'long_term';
                timeRangeText = 'All Time';
                break;
            default:
                break;
        }

        this.setState({
            settings: {
                ...this.state.settings,
                timeRange,
                timeRangeText,
                sliderValue,
            },
            items: [],
        }, () => {
            this.handleSettingsChange();
        });
    }

    handleTypeClick(type: string) {
        this.setState({
            settings: { ...this.state.settings, type },
            items: [],
        }, () => {
            this.handleSettingsChange();
        });
    }

    handleSettingsChange = () => {
        const { timeRange, type } = this.state.settings;
        const { accessToken } = this.props;

        getUserTopList(accessToken, timeRange, type)
            .then(r => this.setState({ items: r.items }));
    };

    render() {
        const { items, settings } = this.state;

        return (
            <TopListView
                items={items}
                settings={settings}
                handleTimeRangeChange={this.handleTimeRangeChange}
                handleTypeClick={this.handleTypeClick}
            />
        );
    }
}

export default TopList;
