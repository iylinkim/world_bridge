import React from "react";

const Pictures = ({ picture }) => {
  const {
    urls,
    location: { name },
    user: { profile_image, username, updated_at },
  } = picture;
  console.log(picture.urls)
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
            <p className="pic_date">{new Date(updated_at).toLocaleDateString()}</p>
            <div className="pic_user">
              <span className="photo_by">photo by</span>
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
