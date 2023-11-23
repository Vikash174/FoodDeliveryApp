import { AppleStoreButton, GooglePlayStoreButton } from './LandingBody';

const LandingFooter = () => {
  return (
    <div className="bg-black text-white flex flex-col text-center sm:flex-row sm:justify-around sm:p-5 w-[100vw]">
      <Company />
      <Contact />
      <Legal />
      {/* <AppDownloadButtons /> */}
    </div>
  );
};

const Company = () => {
  return (
    <div className="p-2 sm:text-start md:p-10">
      <span className="text-[#93959f] font-semibold md:text-xl">COMPANY</span>
      <ul className="text-sm md:text-lg">
        <li>About us</li>
        <li>Team</li>
        <li>Carrers</li>
        <li>Swiggy Blog</li>
        <li>Bug Bounty</li>
        <li>Swiggy One</li>
        <li>Swiggy Corporate</li>
        <li>Swiggy Genie</li>
        <li>Swiggy HDFC</li>
        <li>ESG</li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="p-2 sm:text-start md:p-10">
      <span className="text-[#93959f] font-semibold md:text-xl">CONTACT</span>
      <ul className="text-sm md:text-lg">
        <li>Help & Support</li>
        <li>Partner with us</li>
        <li>Ride with us</li>
      </ul>
    </div>
  );
};

const Legal = () => {
  return (
    <div className="p-2 sm:text-start md:p-10">
      <span className="text-[#93959f] font-semibold md:text-xl">LEGAL</span>
      <ul className="text-sm md:text-lg">
        <li>Terms & Condition</li>
        <li>Refund & Cancellation</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Offer Terms</li>
        <li>Phishing & Fraud</li>
      </ul>
    </div>
  );
};

const AppDownloadButtons = () => {
  return (
    <div className="p-5 hidden sm:block ">
      <GooglePlayStoreButton />
      <AppleStoreButton />
    </div>
  );
};

export default LandingFooter;
