"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useRef } from "react";
import { useInfo } from "@/src/globalVars";
import { GiBirdMask } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";

export default function Page() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(null);

  const verify = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      otp: otp,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const id = JSON.parse(localStorage.getItem("companyInfo"));
      console.log(id.companyid);
      const response = await fetch(
        `https://tourism-api-6hcg.onrender.com/tourism-api/v1/company/verify/${id.companyid}`,
        requestOptions
      );
      const result = await response.json();
      if (result.success) {
        localStorage.setItem("tourismToken", result.token);
        setVerified(result);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const tourismToken =
      typeof window !== "undefined"
        ? localStorage.getItem("tourismToken")
        : false;
    if (tourismToken) {
      redirect("/");
    }
    if (verified !== null) {
      redirect("/");
    }
  }, [verified]);
  return (
    <main className={styles.main}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <div>
            <div className={styles.logo}>
              <p className={styles.sublogo}>هُُد</p>
              <p>هد</p>
              <GiBirdMask fill="#197bbd" className={styles.svglogo} />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.verifyIcon}>
              <MdVerifiedUser />
            </div>
            <p>ارسلنا رمز التأكيد الى بريدك الالكتروني</p>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="رمز التأكيد"
                maxLength="6"
                minLength="6"
                className={styles.input}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className={styles.msg}>
              <p style={error === false ? { display: "none" } : null}>
                رمز التأكيد غير صحيح
              </p>
            </div>
            <button
              className={otp.length == 6 ? styles.click : null}
              style={otp.length == 6 ? { backgroundColor: "#197bbd" } : null}
              onClick={() => {
                if (otp != "") {
                  setIsLoading(true);
                  verify();
                }
              }}
            >
              إنشاء حساب
            </button>
          </div>
        </>
      )}
    </main>
  );
}
