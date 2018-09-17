import styled, { css } from 'styled-components';

const Card = styled.div`
    width: 150px;
    padding: 12.5px;
    
    @media only screen and (max-width: 768px) {
        width: calc(100% - 2em);
        padding: 1em;
    }
`;

const Name = styled.div`
    height: 50px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Image = styled.div`
    width: 150px;
    height: 150px;
    
    img {
        width: 100%;
        height: 100%;
    }
    
    @media only screen and (max-width: 768px) {
        width: calc(300px - 2em);
        height: calc(300px - 2em);
    }
`;

const Artist = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.5em;
`;

const TrackArtist = styled.div`
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Track = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.5em;
`;

Card.Name = Name;
Card.Name.Artist = Artist;
Card.Name.Track = Track;
Card.Name.Track.Artist = TrackArtist;
Card.Image = Image;

export default Card;
