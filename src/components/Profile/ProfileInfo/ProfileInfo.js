import React from 'react'
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profileHeader}>
                <img src="https://content.linkedin.com/content/dam/blog/en-us/corporate/blog/2014/08/Innovation-Light-Bulbs.jpg" alt="Ups...("/>
            </div>
            <div className={s.person}>
                <div className={s.personAvatar}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : 'https://i.kym-cdn.com/photos/images/newsfeed/001/974/401/44e.gif'}
                        alt=""/>
                </div>
                <section className={s.infoBlock}>
                    <section className={s.personInfo}>
                        <div className={s.name}>
                            {props.profile.fullName ? <div>{props.profile.fullName}</div> : null}
                            {props.profile.aboutMe ? <div>{props.profile.aboutMe}</div> : null}
                        </div>
                        {props.profile.lookingForAJob ? <div>{props.profile.lookingForAJob}</div> : null}
                        {props.profile.lookingForAJobDescription ?
                            <div>Work: {props.profile.lookingForAJobDescription}</div> : null}
                    </section>
                    <ul className={s.contactList}>
                        {props.profile.contacts.facebook ? <li>Facebook: {props.profile.contacts.facebook}</li> : null}
                        {props.profile.contacts.website ? <li>Website: {props.profile.contacts.website}</li> : null}
                        {props.profile.contacts.vk ? <li>Vk: {props.profile.contacts.vk}</li> : null}
                        {props.profile.contacts.twitter ? <li>Twitter: {props.profile.contacts.twitter}</li> : null}
                        {props.profile.contacts.instagram ?
                            <li>Instagram: {props.profile.contacts.instagram}</li> : null}
                        {props.profile.contacts.youtube ? <li>Youtube: {props.profile.contacts.youtube}</li> : null}
                        {props.profile.contacts.github ? <li>Github: {props.profile.contacts.github}</li> : null}
                        {props.profile.contacts.mainLink ? <li>MainLink: {props.profile.contacts.mainLink}</li> : null}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default ProfileInfo