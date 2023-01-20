import Router from "next/router";
import React from "react";

export default function useRedirect(newUrl: string) {
  React.useEffect(() => {
    Router.replace(newUrl);
  });
}
