import React from "react";

const AboutMap = () => {
  return (
    <div className="w-100 py-3">
      <h6 className="text-white text-center">
        Locate<span className="text-info">Us</span>{" "}
      </h6>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.9365280608058!2d5.0275755208230635!3d52.31392846587108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60db0d6dbece7%3A0x611a1f150d3530d8!2sSinnigvelderstraat%20443%2C%201382%20GC%20Weesp!5e0!3m2!1sen!2snl!4v1662991686464!5m2!1sen!2snl"
        width="100%"
        height="250"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, borderRadius: "18px" }}
        className="py-2  shadow-5-strong"
        title="google__maps"
      ></iframe>
    </div>
  );
};

export default AboutMap;

/**
 * References
 * https://stackoverflow.com/questions/61425949/how-to-use-google-map-iframe-embed-code-in-react-js
 */
