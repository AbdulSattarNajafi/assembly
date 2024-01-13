import * as stylex from '@stylexjs/stylex';
import { colors } from '../styles/tokens.stylex';

type TableTypes = {
    data: string[][];
};

const style = stylex.create({
    tableContainer: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        border: `1px solid ${colors.light200}`,
        borderSpacing: '0',
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    tableRow: {
        background: colors.white,
        border: 'none',
        fontSize: '1rem',
        fontWeight: '400',
        color: colors.black,
        lineHeight: '30px',
        cursor: 'pointer',
        transition: 'alll 0.25s ease',
        ':nth-child(odd)': {
            background: colors.light200,
        },
        ':hover': {
            background: colors.light300,
            color: colors.slateBlue,
        },
    },
    tableData: {
        padding: {
            default: '8px 8px',
            '@media (min-width: 992px)': '10px 8px',
        },
        border: 'none',
        ':first-child': {
            paddingLeft: {
                default: '8px',
                '@media (min-width: 1200px)': '20px',
            },
        },
    },
});

const Table = ({ data }: TableTypes) => {
    return (
        <div {...stylex.props(style.tableContainer)}>
            <table {...stylex.props(style.table)}>
                <tbody>
                    {data.map((tableData, i) => (
                        <tr key={i} {...stylex.props(style.tableRow)} role='button'>
                            {tableData.map((tdData, index) => (
                                <td key={index} {...stylex.props(style.tableData)}>
                                    {tdData}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
