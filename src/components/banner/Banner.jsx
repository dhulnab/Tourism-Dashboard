"use client";
import styles from "./Banner.module.css";
import img1 from "../../../public/img3.jpg";
import img2 from "../../../public/img1.jpg";
import img3 from "../../../public/img2.jpg";
import { Fragment, useEffect, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ProgressBar from "../progressBar/ProgressBar";
import Image from "next/image";

function Banner() {
  const trips = [
    {
      id: 3,
      country: "لبنان",
      type: "ترفية",
      img: img3,
      price: "180.00",
      pricePerChild: "170.00",
      startDate: "2024-Mar-12",
      endDate: "2024-Apr-12",
      userNum: 59,
      limit: 78,
      bgcolor: "#EFF075",
    },
    {
      id: 1,
      img: img1,
      country: "العراق",
      type: "دينية",
      price: "130.00",
      pricePerChild: "120.00",
      startDate: "2024-Nov-12",
      endDate: "2024-Dec-12",
      userNum: 3,
      limit: 4,
      bgcolor: "#197bbd",
    },
    {
      id: 2,
      country: "تركيا",
      type: "ترفية",
      img: img2,
      price: "150.00",
      pricePerChild: "140.00",
      startDate: "2024-Jan-12",
      endDate: "2024-Fab-12",
      userNum: 1,
      limit: 3,
      bgcolor: "#eee",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === trips.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? trips.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {}, [slideIndex]);

  return (
    <Fragment>
      <div className={styles.tripbox}>
        <div className={styles.arrow} onClick={nextSlide}>
          <SlArrowLeft />
        </div>
        <div className={styles.cover} key={trips[slideIndex].id}>
          <Image
            src={trips[slideIndex].img}
            alt="none"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.arrow} onClick={previousSlide}>
          <SlArrowRight />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.tripInfo}>
          <h2>{trips[slideIndex].country}</h2>
          <p>الوجهة</p>
          <h3 className={styles.type}> {trips[slideIndex].type}</h3>
          <p>نوع الرحلة</p>
          <h3 className={styles.price}>$ {trips[slideIndex].price}</h3>
          <p>السعر للشخص البالغ</p>
          <h3 className={styles.subprice}>
            $ {trips[slideIndex].pricePerChild}
          </h3>
          <p>السعر للطفل</p>
        </div>
      </div>
      <div className={styles.footerBox}>
        <>
          <div className={styles.footer}>
            <div className={styles.progress}>
              <ProgressBar
                completed={
                  (trips[slideIndex].userNum / trips[slideIndex].limit) * 100
                }
              />
              <div className={styles.progressLabel}>
                <div className={styles.progressStatus}>
                  {trips[slideIndex].limit}/{trips[slideIndex].userNum}
                </div>
                <div className={styles.progressText}>
                  عدد الاشخاص المتبقين لتمتلئ الرحلة
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <span>{trips[slideIndex].startDate}</span>
              <span>{trips[slideIndex].endDate}</span>
              <p className={styles.label}>تاريخ الرحلة</p>
            </div>
          </div>
        </>
      </div>
    </Fragment>
  );
}

export default Banner;
