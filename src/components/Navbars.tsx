"use client";

import Link from "next/link";
import { AppContext } from "@/app/layout";
import { FC, useContext, useState } from "react";
import { ethers } from "ethers";
const Navbars: FC = () => {
  const { account, setAccount } = useContext(AppContext);
  const [balance, setBalance] = useState<number>();
  const onClickLogIn = async () => {
    try {
      const accounts = await window.ethereum?.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      const _balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0].toString(), "latest"],
      });

      setBalance(ethers.formatEther(_balance));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <div>LION SHOP</div>
        </Link>
        {account ? (
          <div className="flex items-center">
            <div>{account.substring(0, 4)}</div>
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            <div>{balance && balance.substring(0, 6)} ETH</div>
          </div>
        ) : (
          <button
            onClick={onClickLogIn}
            className="text-blue-700 rounded-full bg-white min-w-[130px]"
          >
            지갑로그인
          </button>
        )}

        {/* <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rouded-full bg-white min-w-[130px]"
        /> */}
      </nav>
    </header>
  );
};

export default Navbars;
