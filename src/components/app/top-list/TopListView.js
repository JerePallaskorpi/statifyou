// @flow
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { Fragment } from 'react';
import TopListSettings from '../../ui/blocks/TopListSettings';
import { Button } from '../../ui/elements/Button';
import ArtistSingleView from './artist-single/ArtistSingleView';
import { TopListWrapper } from './styles';
import TrackSingleView from './track-single/TrackSingleView';

type Props = {
    items: Array<Object>,
    settings: Object,
    handleTimeRangeChange: Function,
    handleTypeClick: Function,
};

const TopListView = ({
    items,
    settings,
    handleTimeRangeChange,
    handleTypeClick,
}: Props) => (
    <Fragment>
        <TopListSettings>
            <TopListSettings.Buttons>
                <Button flat={settings.type !== 'artists'} onClick={() => handleTypeClick('artists')}>Artists</Button>
                <Button flat={settings.type !== 'tracks'} onClick={() => handleTypeClick('tracks')}>Songs</Button>
            </TopListSettings.Buttons>
            <TopListSettings.Slider>
                <Slider
                    min={1}
                    max={3}
                    step={1}
                    defaultValue={
                        settings.sliderValue
                    }
                    onChange={sliderValue => handleTimeRangeChange(sliderValue)}
                />
            </TopListSettings.Slider>
            <TopListSettings.Text>
                <span>{settings.timeRangeText}</span>
            </TopListSettings.Text>
        </TopListSettings>
        <TopListWrapper>
            {items.length > 0 && settings.type === 'tracks' && items.map(item => <TrackSingleView item={item} />)}
            {items.length > 0 && settings.type === 'artists' && items.map(item => <ArtistSingleView item={item} />)}
        </TopListWrapper>
    </Fragment>
);

export default TopListView;
