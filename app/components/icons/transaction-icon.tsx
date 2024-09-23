import React from 'react';
import { Loading } from "./index"

const TransactionIcon = ({ iconType, className, isGreen }: { iconType: string, className?: string, isGreen?: boolean}) => {
  if (iconType === "failed") {
    return (
      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333984 7.50016C0.333984 3.81826 3.31875 0.833496 7.00065 0.833496C10.6825 0.833496 13.6673 3.81826 13.6673 7.50016C13.6673 11.182 10.6825 14.1668 7.00065 14.1668C3.31875 14.1668 0.333984 11.182 0.333984 7.50016ZM5.47206 5.02876C5.2117 4.76841 4.7896 4.76841 4.52924 5.02876C4.2689 5.28911 4.2689 5.71122 4.52924 5.97157L6.05785 7.50016L4.52924 9.02876C4.2689 9.2891 4.2689 9.71123 4.52924 9.97156C4.7896 10.2319 5.2117 10.2319 5.47206 9.97156L7.00065 8.44296L8.52925 9.97156C8.78958 10.2319 9.21172 10.2319 9.47205 9.97156C9.73238 9.71123 9.73238 9.2891 9.47205 9.02876L7.94345 7.50016L9.47205 5.97157C9.73238 5.71122 9.73238 5.28911 9.47205 5.02876C9.21172 4.76841 8.78958 4.76841 8.52925 5.02876L7.00065 6.55736L5.47206 5.02876Z" fill="#EB4D4D"/>
      </svg>
    );
  } else if (iconType === "completed") {
    return (
      <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00065 0.333496C3.31875 0.333496 0.333984 3.31826 0.333984 7.00016C0.333984 10.682 3.31875 13.6668 7.00065 13.6668C10.6825 13.6668 13.6673 10.682 13.6673 7.00016C13.6673 3.31826 10.6825 0.333496 7.00065 0.333496ZM9.51665 5.7557C9.74978 5.47071 9.70778 5.0507 9.42278 4.81754C9.13785 4.5844 8.71785 4.6264 8.48465 4.91136L5.95118 8.0079L5.13872 7.19543C4.87837 6.9351 4.45626 6.9351 4.19591 7.19543C3.93556 7.45576 3.93556 7.8779 4.19591 8.13823L5.52924 9.47156C5.66243 9.60476 5.84572 9.67543 6.03385 9.66603C6.22198 9.65663 6.39732 9.5681 6.51665 9.42236L9.51665 5.7557Z" fill="#A1FEA0"/>
      </svg>
    );
  } else if (iconType === "loading") {
    return (<Loading style={{color: isGreen ? "rgba(161, 254, 160, 1)" : ""}} loadingClassName={className ? className : ""} />)
  }
}

export default TransactionIcon;
