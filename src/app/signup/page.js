"use client";
import { GiBirdMask } from "react-icons/gi";
import styles from "./page.module.css";
import { useInfo } from "@/src/globalVars";
import { useRef } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";
import Link from "next/link";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(false);
  const signup = async () => {
    const formdata = new FormData();
    formdata.append("logo", image, URL.createObjectURL(image));
    formdata.append("name", name);
    formdata.append("phoneNum", number);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("location", location);
    formdata.append("facebookURL", facebook);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://tourism-api-6hcg.onrender.com/tourism-api/v1/company/signup",
        requestOptions
      );

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("companyInfo", JSON.stringify(result.company[0]));
        console.log("teeeeeeeeeeeest:", localStorage.getItem("companyInfo"));
        setCompany(result.company[0]);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const {
    setName,
    setNumber,
    setEmail,
    setPassword,
    setLocation,
    setFacebook,
    setImage,
    name,
    image,
    number,
    email,
    password,
    location,
    facebook,
  } = useInfo();
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = async (event) => {
    await setImage(event.target.files[0]);
  };
  function done() {
    if (
      name !== "" &&
      image &&
      number !== "" &&
      email !== "" &&
      password !== "" &&
      location !== "" &&
      facebook !== ""
    ) {
      return true;
    } else {
      return false;
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
    if (company !== null) {
      redirect("/Verify");
    }
  }, [company]);

  return (
    <main
      className={isLoading ? null : styles.main}
      style={
        isLoading
          ? {
              width: "100%",
              height: "100vh",
              display: "grid",
              placeItems: "center",
            }
          : null
      }
    >
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.Container}>
          <div>
            <div className={styles.logo}>
              <p className={styles.sublogo}>هُُد</p>
              <p>هد</p>
              <GiBirdMask fill="#197bbd" className={styles.svglogo} />
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.subForm}>
              <div
                className={styles.companyLogo}
                style={image ? { borderRadius: "50%" } : null}
                onClick={handleImageClick}
              >
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                {!image ? (
                  <>
                    <div className={styles.logoBox}>
                      <div className={styles.compLogoBox}>
                        <FaRegBuilding className={styles.image1} />
                      </div>
                      <div className={styles.box}>
                        <LuUpload className={styles.image2} />
                      </div>
                    </div>
                    <p className={styles.text}>شعار الشركة</p>
                  </>
                ) : (
                  <>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "90%",
                        height: "90%",
                        borderRadius: "50%",
                        position: "relative",
                        top: "14px",
                      }}
                      src={URL.createObjectURL(image)}
                      alt={"no image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </>
                )}
              </div>
              <div className={styles.subFormInputs}>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="اسم الشركة"
                    className={styles.input}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    placeholder="رقم الهاتف"
                    maxLength="11"
                    className={styles.input}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className={styles.lastInput}>
                  <input
                    type="email"
                    placeholder="البريد الالكتروني"
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.mainform}>
              <div className={styles.input}>
                <input
                  type="text"
                  placeholder="موقع الشركة:بغداد الجادرية تقاطع الجامعة"
                  className={styles.input}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <input
                  type="text"
                  placeholder="رابط صفحة الفيسبوك"
                  className={styles.input}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <input
                  type="password"
                  placeholder="كلمة السر"
                  className={styles.input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.msg}>
              <p style={error === false ? { display: "none" } : null}>
                رقم الهاتف او البريد الكتروني مرتبط بحساب اخر
              </p>
            </div>
            <button
              className={done() ? styles.click : null}
              style={done() ? { backgroundColor: "#197bbd" } : null}
              onClick={() => {
                if (done()) {
                  setIsLoading(true);
                  signup();
                }
              }}
            >
              إنشاء حساب
            </button>
            <div className={styles.linkBox}>
              <div>
                <p>او اذا كنت تمتلك حساباً</p>
                <Link href="/Login">سجل الدخول</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
