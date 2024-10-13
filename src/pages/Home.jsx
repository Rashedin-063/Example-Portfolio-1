import About from "../components/About";
import Banner from "../components/Banner";
import Skills from "../components/SkillCard";
import WhyHireMe from "../components/WhyHireMe";

const Home = () => {
  return (
    <div className='text-center space-y-12'>
      <Banner />
      <About />
      <Skills/>
      <WhyHireMe />
    </div>
  );
}
export default Home