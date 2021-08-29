import { useState } from 'react';
import './App.css';
import { Chart } from './components/Chart';
import { PrForm } from './components/PrForm';

function App() {

  const [event, setEvent]=useState("")
  const [labelData, setLabelData]=useState([])
  const [dataSet, setDataSet]=useState([])
  const [backColor, setBackColor]= useState([])
  const [borderColor, setBorderColor]= useState([])

  const random_rgb=()=> {
    var o = Math.round, 
    r = Math.random, 
    s = 255;

    return `rgb( ${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)} )`;
  }

  const formDataFunction=(event, label, data)=>{

    let colorBack = random_rgb();
    let colorBorder = random_rgb();

    setEvent(event)

    setLabelData((preLable)=>{
      return [...preLable, label]
    });

    setDataSet((preData)=>{
      return [...preData, data]
    })

    setBackColor((preBack)=>{
      return [...preBack, colorBack]
    })

    setBorderColor((preBorder)=>{
      return [...preBorder, colorBorder]
    })
    
  }

  

  return (
    <div className="App">
      <PrForm formDataFunction={formDataFunction} />
      {
        dataSet.length!==0 ? <Chart event={event} labelData={labelData} dataSet={dataSet} backC={backColor} borC={borderColor}/> : <div className="isErr"><h1>😕 There's no Data..!</h1></div>
      }
    </div>
  );
}

export default App;
