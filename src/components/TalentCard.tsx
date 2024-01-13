import * as stylex from '@stylexjs/stylex';
import { HiMiniStar } from 'react-icons/hi2';
import { colors, shadow } from '../styles/tokens.stylex';

type TalentCardTypes = {
    name: string;
    jobTitle: string;
    bgImage: string;
    image: string;
    salary: number;
    experience: string;
    rating: number;
    expertise: string[];
};

const style = stylex.create({
    card: {
        width: '100%',
        background: colors.white,
        borderRadius: '41px',
        boxShadow: shadow.shadowSm,
        overflow: 'hidden',
    },
    cardBg: {
        width: '100%',
        height: {
            default: '122px',
            '@media (min-width: 768px)': '140px',
            '@media (min-width: 992px)': '150px',
        },
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
            default: '0 16px',
            '@media (min-width: 768px)': '0 20px',
            '@media (min-width: 992px)': '0 28px',
        },
        zIndex: '2',
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '15px',
        textAlign: 'center',
        fontSize: {
            default: '18px',
            '@media (min-width: 768px)': '20px',
            '@media (min-width: 992px)': '22px',
        },
        lineHeight: '34px',
    },
    cardImage: {
        width: {
            default: '152px',
            '@media (min-width: 768px)': '162px',
            '@media (min-width: 992px)': '186px',
        },
        height: {
            default: '152px',
            '@media (min-width: 768px)': '162px',
            '@media (min-width: 992px)': '186px',
        },
        borderRadius: '50%',
        marginTop: {
            default: '-76px',
            '@media (min-width: 768px)': '-81px',
            '@media (min-width: 992px)': '-93px',
        },
    },
    cardImageImg: {
        width: '100%',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: {
            default: '28px',
            '@media (min-width: 768px)': '30px',
            '@media (min-width: 992px)': '35px',
        },
        fontWeight: '700',
        lineHeight: '1.1',
        marginTop: '11px',
    },
    cardStatus: {
        padding: {
            default: '16px 0',
            '@media (min-width: 768px)': '20px 0',
            '@media (min-width: 992px)': '22px 0',
        },
        borderTop: `1px solid ${colors.gray100}`,
        borderBottom: `1px solid ${colors.gray100}`,
    },
    stausRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        fontSize: {
            default: '16px',
            '@media (min-width: 992px)': '18px',
        },
        lineHeight: '1.6',
    },
    rating: {
        fontSize: {
            default: '16px',
            '@media (min-width: 992px)': '18px',
        },
        color: colors.stars,
    },
    expertise: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: {
            default: '20px 0',
            '@media (min-width: 768px)': '32px 0',
            '@media (min-width: 992px)': '42px 0',
        },
    },
    expertiseImg: {
        width: '30%',
        height: 'auto',
    },
});

const TalentCard = ({
    name,
    jobTitle,
    bgImage,
    image,
    salary,
    experience,
    rating,
    expertise,
}: TalentCardTypes) => {
    return (
        <div {...stylex.props(style.card)}>
            <div {...stylex.props(style.cardBg)}>
                <img src={bgImage} alt={name} {...stylex.props(style.cardBgImg)} />
            </div>

            <div {...stylex.props(style.cardBody)}>
                <div {...stylex.props(style.cardInfo)}>
                    <div {...stylex.props(style.cardImage)}>
                        <img {...stylex.props(style.cardImageImg)} src={image} alt={name} />
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

                <div {...stylex.props(style.expertise)}>
                    {expertise.map((item, i) => (
                        <img src={item} alt='Image' key={i} {...stylex.props(style.expertiseImg)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TalentCard;
