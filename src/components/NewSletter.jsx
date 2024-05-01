import Banner from "../shared/Banner";
import BannerImg from "../assets/undra.png";

const NewSletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      {/* using our banner component and pass the props  */}
      <Banner
        banner={BannerImg}
        heading="Each student an share their discount code for friends"
        subheading={
          "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        }
        btn1={"I have a code"}
      />
    </div>
  );
};

export default NewSletter;
