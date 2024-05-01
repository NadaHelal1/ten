import banner from "./assets/banner1.png";
import Banner from "./shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl max-auto mt-24 " id="home">
      <Banner
        banner={banner}
        heading=" Develop your skills without diligence"
        subheading=" A good example pf a paragraph contains a topic sentence ,details and
             a conclusion. there are many differeent kinds of animals that live in china."
        btn1={"Get started"}
        btn2={"Discount"}
      />
    </div>
  );
};

export default Home;
