import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

import "./SwipeBtn.css";

const SwipeBnt = () => {
  return (
    <div className="swipebtn">
      <IconButton className="swipebtn__Replay">
        <ReplayIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipebtn__Close">
        <CloseIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipebtn__Start">
        <StarRateIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipebtn__Fav">
        <FavoriteIcon fontsize="large" />
      </IconButton>
      <IconButton className="swipebtn__Flash">
        <FlashOnIcon fontsize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeBnt;
