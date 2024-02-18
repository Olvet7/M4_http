import { FriendListItem } from "./FriendListItem";
import css from "../FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
            <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
