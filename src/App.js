import MemoryCard from "./components/MemoryCard";
import { useEffect, useState } from "react";
import agumon from "./images/agumon.jpg"
import birdramon from "./images/birdramon.jpg"
import biyomon from "./images/biyomon.jpg"
import gabumon from "./images/gabumon.jpg"
import garudamon from "./images/garudamon.jpg"
import garurumon from "./images/garurumon.jpg"
import gomamon from "./images/gomamon.jpg"
import greymon from "./images/greymon.jpg"
import herculeskabuterimon from "./images/herculeskabuterimon.jpg"
import ikkakumon from "./images/ikkakumon.jpg"
import kabuterimon from "./images/kabuterimon.jpg"
import lillymon from "./images/lillymon.jpg"
import megakabuterimon from "./images/megakabuterimon.jpg"
import metalgarurumon from "./images/metalgarurumon.jpg"
import metalgreymon from "./images/metalgreymon.jpg"
import palmon from "./images/palmon.jpg"
import phoenixmon from "./images/phoenixmon.jpg"
import rosemon from "./images/rosemon.jpg"
import tentomon from "./images/tentomon.jpg"
import togemon from "./images/togemon.jpg"
import vikemon from "./images/vikemon.jpg"
import wargreymon from "./images/wargreymon.jpg"
import weregarurumon from "./images/weregarurumon.jpg"
import zudomon from "./images/zudomon.jpg"
import header from "./images/header.png"
import scoreCounter from "./images/score.png"
import bestscore from "./images/bestscore.png"
import "./styles/app.css"

function App() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function useClick (e) {
    e.stopPropagation()
    //console.log(e.target.dataset.index)
    let _ = [...cards]
    if (_[e.target.dataset.index].clicked) {
      setScore(0)
      _=_.map((i) => {
        i.clicked = false
        return i
      })
      alert("Ugh so close! You had already clicked on " + _[e.target.dataset.index].name + " before.")
    } else {
      _[e.target.dataset.index].clicked = true
      if (score === 23) {
        alert("You've done it! You've become the memory master!")
      }
      setScore(score+1)
      setBest(score >= best ? score+1 : best)
    }
    shuffle(_)
    setCards(_)
    //console.log(cards)
  }
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const [cards, setCards] = useState([
    {"name" : "agumon", "image" : agumon, "clicked" : false},
    {"name" : "birdramon", "image" : birdramon, "clicked" : false},
    {"name" : "biyomon", "image" : biyomon, "clicked" : false},
    {"name" : "gabumon", "image" : gabumon, "clicked" : false},
    {"name" : "garudamon", "image" : garudamon, "clicked" : false},
    {"name" : "garurumon", "image" : garurumon, "clicked" : false},
    {"name" : "gomamon", "image" : gomamon, "clicked" : false},
    {"name" : "greymon", "image" : greymon, "clicked" : false},
    {"name" : "herculeskabuterimon", "image" : herculeskabuterimon, "clicked" : false},
    {"name" : "ikkakumon", "image" : ikkakumon, "clicked" : false},
    {"name" : "kabuterimon", "image" : kabuterimon, "clicked" : false},
    {"name" : "lillymon", "image" : lillymon, "clicked" : false},
    {"name" : "megakabuterimon", "image" : megakabuterimon, "clicked" : false},
    {"name" : "metalgarurumon", "image" : metalgarurumon, "clicked" : false},
    {"name" : "metalgreymon", "image" : metalgreymon, "clicked" : false},
    {"name" : "palmon", "image" : palmon, "clicked" : false},
    {"name" : "phoenixmon", "image" : phoenixmon, "clicked" : false},
    {"name" : "rosemon", "image" : rosemon, "clicked" : false},
    {"name" : "tentomon", "image" : tentomon, "clicked" : false},
    {"name" : "togemon", "image" : togemon, "clicked" : false},
    {"name" : "vikemon", "image" : vikemon, "clicked" : false},
    {"name" : "wargreymon", "image" : wargreymon, "clicked" : false},
    {"name" : "weregarurumon", "image" : weregarurumon, "clicked" : false},
    {"name" : "zudomon", "image" : zudomon, "clicked" : false},
])
  useEffect(() => {
    const _ = [...cards]
    shuffle(_)
    setCards(_)
  }, []) 
  return (
    <div className="App" style={{backgroundColor : "#E6E6E6", minHeight : "100vh"}}>
      <div className="row" style={{backgroundColor : "white"}}>
        <div className="col-6">
          <img src={header} alt="header"/>
        </div>
        <div className="col-6">
        <img src={scoreCounter} alt="score"/> {score}
        <br/>
        <br/>
        <img src={bestscore} alt="best score"/> {best}
        </div>
      </div>
      <div className="row justify-content-around">
        {
          cards.map((a, i) => {
            console.log(a)
            return <div className="col-1"><center><MemoryCard click={useClick} animal = {a} index={i}/></center></div>
          })
        }
      </div>
        


      
      
    </div>
  );
}

export default App;
