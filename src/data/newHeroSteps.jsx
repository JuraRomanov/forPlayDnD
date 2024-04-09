import { NewHeroWelcome,NewHeroRaces, NewHeroClasses,NewHeroAttributs} from "../components";


export default {
    "start" : { 
        stepTitle : 'Добро пожаловать в конструктор персонажа' , 
        components :<NewHeroWelcome/> , 
        nextStepsName : 'выбор расы' ,
        nextStepsUrl : 'heroRaces' , 

    } , 

    "heroRaces" : { 
        stepTitle : 'Выберите расу персонажа', 
        components :  <NewHeroRaces/>, 
        nextStepsName : 'выбор класса' ,
        nextStepsUrl : 'heroClasses' , 

    } , 

    "heroClasses" : { 
        stepTitle : 'Выберите класс персонажа', 
        components : <NewHeroClasses/>, 
        nextStepsName : 'распределение очков' ,
        nextStepsUrl : 'heroAttributs' , 

    } , 

    "heroAttributs" : { 
        stepTitle : 'Распределите очки персонажа', 
        components : <NewHeroAttributs/>, 
        nextStepsName : 'end' ,
        nextStepsUrl : 'start' , 
    } , 


}