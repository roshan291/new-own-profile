import Image from 'next/image';
import React, {useState, useEffect} from 'react'
import styles from "../../styles/profile.module.scss";
import profilePic from "/assets/profilepic.jpg";
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import profile1 from "/assets/picture.png"
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const d = "https://icons8.com/icon/xWVjuc9hryql/twitter"

const VenkatSingleProfile = () => {
    const [scrollTop, setScrolTop] = useState(false)

    const scrollTopHandler = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolTop(window.scrollY > 200);
        });
    }, []);

  return (
    <>
    <div>
        <div className={styles.introWrapper}>
            <div className={styles.introContent}>
                    <h2>Hello, Im <span>Venkatesh Mahendra</span></h2>
                    <h3>Im a <span>Web developer</span></h3>
                    <p>An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity. An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity. An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity. An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity. An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity. </p>
            </div>
            <div className={styles.introImage}>
                {/* <span className={styles.introIcon1}></span> */}
                <FileDownloadOutlinedIcon  className={styles.DownloadForOfflineIcon}/>
                <Image 
                src = {profilePic} alt = "" width={200} height={300} />
               
                {/* <span className={styles.introIcon2}></span> */}
            </div>
        </div>
        <div className={styles.sharingButtons}>
            <CallIcon className={styles.CallIcon}/>
            
            <EmailIcon className={styles.EmailIcon}/>
            <WhatsAppIcon className={styles.WhatsAppIcon}/>
            <TwitterIcon className={styles.TwitterIcon}/>
            <InstagramIcon className={styles.InstagramIcon} />
            <LinkedInIcon className={styles.LinkedInIcon} />
            <FacebookIcon className={styles.FacebookIcon} />
            <LanguageIcon className={styles.LanguageIcon} />
            <LocationOnOutlinedIcon className={styles.LocationOnOutlinedIcon} />
        </div>
        <div className={styles.profieMoreDetails}>
            <div className={styles.profileTitle}>
                <Image src = {profile1}  alt = "" />
                <h1>Venkatesh Mahendra</h1>
                <label className={styles.achivementsTitle}>Achivements</label>
                <label>Business Man</label>
                <label>Hyderabad, Telangana, India.</label>
               
            </div>
            {/* <div className={styles.achivements}>
                <label>Achivements</label>
                <ul>
                    <li>Certified Developer</li>
                    <li></li>
                </ul>
            </div> */}
            <div className={styles.profileContant}>
                <p>An Entrepreneur always searches for change, responds to it, and seizes it as an opportunity.</p>
                <p>Being an entrepreneur I am enjoying my journey from last 10 years. Established my first company Magic Lantern which is a film studio in the year 2014 dealing in various film making and animation/branding projects,</p>
                <p>After which I started Bumblebee Publications in the year 2018 and In 2021 GRID- Networking made efficient. Helping small and medium scale business owners, freelancers and content creators to create a personalised profile with all there links under one link. and network efficiently by sharing in one click.</p>
                <p>Being a creator and film maker, was fortunate to have some amazing experience working some some of the giants in the industry.</p>
            </div>
            <div className={styles.generalContent}>
                <h3>Title</h3>
                <p>text</p>
            </div>
            <div className={styles.generalContent}>
                <h3>Title</h3>
                <p>text</p>
            </div>
            <div className={styles.hobbies}>
                <label>Hobbies</label>
                <ul>
                    <li>Certified Developer</li>
                    <li></li>
                </ul>
            </div>
            <div className={styles.interest}>
                <label>Interest</label>
                <ul>
                    <li>Certified Developer</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
    {
        scrollTop ? <div className={styles.pageArrow}>
            <KeyboardDoubleArrowUpIcon onClick = {scrollTopHandler} />
        </div> : null
    }
    
    </>
  )
}

export default VenkatSingleProfile