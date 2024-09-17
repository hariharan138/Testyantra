import React, { useEffect, useRef, useState } from 'react'
import art from './Articles.module.css'
import headimg from './assets/asset 3.jpeg'
import calender from './assets/asset 22.svg'
import time from './assets/asset 21.svg'
import arrow from './assets/asset 23.svg'
import { IoIosSearch } from "react-icons/io";
import card from './cards.json'
import category from './categor.json'
import Footer from '../Home/Footer';

const Articles = () => {
  let [prod, setProd] = useState(card)
  const [searchVal, setSearchVal] = useState("")
  const [filteredcategory, setFilteredcategory] = useState(card)
  const [categTitle, setCategTitle] = useState(0)
  const [categ, setCateg] = useState(category)
  

  useEffect(()=>{
    setFilteredcategory(prod)
  }, [])


  useEffect(()=>{
    if(searchVal.trim()!=""){
       let filteredProd=  filteredcategory.filter(({title})=>{
        return title.toLowerCase().includes(searchVal)
      })
      setFilteredcategory(filteredProd)
    }
    else{
      setFilteredcategory(prod)
    }
  }, [searchVal])



useEffect(()=>{
    if(categTitle!=0){
      let orgProd = prod
      let filteredCateg = orgProd.filter(({category, identity})=>{
        return identity==categTitle
      })
      setFilteredcategory(filteredCateg)
    }
    else{
      setFilteredcategory(prod)
    }
  }
   , [categTitle])
  const getimage = (currimg) => require(`./assets/${currimg}`)
  return (
    <main>
      <section className={art.head}>
        <img src={headimg} alt="" />
        <div className={art.mainContent}>
          <p>Articles</p>
        </div>
      </section>
      <section className={art.mainContainer}>
        <section className={art.cardContainer}>
          {filteredcategory.map(({ img, title, readtime, content, id ,logo, authorname, currdate }) => {
            return (
              <div className={art.card} key={id}>
                <div className={art.imgContainer}>
                  <div className={art.cardimg}>
                    <img src={getimage(img)} alt="" />
                  </div>
                  <div className={art.imgContent1}>
                    <h2>{title}</h2>
                  </div>
                  <div className={art.imgContent2}>
                    <div className={art.time}>
                      <img src={time} alt="" />
                      <p>{readtime}</p>
                    </div>
                  </div>
                </div>
                <div className={art.mainDescription}>
                  <p>{content}</p>
                  <div className={art.cardFooter}>
                    <div className={art.namelogo}>
                      <p>{logo}</p>
                    </div>
                    <p>{authorname}</p>
                    <div className={art.separator}></div>
                    <img src={calender} alt="" />
                    <p>{currdate}</p>
                    <div className={art.cardfootbtn}>
                      <img src={arrow} alt=""  />                    
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
        <section className={art.searchCont}>
          <div className={art.searchbox}>
            <input type="text" placeholder='Search' onChange={(e)=>setSearchVal(e.target.value)}/>
            <button  className={art.Artbutton} ><IoIosSearch /></button>
          </div>
          <div className={art.categoryCont}>
            <div className={art.categorytitle}>
                <p>Categories</p>
            </div>
           <ul>
            <li>
    </li>
            {categ.map(({catego, avail, id})=>{
                return (
                  <li onClick={(e)=> setCategTitle(id)}>
                    <p >{catego}</p>
                    <p>({avail})</p>
                  </li>
                )
            })}

            
           </ul>

          </div>


        </section>

      </section>
     <Footer />
    </main >
  )
}

export default Articles