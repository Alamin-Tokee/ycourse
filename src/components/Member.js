import React from "react";

const Member = (mdata) => {
  return (
    <article className="team_member" key={mdata.mdata.index}>
      <div className="team_member-image">
        <img src={mdata.mdata.image} />
      </div>
      <div className="team_member-info">
        <h4>{mdata.mdata.name}</h4>
        <p>{mdata.mdata.designation}</p>
      </div>
      <div className="team_member-socials">
        <a href="#" target="_blank">
          <i className="uil uil-instagram"></i>
        </a>
        <a href="#" target="_blank">
          <i className="uil uil-twitter-alt"></i>
        </a>
        <a href="#" target="_blank">
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </div>
    </article>
  );
};

export default Member;
