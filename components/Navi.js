import React from "react";
import { ConnectButton } from "web3uikit";

const Navi = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Stouchi
        </a>
      </div>
      <div>
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Navi;
