// @flow
import React from 'react';
import CardTrack from '../../../ui/blocks/CardTrack';

type Props = {
    item: Object,
};

const ArtistSingleView = ({ item }: Props) => (
    <CardTrack>
        <CardTrack.Name>
            <CardTrack.Name.Track>
                <span>{item.name}</span>
            </CardTrack.Name.Track>
        </CardTrack.Name>
        <CardTrack.Image>
            <img title={item.name} src={item.images && item.images[1].url} />
        </CardTrack.Image>
    </CardTrack>
);

export default ArtistSingleView;
