// import Banner from './Banner';
import BannerSwiper from './BannerSwiper';
import BookCategory from './BookCategory';
import Services from './Services';
import WelcomeLibrary from './WelcomeLibrary';
// import CounterUp from './CountUp';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <BannerSwiper></BannerSwiper>
            <WelcomeLibrary></WelcomeLibrary>
            <BookCategory></BookCategory>
            <Services></Services>
            {/* <CounterUp></CounterUp> */}
        </div>
    );
};

export default Home;