import * as stylex from '@stylexjs/stylex';
import { HiMiniStar, HiMiniCheck } from 'react-icons/hi2';

import MultiImage from './../assets/images/auth-multi.png';
import AuthCard from '../features/auth/AuthCard';
import { colors } from '../styles/tokens.stylex';

const style = stylex.create({
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '13px',
        lineHeight: '22px',
    },
    cardImage: {
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        overflow: 'hidden',
    },
    cardImg: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    stars: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        lineHeight: '1',
        color: colors.stars,
        marginTop: '6px',
    },
    cardPoints: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '6px',
        marginTop: '10px',
    },
    pointsCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        width: '100%',
        textAlign: 'center',
        background: colors.light100,
        borderRadius: '22px',
        padding: '12px 6px',
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '1',
        color: colors.black,
    },
    pointsCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '32px',
        height: '32px',
        background: colors.white,
        border: `1px solid ${colors.slateBlue}`,
        borderRadius: '50%',
        fontSize: '13px',
        color: colors.slateBlue,
        fontWeight: '700',
        lineHeight: '1',
    },
});

const MultiStepCard = () => {
    return (
        <AuthCard>
            <div {...stylex.props(style.cardInfo)}>
                <div {...stylex.props(style.cardImage)}>
                    <img
                        src={MultiImage}
                        alt='Verified Projects'
                        {...stylex.props(style.cardImg)}
                    />
                </div>
                <div {...stylex.props(style.stars)}>
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                    <HiMiniStar />
                </div>
                <p>
                    <b>20+ </b> Verified Projects
                </p>
            </div>

            <div {...stylex.props(style.cardPoints)}>
                <div {...stylex.props(style.pointsCard)}>
                    <div {...stylex.props(style.pointsCircle)}>
                        <p>10+</p>
                    </div>
                    <p>Years of Experience</p>
                </div>

                <div {...stylex.props(style.pointsCard)}>
                    <div {...stylex.props(style.pointsCircle)}>
                        <HiMiniCheck />
                    </div>
                    <p>Verified Portfolio</p>
                </div>

                <div {...stylex.props(style.pointsCard)}>
                    <div {...stylex.props(style.pointsCircle)}>
                        <HiMiniCheck />
                    </div>
                    <p>References Verified</p>
                </div>
            </div>
        </AuthCard>
    );
};

export default MultiStepCard;
