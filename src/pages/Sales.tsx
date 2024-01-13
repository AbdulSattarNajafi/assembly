import SalesSection from '../components/SalesSection';
import Hero from '../sections/Hero';
import SalesOps from '../sections/SalesOps';
import { MarketingTableData, SalesTableData, FinanceTableData } from '../utils/constants';
import HeroImage from './../assets/images/hero.png';

const Sales = () => {
    return (
        <>
            <Hero
                heading1='Lower Your Opex & Move Faster'
                heading2='Hire Incredible Experts & Teams for'
                text='Pre-Vetted Experts. Starting at - $20/Hour'
                image={HeroImage}
            />
            <SalesSection>
                <SalesOps title='Sales Ops' tableData={SalesTableData} />
                <SalesOps title='Lead Generation & Marketing Ops' tableData={MarketingTableData} />
                <SalesOps title='Finance & Business Ops' tableData={FinanceTableData} />
            </SalesSection>
        </>
    );
};

export default Sales;
