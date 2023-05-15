import React from "react";
import "./Meme.css";
import memesData from "./memesData";


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");


    function getMemeImage(){

        let randomNumber = Math.floor(Math.random() * memesData.data.memes.length)       
        setMemeImage(memesData.data.memes[randomNumber].url)
        
    }


    return (
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="Top text"
                className="form--input" 
                />
                <input 
                type="text" 
                placeholder="Bottom text"
                className="form--input" 
                />
                <button
                onClick={getMemeImage}                
                className="form--button"
                > Get a new meme image 
                </button>
            </div>
            <img src={memeImage}/>
        </main>


    );
}