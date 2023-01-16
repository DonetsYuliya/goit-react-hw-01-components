import css from './friendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
