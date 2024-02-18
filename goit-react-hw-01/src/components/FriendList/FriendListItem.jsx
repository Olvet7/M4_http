import css from "../FriendList/FriendListItem.module.css"

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.active : css.notActive}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
