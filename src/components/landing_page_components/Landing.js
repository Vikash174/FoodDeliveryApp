import LandingBody from './LandingBody';
import LandingFooter from './LandingFooter';
import LandingHeader from './LandingHeader';

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <LandingHeader />
      <LandingBody />
      <LandingFooter />
    </div>
  );
};

export default Landing;
