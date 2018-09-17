import styled, { css } from 'styled-components';
import * as styles from '../../defaultStyles';

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
    
    
    &:hover {
        img {
            opacity: 0.1;
        }
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

const Preview = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    color: white;
    opacity: 0;
    transition: 0.3s;
    
    ${props => props.playing && css`
        opacity: 1;
    `}
    
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
`;

const Img = styled.img`
    width: 150px;
    height: 150px;
    -webkit-box-shadow: ${styles.shadowListImage};
    -moz-box-shadow: ${styles.shadowListImage};
    box-shadow: i${styles.shadowListImage};
    position: absolute;
    transition: 0.3s;
    
    ${props => props.playing && css`
        opacity: 0.1;
    `}
`;

Card.Name = Name;
Card.Name.Artist = Artist;
Card.Name.Track = Track;
Card.Name.Track.Artist = TrackArtist;
Card.Image = Image;
Card.Image.Preview = Preview;
Card.Image.Img = Img;

export default Card;
