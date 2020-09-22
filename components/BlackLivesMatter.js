import React from "react";

const DONATE_LINK = `https://secure.actblue.com/donate/ms_blm_homepage_2019`;

function BlackLivesMatter() {
  return (
    <div className="support-blm">
      <span>
        <strong>
          <a
            href={DONATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{
              color: "black",
            }}
          >
            #BlackLivesMatter
          </a>
        </strong>
      </span>
    </div>
  );
}

export default BlackLivesMatter;
