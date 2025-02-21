import {
  SkeletonCardContent,
  SkeletonImage,
  SkeletonText,
} from "@/styles/skeleton";
import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <SkeletonCardContent>
      <SkeletonImage />
      <div>
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </div>
    </SkeletonCardContent>
  );
};

export default SkeletonCard;
