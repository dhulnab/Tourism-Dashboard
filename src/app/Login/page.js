"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { GiBirdMask } from "react-icons/gi";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function signup(phoneNumber, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      phoneNum: phoneNumber,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://tourism-api-6hcg.onrender.com/tourism-api/v1/company/login",
        requestOptions
      );

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("tourismToken", result.token);
        setRes(result);
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
  }

  useEffect(() => {
    const tourismToken =
      typeof window !== "undefined"
        ? localStorage.getItem("tourismToken")
        : false;
    if (tourismToken) {
      redirect("/");
    }
    if (res !== null) {
      redirect("/");
    }
  }, [res]);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.container}>
          <div>
            <div>
              <div className={styles.logo}>
                <p className={styles.sublogo}>هُُد</p>
                <p>هد</p>
                <GiBirdMask fill="#197bbd" className={styles.svglogo} />
              </div>
            </div>
            <h3>سجل الدخول</h3>
            <p>وابدأ رحلة نجاحك السياحي اليوم</p>
          </div>
          <div className={styles.formBox}>
            <div className={styles.inputbox}>
              <input
                type="text"
                placeholder="رقم الهاتف"
                className={styles.input}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
            </div>
            <div className={styles.inputbox}>
              <input
                type="password"
                placeholder="كلمة السر"
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={
                phoneNum !== "" && password !== "" ? styles.click : null
              }
              style={
                phoneNum !== "" && password !== ""
                  ? { backgroundColor: "#197bbd" }
                  : null
              }
              onClick={async () => {
                if (phoneNum !== "" && password !== "") {
                  setIsLoading(true);
                  await signup(phoneNum, password);
                } else {
                }
              }}
            >
              تسجيل الدخول
            </button>
          </div>
          <div className={styles.msg}>
            <p style={error === false ? { display: "none" } : null}>
              رقم هاتف او كلمة مرور غير صحيحة
            </p>
          </div>
          <div className={styles.linkBox}>
            <div>
              <p>او قم بانشاء</p>
              <Link href="Signup">حساب جديد</Link>
              <p>لشركتك</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
