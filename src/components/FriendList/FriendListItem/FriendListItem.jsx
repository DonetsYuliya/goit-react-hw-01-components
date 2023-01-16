import css from './friendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(item => {
    return (
      <li className={css.item} key={item.id}>
        <span
          className={
            item.isOnline ? `${css.status} ${css.isActive}` : css.status
          }
        ></span>
        <img
          className="avatar"
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{item.name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
