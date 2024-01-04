import * as stylex from '@stylexjs/stylex';
import { HiMiniStar } from 'react-icons/hi2';

type PropsType = {
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
        background: '#fff',
        border: '1px solid #E3E3E3',
        borderRadius: '22px',
        overflow: 'hidden',
    },
    cardBg: {
        width: '100%',
        height: '80px',
        background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), lightgray 50% ',
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
        padding: '0 15px',
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
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '20px',
        marginTop: '6px',
    },
    cardStatus: {
        padding: '14px 0',
        borderTop: '1px solid #CECECE',
        borderBottom: '1px solid #CECECE',
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
        color: '#FFC226',
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
        background: '#E8E8E9',
        border: '1px solid #D5D5D5',
        borderRadius: '6px',
    },
    progressInner: {
        backgroundColor: '#4F59CC',
        height: '5px',
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
}: PropsType) => {
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
