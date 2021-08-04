import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateStatus} from "../../../../redux/profileReduser";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const ProfileStatus = () => {
    const [editMode, setEditMode] = useState(false)
    const [status, userId] = useSelector(state => [state.profilePage.status, state.auth.userId])
    const dispatch = useDispatch()
    const [newStatus, setStatus] = useState(status)

    const prevStatus = usePrevious(status)

    const handleClick = () => {
        setEditMode(true)
    }
    const handleBlur = () => {
        dispatch(updateStatus(newStatus))
        setEditMode(false)
    }
    const handleChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        if(prevStatus !== status) {
            setStatus(status)
        }
    },[])
    return (
        <div>
            {editMode ?
                <div>
                    <input type="text"
                           onBlur={handleBlur}
                           autoFocus={true}
                           onChange={handleChange}
                           value={newStatus}/>
                </div> :
                <div onDoubleClick={handleClick}>{status || "No Status"}</div>
            }
        </div>
    );
};

export default ProfileStatus;
