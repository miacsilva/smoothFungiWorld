import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Amanita Mushroom",
        src: "amanitaMushroom.jpg"
    },
    {
        title: "Couple Mushroom",
        src: "coupleMushroom.jpg"
    },
    {
        title: "Tiny Mushroom",
        src: "tinyMushroom.jpg"
    },
    {
        title: "Long Mushroom",
        src: "longMushroom.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit, optio unde numquam temporibus, asperiores vel exercitationem mollitia cumque placeat rem ipsum! Earum repellat numquam dolore omnis est optio ea.</p>
                </div>
                <div className={styles.column}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam vero nam, velit obcaecati quaerat minus natus minima, reprehenderit nemo facere corporis consequuntur in. Aperiam itaque quam vero tenetur nam?</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}