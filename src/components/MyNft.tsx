"use client";

import { mintNftContract } from "@/lib/web3.config";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/layout";
import NftCard from "./NftCard";

const MyNft = () => {
  const [tokenIds, setTokenIds] = useState<number[]>();

  const { account } = useContext(AppContext);

  const getMyNfts = async () => {
    try {
      const response: bigint[] = await mintNftContract.methods
        .getAllNft(account)
        .call();

      const tempArray = response.map((v) => {
        return Number(v);
      });

      setTokenIds(tempArray);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMyNfts();
  }, [account]);

  return (
    <div>
      {tokenIds?.reverse().map((v, i) => {
        return <NftCard key={i} tokenId={v} />;
      })}
    </div>
  );
};

export default MyNft;
