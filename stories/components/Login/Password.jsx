import styles from './Password.module.css'

const Password = ({ onPasswordChange }) => {
    const onPasswordComplete = (e) => {
        onPasswordChange(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className={styles.passwordContainer}>
            Password
            <input type="text" placeholder="Password" onBlur={onPasswordComplete} />
        </div>
    )
}

export default Password;