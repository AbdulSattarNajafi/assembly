import * as stylex from '@stylexjs/stylex';

import PlatFormImg from './../assets/images/platform.png';
import GetstartCard from './GetstartCard';

const style = stylex.create({
    card: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const OurPlatformCard = () => {
    return (
        <GetstartCard style={style.card} title={['Managed through', ' our Platform']}>
            <img src={PlatFormImg} alt='Platform Image' />
        </GetstartCard>
    );
};

export default OurPlatformCard;
