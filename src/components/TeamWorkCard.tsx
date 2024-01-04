import * as stylex from '@stylexjs/stylex';
import { HiMiniArrowRight } from 'react-icons/hi2';

type TeamMember = {
    id: string;
    img: string;
    name: string;
    specialty: string;
    hourlyRate: number;
};

type PropsType = {
    teamMember: TeamMember[];
    isHighlighted?: boolean;
    coverImg?: string;
};

const style = stylex.create({
    card: {
        position: 'relative',
        width: 'calc(25% - 23px)',
        height: '100%',
        background: '#fff',
        border: '3px solid #EFEFEF',
        borderRadius: '21px',
        padding: '18px',
        boxShadow: '0px 14px 34px -10px rgba(0, 0, 0, 0.10)',
        overflow: 'hidden',
    },
    cardCover: {
        position: 'absolute',
        inset: '0',
        background: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    cardRow: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #D6D6D6',
        borderRadius: '10px',
    },
    cardImg: {
        display: 'block',
        width: '70px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '10px 0 0 10px',
    },
    cardContent: {
        flex: '1',
        fontSize: '10px',
        lineHeight: '1.5',
        padding: '0 8px',
    },
    cardTitle: {
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '1.1',
        marginBottom: '2px',
    },
    cardBtnRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '8px',
        lineHeight: '1.5',
        fontWeight: '600',
        marginTop: '3px',
    },
    cardBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        textTransform: 'uppercase',
        fontSize: '7px',
        fontWeight: '600',
        lineHeight: '15px',
        padding: '2px',
    },
    cardBtnIcon: {
        fontSize: '12px',
        color: '#4F59CC',
        lineHeight: '1',
    },
});

const TeamWorkCard = ({ teamMember, isHighlighted, coverImg }: PropsType) => {
    return (
        <div {...stylex.props(style.card)}>
            {isHighlighted && (
                <div {...stylex.props(style.cardCover)}>
                    <img src={coverImg} alt='Icon' />
                </div>
            )}

            <div {...stylex.props(style.cardBody)}>
                {teamMember.map((team) => (
                    <div key={team.id} {...stylex.props(style.cardRow)}>
                        <img src={team.img} alt={team.name} {...stylex.props(style.cardImg)} />

                        <div {...stylex.props(style.cardContent)}>
                            <h5 {...stylex.props(style.cardTitle)}>{team.name}</h5>
                            <p>{team.specialty}</p>

                            <div {...stylex.props(style.cardBtnRow)}>
                                <p>${team.hourlyRate}/Hour</p>
                                <button {...stylex.props(style.cardBtn)}>
                                    <span>View Work</span>
                                    <span {...stylex.props(style.cardBtnIcon)}>
                                        <HiMiniArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamWorkCard;
