// @flow
import React, { Fragment } from 'react';
import Card from '../../../ui/blocks/Card';

type Props = {
    item: Object,
    handlePreviewClick: (id: string) => void,
};

const TrackSingleView = ({ item, handlePreviewClick, playing }: Props) => (
    <Card>
        <Card.Name>
            <Card.Name.Track.Artist title={item.artists[0].name}>
                <span>{item.artists[0].name}</span>
            </Card.Name.Track.Artist>
            <Card.Name.Track title={item.name}>
                <span>{item.name}</span>
            </Card.Name.Track>
        </Card.Name>
        <Card.Image onClick={() => item.preview_url && handlePreviewClick(item.id)}>
            <audio id={item.id} className="track-preview" src={item.preview_url} type="audio/mpeg" />
            <Card.Image.Img playing={playing && playing === item.id} id={`card_${item.id}`} alt={item.name} src={item.album.images[1].url} />
            {item.preview_url &&
                <Card.Image.Preview playing={playing && playing === item.id} id={`card-preview_${item.id}`}>
                    <i id={`media_${item.id}`} className="fas fa-play track-preview-icon" />
                </Card.Image.Preview>
            }
        </Card.Image>
    </Card>
);

export default TrackSingleView;
