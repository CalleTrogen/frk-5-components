import React from "react";

const User = ({ onSetUse }) => {

    const onUserComplete = () => {
        onUserChange(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            User
            <>
                <input type="text" />
                onBlur={onUserComplete}
            </>
        </div>
    )
}

export default User;