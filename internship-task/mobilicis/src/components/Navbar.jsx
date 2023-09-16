import React from "react";

const Navbar = ({ user }) => {
  return (
    <nav className="w-full flex px-[44.44px] max-md:px-[1rem] max-sm:px-[2rem] pt-4 pb-[15.57px] max-md:py-0 bg-white border-b border-stone-300 justify-end max-sm:justify-between items-center  ">
      <div className="menu-icon sm:hidden flex gap-[7px]">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 8L5.6 8"
              stroke="#222222"
              strokeOpacity="0.9"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M18.4 12L5.59999 12"
              stroke="#FFCB00"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M13.6 16H5.60001"
              stroke="#222222"
              strokeOpacity="0.9"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <img
          className="w-[59px] h-[27px]"
          src="https://via.placeholder.com/59x27"
        />
      </div>
      <div className="w-[304px] max-md:w-max h-[57.32px] max-md:h-[56px] justify-start items-center gap-[16.38px] inline-flex">
        <div className="max-md:flex gap-[11px] max-md:w-max relative  items-center flex bg-black bg-opacity-0">
          <div className="w-15 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1223 20.8458C11.6525 21.4364 12.3332 21.7608 13.0395 21.7608H13.0405C13.7498 21.7608 14.4336 21.4364 14.9648 20.8447C15.2494 20.5305 15.7345 20.5049 16.0488 20.7884C16.364 21.072 16.3896 21.5582 16.1061 21.8724C15.279 22.7905 14.191 23.2962 13.0405 23.2962H13.0384C11.891 23.2952 10.805 22.7895 9.98104 21.8714C9.69752 21.5571 9.7231 21.071 10.0384 20.7884C10.3536 20.5039 10.8388 20.5295 11.1223 20.8458ZM13.0904 1.28946C17.6402 1.28946 20.6966 4.83306 20.6966 8.14225C20.6966 9.84445 21.1296 10.5661 21.5891 11.3317C22.0436 12.0871 22.5585 12.9448 22.5585 14.5662C22.2012 18.7086 17.8767 19.0463 13.0904 19.0463C8.30423 19.0463 3.97863 18.7086 3.62549 14.6317C3.62243 12.9448 4.13728 12.0871 4.59175 11.3317L4.75219 11.0616C5.14721 10.3827 5.4843 9.64419 5.4843 8.14225C5.4843 4.83306 8.54068 1.28946 13.0904 1.28946ZM13.0904 2.82481C9.51307 2.82481 7.01965 5.62734 7.01965 8.14225C7.01965 10.2703 6.42906 11.2539 5.90704 12.1219C5.4884 12.8189 5.15778 13.3696 5.15778 14.5662C5.32872 16.4966 6.60306 17.511 13.0904 17.511C19.542 17.511 20.8563 16.4516 21.0262 14.4996C21.0231 13.3696 20.6925 12.8189 20.2739 12.1219C19.7518 11.2539 19.1612 10.2703 19.1612 8.14225C19.1612 5.62734 16.6678 2.82481 13.0904 2.82481Z"
                fill="#1E2875"
              />
            </svg>
          </div>
          <button className="account-btn">
            <img
              className="w-6 h-6 md:hidden rounded-full shadow border border-slate-50"
              src="https://via.placeholder.com/24x24"
            />
          </button>
        </div>

        <div className="w-[263.06px] max-md:hidden h-[54.25px] px-[8.19px] py-[10.24px] bg-white bg-opacity-50 rounded-lg border border-indigo-50 justify-start items-center gap-[10.24px] inline-flex">
          <div className="w-[32.75px] h-[32.75px] bg-red-300 rounded-[6.82px] justify-center items-center flex">
            <img
              className="w-[33.99px] h-[33.99px]"
              src="https://via.placeholder.com/34x34"
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[14.33px] text-slate-700 text-[10.24px] font-medium">
              Welcome back,
            </div>
            <div className="self-stretch h-[24.57px] text-slate-700 text-lg font-medium">
              Vishnu Swaroop
            </div>
          </div>
          <div className="w-[24.57px] h-[24.57px] relative bg-black bg-opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                d="M5.37634 8.42388C5.64888 8.15134 6.07536 8.12656 6.37589 8.34955L6.462 8.42388L13.0841 15.0457L19.7063 8.42388C19.9788 8.15134 20.4053 8.12656 20.7059 8.34955L20.792 8.42388C21.0645 8.69643 21.0893 9.12291 20.8663 9.42344L20.792 9.50954L13.627 16.6745C13.3544 16.9471 12.928 16.9718 12.6274 16.7489L12.5413 16.6745L5.37634 9.50954C5.07654 9.20975 5.07654 8.72368 5.37634 8.42388Z"
                fill="#1E2875"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
