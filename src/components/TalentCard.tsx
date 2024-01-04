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
    expertise: string[];
};

const style = stylex.create({
    card: {
        width: '100%',
        background: '#fff',
        borderRadius: '41px',
        boxShadow: ' 0px 2.382px 32.153px 0px rgba(0, 0, 0, 0.10)',
        overflow: 'hidden',
    },
    cardBg: {
        width: '100%',
        height: '150px',
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
        padding: '0 28px',
        zIndex: '2',
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '15px',
        textAlign: 'center',
        fontSize: '22px',
        lineHeight: '34px',
    },
    cardImage: {
        width: '186px',
        height: '186px',
        borderRadius: '50%',
        marginTop: '-93px',
    },
    cardImageImg: {
        width: '100%',
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: '35px',
        fontWeight: '700',
        lineHeight: '1.1',
        marginTop: '11px',
    },
    cardStatus: {
        padding: '22px 0',
        borderTop: '1px solid #CECECE',
        borderBottom: '1px solid #CECECE',
    },
    stausRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2px',
        fontSize: '18px',
        lineHeight: '1.6',
    },
    rating: {
        fontSize: '20px',
        color: '#FFC226',
    },
    expertise: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '42px 0',
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
}: PropsType) => {
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
                        <img src={item} alt='Image' key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TalentCard;
