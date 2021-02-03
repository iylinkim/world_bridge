import React from "react";

const Pictures = ({ picture }) => {
  const {
    urls,
    location: { name },
    user: { profile_image, username, updated_at },
    description,
  } = picture;
  console.log(picture);
  return (
    <section className="section">
      {picture === undefined ? (
        <p className="loading">loading...</p>
      ) : (
        <>
          <p className="picture_info">
            <i className="fas fa-map-marker-alt"></i>&nbsp;
            {name}
          </p>
          <p className="bakImg">
            <img src={urls.regular} alt={name} />
          </p>
          <div className="pic_info">
            <p className="pic_date">{updated_at}</p>
            {/* <p className="pic_desc">{description}</p> */}
            <div className="pic_user">
              photo by
              <p className="user_img">
                <img src={profile_image.small} alt={username} />
              </p>
              <p className="user_name">{username}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Pictures;
