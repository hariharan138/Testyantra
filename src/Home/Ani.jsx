import React from 'react'
import  aniStyle from "./Ani.module.css"
const Ani = () => {
  return (
    <div>
            <section className={aniStyle.ani}>
                <div className={aniStyle.shoot}></div>
                <div className={aniStyle.shoot}></div>
                <div className={aniStyle.shoot}></div>
                 </section>
    </div>
  )
}

export default Ani
