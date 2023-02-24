import styles from "./profile.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Profile = () => {
  return <div className={cx("container")}>profile</div>;
};

export default Profile;