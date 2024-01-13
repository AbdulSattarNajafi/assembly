import * as stylex from '@stylexjs/stylex';
import { HiMiniStar } from 'react-icons/hi2';
import { colors } from '../styles/tokens.stylex';

type TeamCardTypes = {
    name: string;
    jobTitle: string;
    bgImage: string;
    image: string;
    salary: number;
    experience: string;
    rating: number;
    availablity: number;
};

const style = stylex.create({
    card: {
        width: '100%',
        background: colors.white,
        border: `1px solid ${colors.light50}`,
        borderRadius: '22px',
        overflow: 'hidden',
    },
    cardBg: {
        width: '100%',
        height: '80px',
        background: colors.talentCardBg,
        overflow: 'hidden',
    },
    cardBgImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(14px)',
    },
    cardBody: {
        position: 'relative',
        padding: {
            default: '0 10px',
            '@media (min-width: 768px)': '0 15px',
        },
        zIndex: '2',
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '8px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '18px',
    },
    cardImage: {
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        marginTop: '-48px',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: {
            default: '1rem',
            '@media (min-width: 768px)': '1.125rem',
        },
        fontWeight: '700',
        lineHeight: '20px',
        marginTop: '6px',
    },
    cardStatus: {
        padding: '14px 0',
        borderTop: `1px solid ${colors.gray100}`,
        borderBottom: `1px solid ${colors.gray100}`,
    },
    stausRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        fontSize: '10px',
        lineHeight: '1.6',
    },
    rating: {
        fontSize: '12px',
        color: colors.stars,
    },
    progress: {
        paddingTop: '7px',
        paddingBottom: '24px',
    },
    progressTitle: {
        fontSize: '10px',
        fontWeight: '700',
        lineHeight: '1.6',
        marginBottom: '4px',
    },
    progressBar: {
        background: colors.light400,
        border: `1px solid ${colors.light500}`,
        borderRadius: '6px',
    },
    progressInner: {
        backgroundColor: colors.slateBlue,
        height: {
            default: '3px',
            '@media (min-width: 768px)': '5px',
        },
        borderRadius: '6px',
    },
});

const TeamCard = ({
    name,
    jobTitle,
    bgImage,
    image,
    salary,
    experience,
    rating,
    availablity,
}: TeamCardTypes) => {
    return (
        <div {...stylex.props(style.card)}>
            <div {...stylex.props(style.cardBg)}>
                <img src={bgImage} alt={name} {...stylex.props(style.cardBgImg)} />
            </div>

            <div {...stylex.props(style.cardBody)}>
                <div {...stylex.props(style.cardInfo)}>
                    <div {...stylex.props(style.cardImage)}>
                        <img src={image} alt={name} />
                    </div>
                    <h5 {...stylex.props(style.cardTitle)}>{name}</h5>
                    <p>{jobTitle}</p>
                </div>

                <div {...stylex.props(style.cardStatus)}>
                    <div {...stylex.props(style.stausRow)}>
                        <p>Salary:</p>
                        <p>
                            <b>${salary}/hour</b>
                        </p>
                    </div>
                    <div {...stylex.props(style.stausRow)}>
                        <p>Years of Experience:</p>
                        <p>
                            <b>{experience}</b>
                        </p>
                    </div>
                    <div {...stylex.props(style.stausRow)}>
                        <p>Communication skills:</p>
                        <div>
                            {Array.from({ length: rating }, (_, i) => (
                                <span key={i} {...stylex.props(style.rating)}>
                                    <HiMiniStar />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div {...stylex.props(style.progress)}>
                    <h6 {...stylex.props(style.progressTitle)}>{availablity} hours/week</h6>

                    <div {...stylex.props(style.progressBar)}>
                        <div
                            {...stylex.props(style.progressInner)}
                            style={{ width: availablity * 2 + '%' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
