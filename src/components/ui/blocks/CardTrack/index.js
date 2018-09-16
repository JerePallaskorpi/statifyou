import styled from 'styled-components';

const CardTrack = styled.div`
    width: 150px;
    padding: 12.5px;
    
    @media only screen and (max-width: 568px) {
        width: calc(150px - 2em);
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
    
    @media only screen and (max-width: 568px) {
        width: calc(150px - 2em);
        height: calc(150px - 2em);
    }
`;

const Artist = styled.div`
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Track = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
`;

CardTrack.Name = Name;
CardTrack.Name.Artist = Artist;
CardTrack.Name.Track = Track;
CardTrack.Image = Image;

export default CardTrack;
