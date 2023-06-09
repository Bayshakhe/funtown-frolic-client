import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import SectionTitle from '../../components/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle subTitle='A Great Place To Learn' title='Popular Classes'></SectionTitle>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;