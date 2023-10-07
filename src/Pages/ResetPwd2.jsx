const ForgotPasswordPage = () => {
    return (
      <div className="bg-additional-white w-[1920px] h-[1080px] overflow-hidden text-center text-sm text-greyscale-900 font-heading-h6">
        <h1 className="m-0 absolute top-[293px] left-[853px] text-[48px] font-bold font-poppins text-black text-left">
          label lab
        </h1>
        <h2 className="m-0 absolute top-[389px] left-[744px] text-5xl tracking-[0.2px] leading-[125%] font-bold font-inherit inline-block w-[431px]">
          Reset your password
        </h2>
        <div className="absolute top-[431px] left-[744px] leading-[160%] text-greyscale-500 inline-block w-[431px]">
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </div>
        <div className="absolute top-[499px] left-[744px] rounded-xl box-border w-[431px] h-14 flex flex-row items-center justify-start py-2 px-4 gap-[12px] border-[1px] border-solid border-primary-600-base">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/mail1.svg"
          />
          <input
            className="[border:none] font-semibold font-heading-h6 text-base bg-[transparent] relative tracking-[0.2px] leading-[150%] text-greyscale-500 text-center"
            placeholder="Email"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] p-2 bg-primary-600-base absolute top-[587px] left-[744px] rounded-xl w-[431px] h-14 flex flex-row items-center justify-center box-border">
          <b className="relative text-base tracking-[0.2px] leading-[140%] font-heading-h6 text-additional-white text-center">
            Continue
          </b>
        </button>
        <b className="absolute top-[675px] left-[909px] leading-[160%] text-primary-600-base">
          Back to Sign In
        </b>
        <div className="absolute top-[772px] left-[854px] leading-[160%]">
          <span>
            <span>Don’t have an account?</span>
            <span className="tracking-[0.2px] font-medium font-heading-h6">{` `}</span>
          </span>
          <b className="text-primary-600-base">Sign Up</b>
        </div>
      </div>
    );
  };
  
  export default ForgotPasswordPage;
  