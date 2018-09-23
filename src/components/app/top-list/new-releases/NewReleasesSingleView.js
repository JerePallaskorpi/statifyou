// @flow
import React from 'react';
import Card from '../../../ui/blocks/Card';

type Props = {
    item: Object,
};

const NewReleasesSingleView = ({ item }: Props) => (
    <Card>
        <Card.Name>
            <Card.Name.Artist title={item.name}>
                <span>{item.name}</span>
            </Card.Name.Artist>
        </Card.Name>
        <Card.Image>
            <Card.Image.Img alt={item.name} src={item.images && item.images[1].url} />
        </Card.Image>
    </Card>
);

export default NewReleasesSingleView;
