// @flow
import React, { Fragment } from 'react';

const TopListView = ({ artists }) => (
    <Fragment>
        <p>Artists</p>
        {artists.map(artist => <img src={artist.images[1].url} style={{ width: '150px', height: '150px' }} />)}
    </Fragment>
);

export default TopListView;
