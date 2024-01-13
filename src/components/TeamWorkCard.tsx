import * as stylex from '@stylexjs/stylex';
import { HiMiniArrowRight } from 'react-icons/hi2';
import GetstartCard from './GetstartCard';
import { colors } from '../styles/tokens.stylex';

type TeamMember = {
    id: string;
    img: string;
    name: string;
    specialty: string;
    hourlyRate: number;
};

type TeamWorkCardTypes = {
    teamMember: TeamMember[];
    title: [string, string];
    isHighlighted?: boolean;
    coverImg?: string;
};

const style = stylex.create({
    cardCover: {
        position: 'absolute',
        inset: '0',
        background: colors.whiteOverlay,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    cardRow: {
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${colors.light600}`,
        borderRadius: '10px',
    },
    cardImg: {
        display: 'block',
        width: '70px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '10px 0 0 10px',
    },
    cardTexts: {
        flex: '1',
        fontSize: '10px',
        lineHeight: '1.5',
        padding: '0 8px',
    },
    cardName: {
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
        color: colors.slateBlue,
        lineHeight: '1',
    },
});

const TeamWorkCard = ({ teamMember, title, isHighlighted, coverImg }: TeamWorkCardTypes) => {
    return (
        <GetstartCard title={title}>
            {isHighlighted && (
                <div {...stylex.props(style.cardCover)}>
                    <img src={coverImg} alt='Icon' />
                </div>
            )}

            <div {...stylex.props(style.cardContent)}>
                {teamMember.map((team) => (
                    <div key={team.id} {...stylex.props(style.cardRow)}>
                        <img src={team.img} alt={team.name} {...stylex.props(style.cardImg)} />

                        <div {...stylex.props(style.cardTexts)}>
                            <h5 {...stylex.props(style.cardName)}>{team.name}</h5>
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
        </GetstartCard>
    );
};

export default TeamWorkCard;
