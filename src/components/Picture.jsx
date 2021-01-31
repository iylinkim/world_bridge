import React from "react";

const Pictures = ({ picture }) => {
  const {
    urls,
    location: { city, country, name },
  } = picture;
  console.log(picture);
  return (
    <section className="section">
      <p className="picture_info">
        <i className="fas fa-map-marker-alt"></i>&nbsp;{name ? name : "Unknown place"}
      </p>
      <p className="bakImg">
        <img src={urls.full} alt="" />
      </p>
    </section>
  );
};

export default Pictures;
