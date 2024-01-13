import * as stylex from '@stylexjs/stylex';
import Container from '../components/Container';
import Table from '../components/Table';
import { typography } from '../styles/typography.stylex';

type SalesOpsTypes = {
    title: string;
    tableData: string[][];
};

const style = stylex.create({
    section: {
        padding: '2rem 0',
    },
    title: {
        textAlign: 'center',
        marginBottom: {
            default: '30px',
            '@media (min-width: 992px)': '40px',
        },
    },
});

const SalesOps = ({ title, tableData }: SalesOpsTypes) => {
    return (
        <div {...stylex.props(style.section)}>
            <Container>
                <h3 {...stylex.props(typography.heading2, style.title)}>{title}</h3>
                <Table data={tableData} />
            </Container>
        </div>
    );
};

export default SalesOps;
