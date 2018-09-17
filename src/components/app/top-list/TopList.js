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
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
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

    handlePreviewClick = (id) => {
        const audioPreview = document.getElementById(id);
        const mediaIcon = document.getElementById(`media_${id}`);
        document.getElementById(`media_${id}`).classList.replace('fa-play', 'fa-pause');
        const audioPreviews = document.getElementsByClassName('track-preview');
        const audioPreviewIcons = document.getElementsByClassName('track-preview-icon');
        for (let i = 0; i < audioPreviews.length; i += 1) {
            audioPreviews[i].id !== id && audioPreviews[i].pause();
        }
        for (let i = 0; i < audioPreviewIcons.length; i += 1) {
            audioPreviewIcons[i].id !== `media_${id}` && audioPreviewIcons[i].classList.replace('fa-pause', 'fa-play');
        }
        if (audioPreview.paused) {
            document.getElementById(id).play();
            document.getElementById(`media_${id}`).classList.replace('fa-play', 'fa-pause');
            this.setState({ playing: id });
        } else {
            document.getElementById(id).pause();
            document.getElementById(`media_${id}`).classList.replace('fa-pause', 'fa-play');
            this.setState({ playing: null });
        }
        audioPreview.addEventListener('ended', () => {
            document.getElementById(`media_${id}`).classList.replace('fa-pause', 'fa-play');
            document.getElementById(`media_${id}`).classList.remove('audio-playing');
            this.setState({ playing: null });
        });
    };

    render() {
        const { items, settings, playing } = this.state;

        console.log(items);

        return (
            <TopListView
                items={items}
                settings={settings}
                handleTimeRangeChange={this.handleTimeRangeChange}
                handleTypeClick={this.handleTypeClick}
                handlePreviewClick={this.handlePreviewClick}
                playing={playing}
            />
        );
    }
}

export default TopList;
