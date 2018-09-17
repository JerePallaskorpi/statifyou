// @flow
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { Fragment } from 'react';
import TopListSettings from '../../ui/blocks/TopListSettings';
import { Button } from '../../ui/elements/Button';
import ArtistSingleView from './artist-single/ArtistSingleView';
import { TopListWrapper, TopListOverflow } from './styles';
import TrackSingleView from './track-single/TrackSingleView';

type Props = {
    items: Array<Object>,
    settings: Object,
    handleTimeRangeChange: () => void,
    handleTypeClick: () => void,
    handlePreviewClick: (id: string) => void,
};

const TopListView = ({
    items,
    settings,
    handleTimeRangeChange,
    handleTypeClick,
    handlePreviewClick,
    playing,
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
        <TopListOverflow>
            <TopListWrapper>
                {items.length > 0 && settings.type === 'tracks' && items.map(item => <TrackSingleView item={item} handlePreviewClick={handlePreviewClick} playing={playing} />)}
                {items.length > 0 && settings.type === 'artists' && items.map(item => <ArtistSingleView item={item} />)}
            </TopListWrapper>
        </TopListOverflow>
    </Fragment>
);

export default TopListView;
