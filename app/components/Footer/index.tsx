"use client"
import Skeleton from 'react-loading-skeleton'
import useEthereumData from "@/lib/ethUtils";
import MotionNumber from 'motion-number'
import { Block, Eth, Gas } from "../icons";
import { useState } from "react";

export function Footer() {
  const { blockNumber, gasPrice, ethPrice } = useEthereumData();

  return (
    <footer className="flex items-center" style={{ height: "auto" }}>
      <div className="flex flex-row legal-footer justify-center">
        <a href="https://www.eclipse.xyz/terms" target="_blank"> Terms & Conditions </a>
        <a href="https://www.eclipse.xyz/privacy-policy" target="_blank"> Privacy Policy </a>
        <a href="https://docs.eclipse.xyz" target="_blank"> Docs </a>
        <a href="https://discord.gg/eclipse-fnd" target="_blank"> Discord </a>
      </div>
      <div className="flex flex-row info-footer justify-between">
        <div className="ml-[28px] flex flex-row items-center gap-2">
          <Gas gasClassName="gas" /> 
          <span>Gas</span>
          {gasPrice 
            ? <span style={{color: "rgba(161, 254, 160, 0.5)"}}> ${gasPrice}</span>
            : <Skeleton height={15} width={58} />
          }
        </div>
        <div className="ml-[28px] flex flex-row items-center gap-2">
         <Eth ethClassName="eth" />
          <span>Eth</span> 
          {ethPrice
            ? <MotionNumber
                value={ethPrice}
                format={{ notation: "standard", style: 'currency', currency: 'USD'}} 
                style={{
                  color: "rgba(161, 254, 160, 0.5)"
                }}
                transition={{
                  y: { type: 'spring', duration: 1, bounce: 0.25 }
                }}
                locales="en-US" 
              />
            : <Skeleton height={15} width={62} />
          }
        </div>
        <div className="ml-[28px] flex flex-row items-center gap-2">
          <Block blockClassName="block" />
          <span>Block</span> 
          {blockNumber 
            ? <MotionNumber
                value={blockNumber}
                format={{ useGrouping: false }} 
                style={{
                  color: "rgba(161, 254, 160, 0.5)"
                }}
                transition={{
                  y: { type: 'spring', duration: 1, bounce: 0.25 }
                }}
                locales="en-US" 
              />
            : <Skeleton height={15} width={67} />
          }
        </div>
      </div>
    </footer>
  )
}
