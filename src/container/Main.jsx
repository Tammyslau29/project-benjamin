import React, { useState } from "react";
import ReactPlayer from "react-player"
import styles from "../style/Main.module.scss"
import DJ from "./dj.jpg"
import LA from "./la.jpg"
import Ben from "./ben.jpeg"
import Left from "./left.png"

export default function Main() {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false)
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)

    const leftSide = {
        backgroundImage: `linear-gradient(rgb(43 43 43 / 45%), rgb(8 8 8 / 65%)),url(${DJ})`
    }

    const rightSide = {
        backgroundImage: `linear-gradient(rgb(43 43 43 / 45%), rgb(8 8 8 / 65%)), url(${LA})`
    }

    function toggleSides(){
        if(leftDrawerOpen){
            setLeftDrawerOpen(!leftDrawerOpen)
        }else if(rightDrawerOpen){
            setRightDrawerOpen(!rightDrawerOpen)
        }
    }

    function leftSideClick(){
        setLeftDrawerOpen(!leftDrawerOpen)
        console.log("clicked", leftDrawerOpen);
        
    }

    return (
        <div>
            <div className={styles.imagesOuter}>
                <img src={leftDrawerOpen ? Left : Ben} alt="" className={styles.ben} onClick={toggleSides}/>
                <div className={leftDrawerOpen ? styles.drawerOpen : styles.container}>
                    <div className={styles.imageContainer} style={leftSide} onClick={leftSideClick}>
                        <div className={styles.title}>
                            Personal
                        </div>
                    </div>
                    <div className={leftDrawerOpen ? styles.showContent : styles.overlay}>
                        <div className={styles.personalTitle}>Soundcloud - DJBong</div>
                        <div className={styles.playerContainer}>
                            <div className={styles.player}>
                                <ReactPlayer height="120px" url="https://soundcloud.com/ben-ong-1/bongs-house-grooves-7"/>
                            </div>
                            <div className={styles.player}>
                                <ReactPlayer height="120px" url="https://soundcloud.com/ben-ong-1/the-vaccine-mix-2021-kickoff"/>

                            </div>
                            <div className={styles.player}>
                                <ReactPlayer height="120px" url="https://soundcloud.com/ben-ong-1/november-house-trance-set"/>
                            </div>
                            <div className={styles.player}>
                                <ReactPlayer height="120px" url="https://soundcloud.com/ben-ong-1/0718-rave-set"/>
                            </div>
                            <div className={styles.player}>
                                <ReactPlayer height="120px" url="https://soundcloud.com/ben-ong-1/feelz-vol-3"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer} style={rightSide}>
                    <div className={styles.title}>
                       Professional
                   </div>
                </div>
            </div>
        </div>
    )
}