'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Cursor from '../../utils/Cursor';
import './globals.css'

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Cursor/>
      <main className={styles.main}>
        <Intro />
        <Description />
        <Projects />
      </main>
      </>
  )
}