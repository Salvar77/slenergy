import React from "react";
import classes from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={classes.mapWrapper}>
      <iframe
        title="Mapa lokalizacji Speed Light Energy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1287142.91146804!2d15.106137012892564!3d50.943119247589394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x209167f644624839%3A0x87d39c0598e68b29!2sSpeed%20Light%20Energy!5e0!3m2!1spl!2spl!4v1759860111713!5m2!1spl!2spl"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
