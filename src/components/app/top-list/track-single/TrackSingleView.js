// @flow
import React, { Fragment } from 'react';
import Card from '../../../ui/blocks/Card';

type Props = {
    item: Object,
};

const TrackSingleView = ({ item }: Props) => (
    <Card>
        <Card.Name>
            <Card.Name.Track.Artist title={item.artists[0].name}>
                <span>{item.artists[0].name}</span>
            </Card.Name.Track.Artist>
            <Card.Name.Track title={item.name}>
                <span>{item.name}</span>
            </Card.Name.Track>
        </Card.Name>
        <Card.Image>
            <img alt={item.name} src={item.album.images[1].url} />
        </Card.Image>
    </Card>
);

export default TrackSingleView;
