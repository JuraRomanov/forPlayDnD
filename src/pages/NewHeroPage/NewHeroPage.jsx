import React, { useLayoutEffect, useState } from 'react'

import "./NewHeroPage.css";
import { SelectBox,Input, Counter} from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getDataFromAPI } from '../../hooks/use-api';
import { useDispatch } from 'react-redux';
import { loadHero } from '../../store/slices/heroSilce';
import { writeHero } from '../../hooks/use-dataBase';

function NewHeroPage() {
  const navigate = useNavigate();
  const [heroRace ,setHeroRace] = useState();
  const [heroClass ,setHeroClass] = useState();  
  const [name ,setName] = useState();

  const [cha , setCha] = useState(0);
  const [con , setCon] = useState(0);
  const [dex , setDex] = useState(0);
  const [int , setInt] = useState(0);
  const [str , setStr] = useState(0);
  const [wis , setWis] = useState(0);


  const {userId,heroId}  = useParams();
  
  
  

  let races = getDataFromAPI('api/races')['results'];
  let classes = getDataFromAPI('api/classes')['results'];

  if(!!races & !!classes){
    let tmp = [] ;
    Object.keys(races).map(item => tmp.push(races[item].index))
    races = tmp ; 
    tmp = [] ; 

    Object.keys(classes).map(item => tmp.push(classes[item].index))
    classes = tmp ;
      
  }

  const saveHero = () => { 
     if(!!name & !!heroRace & !!heroClass & (cha + con + dex + int + str + wis ) == 40){ 
        writeHero(`userHero/${userId}/${heroId}` , {name , heroRace , heroClass , cha , con , dex , int , str ,wis})
        navigate(`/${userId}`);
     }
     else { 
        let msg="";

        !!!name ? msg+="поле имени не заполнено\n" : 1 ;
        !!!heroRace ? msg+="раса не выбрана\n" : 1 ;
        !!!heroClass ? msg+="класс не выбран\n" : 1 ;
        !((cha + con + dex + int + str + wis ) == 40 )? msg+="не все очки персонажа распределены\n" : 1 ;
        alert(msg)
     }
     
  }
  
  
  return (
    <div className="new-hero">
        <div className="new-hero__box">
            

                <h1 className="new-hero__header">
                    Создание персонажа 
                </h1>
                
                
                {(!!races & !!classes) ? 
                  <div className="new-hero__cont">

                    <div className="new-hero__section">
                      <h3 className="new-hero__section-name">
                        Выберите имя персонажа
                      </h3>
                      <Input placeholderValue='Имя персонажа' setValue={setName}/>
                    </div>

                    <div className="new-hero__section">
                      <h3 className="new-hero__section-name">
                        Выберите расу персонажа
                      </h3>
                      <SelectBox defaultValue='Раса' values={races}  setValue={setHeroRace}/>
                    </div>

                    <div className="new-hero__section">
                      <h3 className="new-hero__section-name">
                        Выберите класс персонажа
                      </h3>
                      <SelectBox defaultValue='Класс' values={classes}  setValue={setHeroClass}/>
                    </div>

                    <div className="new-hero__section">
                      <h3 className="new-hero__section-name">
                        Распределите очки персонажа
                      </h3>
                      <Counter totalScore={40} namesCounters={{
                        'cha' : {
                          value : cha , 
                          fn : setCha ,  
                        } , 
                        'con' : {
                          value : con , 
                          fn : setCon ,  
                        } , 
                        'dex' : {
                          value : dex , 
                          fn : setDex ,  
                        } , 
                        'int' : {
                          value : int , 
                          fn : setInt ,  
                        } , 
                        'str' : {
                          value : str , 
                          fn : setStr ,  
                        } , 
                        'wis' : {
                          value : wis , 
                          fn : setWis ,  
                        } , 
                      }}/>
                    </div>
                    
                    <div className="new-hero__section">
                      <button className="new-hero__btn" onClick={() => saveHero()}>
                          Создать персонажа
                      </button>
                    </div>

                  </div>
                  :
                  <h2>Load</h2>
                }
        </div>
    </div>
  )
}

export default NewHeroPage