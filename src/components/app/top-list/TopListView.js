// @flow
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { Fragment } from 'react';
import TopListSettings from '../../ui/blocks/TopListSettings';
import { Button } from '../../ui/elements/Button';
import { TopListWrapper } from './styles';
import TrackSingleView from './track-single/TrackSingleView';

type Props = {
    items: Array<Object>,
};

const TopListView = ({ items }: Props) => (
    <Fragment>
        <TopListSettings>
            <TopListSettings.Buttons>
                <Button flat>Artists</Button>
                <Button>Songs</Button>
            </TopListSettings.Buttons>
            <TopListSettings.Slider>
                <Slider
                    min={1}
                    max={3}
                    step={1}
                    defaultValue={
                        2
                    }
                    onChange={() => { console.log('asd') }}
                />
            </TopListSettings.Slider>
            <TopListSettings.Text>
                <span>6 Months</span>
            </TopListSettings.Text>
        </TopListSettings>
        <TopListWrapper>
            {items.map(item => <TrackSingleView item={item} />)}
        </TopListWrapper>
    </Fragment>
);

export default TopListView;
