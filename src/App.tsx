import { useEffect, useState } from "react";
import getDog from "services/dog";
import './App.css'
import { saveAs } from 'file-saver'
import { BiSolidDownload } from 'react-icons/bi'
import { AiOutlineReload } from 'react-icons/ai'
import Title from "components/Title";


function App() {
  const [dog, setDog] = useState();

  useEffect(() => {
    getDog(setDog)
  }, [])

  const downloadImage = () => {
    saveAs(`${dog}`, dog) // Put your image URL here.
  }

  return (
    <>
      <div className="App">
        <Title>
          <h1>Ponguim sem .com</h1>
        </Title>
        <img src={dog} alt="" />
        <div className="btn__container">
          <button onClick={() => getDog(setDog)} className="btn_gerar">Gerar outra <AiOutlineReload /></button>
          <button onClick={() => downloadImage()} className="btn_baixar">Baixar Imagem <BiSolidDownload /></button>
        </div>
      </div>
    </>
  );
}

export default App;
