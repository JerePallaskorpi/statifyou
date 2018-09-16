// @flow
import React, { Fragment } from 'react';
import CardTrack from '../../../ui/blocks/CardTrack';

type Props = {
    item: Object,
};

const TrackSingleView = ({ item }: Props) => (
    <CardTrack>
        <CardTrack.Name>
            <CardTrack.Name.Artist>
                <span>{item.artists[0].name}</span>
            </CardTrack.Name.Artist>
            <CardTrack.Name.Track>
                <span>{item.name}</span>
            </CardTrack.Name.Track>
        </CardTrack.Name>
        <CardTrack.Image>
            <img title={item.name} src={item.album.images[1].url} />
        </CardTrack.Image>
    </CardTrack>
);

export default TrackSingleView;
