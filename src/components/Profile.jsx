import css from './profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileMainInfo}>
        <img className={css.profileAvatar} src={image} alt={name} />
        <p className={css.profileNameText}>{name}</p>
        <p className={css.profileInfoText}>@{tag}</p>
        <p className={css.profileInfoText}>{location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsListItem}>
          <span>Followers</span>
          <span className={css.profileStatsText}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Views</span>
          <span className={css.profileStatsText}>{stats.views}</span>
        </li>
        <li className={css.profileStatsListItem}>
          <span>Likes</span>
          <span className={css.profileStatsText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;