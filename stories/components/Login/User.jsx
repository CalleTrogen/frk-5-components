import styles from './User.module.css';

const User = ({ onUserChange }) => {
    const onUserComplete = (e) => {
        onUserChange(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div className={styles.userContainer}>
            <label htmlFor="username">User</label>
            <input type='text' placeholder="Username" id="username" onBlur={onUserComplete}></input>
        </div>
    )
}

export default User;