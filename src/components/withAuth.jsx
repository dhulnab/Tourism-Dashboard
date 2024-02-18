"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

function withAuth(Component) {
  return function WithAuth(props) {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("tourismToken")
        : false;
    useEffect(() => {
      if (!token) {
        redirect("/Login");
      }
    }, []);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
