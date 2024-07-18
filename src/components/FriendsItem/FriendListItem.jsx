import css from "./FriendListItem.module.css";

import clsx from "clsx";

const FriendListItem = ({ friendName, friendAvatarURL, friendStatus }) => {
  return (
    <div className={css.friendsListItem}>
      <img
        className={css.friendAvatar}
        src={friendAvatarURL}
        alt={friendName}
        width="48"
      />
      <p className={css.friendName}>{friendName}</p>
      <p
        className={clsx(
          css.status,
          friendStatus ? css.isOnline : css.isOffline
        )}
      >
        {friendStatus ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
