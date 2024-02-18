import css from "./Profile.module.css"

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{`@${tag}`}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        {Object.entries(stats).map(([label, quantity]) => {
          return (
            <li key={label} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.value}>{quantity}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

{
  /* <div className="profile">
  
</div>; */
}
{
  /* <li>
      <span className="label">Followers</span>
      <span className="value">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="value">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="value">3000</span>
    </li> */
}
