
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import FeedBackHome from "../FeedBack/FeedBackHome";
import PopularCamps from "../PopularCamps/PopularCamps";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <FeedBackHome></FeedBackHome>
      <Faq></Faq>
    </div>
  );
};

export default Home;
