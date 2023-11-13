const Account = () => {
  return (
    <div className="flex bg-white drop-shadow-sm p-5">
      <div className="flex flex-col mr-10">
        <AccountDescription />
        <div className="flex p-2">
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
      <div className="ml-5">
        <Image />
      </div>
    </div>
  );
};

const AccountDescription = () => {
  return (
    <div className="m-2 p-2 flex flex-col text-start">
      <span className="font-semibold text-lg">Account</span>
      <span className="text-gray-500">
        To Place your order now, log in to your existing account or sign up.
      </span>
    </div>
  );
};

const LogInButton = () => {
  return (
    <button className="flex flex-col border border-[#60b246] items-center m-2 p-1 text-[#60b246] px-5">
      <span className="text-xs">Have an account?</span>
      <span className="text-sm font-semibold">LOG IN</span>
    </button>
  );
};
const SignUpButton = () => {
  return (
    <button className="flex flex-col border border-green-600 items-center m-2 p-1 text-white bg-[#60b246] px-5">
      <span className="text-xs">New to Swiggy?</span>
      <span className="text-sm font-semibold">SIGN UP</span>
    </button>
  );
};

const Image = () => {
  return (
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"></img>
  );
};

export default Account;
