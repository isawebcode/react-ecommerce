"use client";

import {
  LoadingContainer,
  Spinner,
  SpinnerInner,
} from "@/styles/loadingSpinner";

export default function LoadingSpinner() {
  return (
    <>
      <LoadingContainer>
        <Spinner
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <SpinnerInner
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </LoadingContainer>
    </>
  );
}
