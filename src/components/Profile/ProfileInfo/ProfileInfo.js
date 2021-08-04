import React from 'react'
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
    const {profile} = props
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profileHeader}>
                <img
                    src="https://content.linkedin.com/content/dam/blog/en-us/corporate/blog/2014/08/Innovation-Light-Bulbs.jpg"
                    alt="Ups...("/>
            </div>
            <div className={s.person}>
                <div className={s.personAvatar}>
                    <img
                        src={profile.photos.large ? profile.photos.large : 'https://i.kym-cdn.com/photos/images/newsfeed/001/974/401/44e.gif'}
                        alt=""/>
                </div>
                <div className={s.sideBlock}>
                    <section className={s.infoBlock}>
                        <section className={s.personInfo}>
                            <div className={s.name}>
                                {profile.fullName ? <div>{profile.fullName}</div> : null}
                                {profile.aboutMe ? <div>{profile.aboutMe}</div> : null}
                            </div>
                            {profile.lookingForAJob ? <div>{profile.lookingForAJob}</div> : null}
                            {profile.lookingForAJobDescription ?
                                <div>Work: {profile.lookingForAJobDescription}</div> : null}
                        </section>
                        <ul className={s.contactList}>
                            {profile.contacts.facebook ? <li>Facebook: {profile.contacts.facebook}</li> : null}
                            {profile.contacts.website ? <li>Website: {profile.contacts.website}</li> : null}
                            {profile.contacts.vk ? <li>Vk: {profile.contacts.vk}</li> : null}
                            {profile.contacts.twitter ? <li>Twitter: {profile.contacts.twitter}</li> : null}
                            {profile.contacts.instagram ?
                                <li>Instagram: {profile.contacts.instagram}</li> : null}
                            {profile.contacts.youtube ? <li>Youtube: {profile.contacts.youtube}</li> : null}
                            {profile.contacts.github ? <li>Github: {profile.contacts.github}</li> : null}
                            {profile.contacts.mainLink ? <li>MainLink: {profile.contacts.mainLink}</li> : null}
                        </ul>
                    </section>
                    <div>
                        <ProfileStatus userId={props.userId}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
