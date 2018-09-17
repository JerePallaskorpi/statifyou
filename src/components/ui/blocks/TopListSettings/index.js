import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const TopListSettings = styled.div`
    width: calc(100% - 2em);
    display: flex;
    align-items: center;
    padding: 0 1em;
    color: ${styles.colorMain};
    justify-content: space-between;
    flex-direction: column;
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 1em;
    
    button {
        width: calc(50% - 2em);
    }
    
    @media only screen and (max-width: 768px) {
        padding: 0.5em;
    }
`;

const Slider = styled.div`
    width: 100%;
    padding: 1em;
    
    .rc-slider {
        cursor: default;
    
        .rc-slider-track {
            background: ${styles.colorMain};
            cursor: default;
        }
        
        .rc-slider-rail {
            background: ${styles.colorLight};
            cursor: default;
        }
        
        .rc-slider-handle {
            border: 2px solid ${styles.colorMain};
            background: ${styles.colorMain};
            cursor: default;
        }
    }
`;

const Text = styled.div`
    width: 100%;
    text-align: center;
    color: ${styles.colorLight}
`;

TopListSettings.Buttons = Buttons;
TopListSettings.Slider = Slider;
TopListSettings.Text = Text;


export default TopListSettings;
