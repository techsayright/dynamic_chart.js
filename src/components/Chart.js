import React, { useState } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import { DropDown } from './DropDown'
import styles from './css module/Chart.module.scss'

export const Chart = ({event, labelData, dataSet, backC, borC}) => {

    const [dropDown, setDropDown]= useState("VBar")

    // for converting data into number
    const Data = dataSet.map((v)=> +v)

    const data={
        labels: labelData,
        datasets: [
            {
                label: event || "Percentage",
                data: Data,
                backgroundColor: backC,
                borderColor: borC,
                borderWidth:2
            }
        ]

    }

    const options ={
        scales:{
            x:{
                ticks:{
                    color:'red',
                    font:{
                        size: 15
                    }
                },
                title:{
                    display: true,
                    text: event==="Percentage" || "percentage" ? "Student Name":"Subject",
                    color: backC[backC.length-1],
                    font:{
                        size: 20,
                    }
                }
            },
            y:{
                beginAtZero: true,
                title:{
                    display: true,
                    text: "Data",
                    color: backC[backC.length-1],
                    font:{
                        size: 20,
                    }
                }
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels:{
                    usePointStyle:true
                },
                position: "top",
            },
            title: {
                display: true,
                text: event || "Percentage",
                font:{
                    size: 30
                }
            },
            tooltip:{
                usePointStyle:true
            }
        }

    }

    const selectedVal=(val)=>{
        setDropDown(val);
    }

    return (
        <React.Fragment>
            <DropDown selectedVal={selectedVal} selected={dropDown}/>

            {dropDown==="VBar" && <div className={styles.chartBar} >
                <Bar data={data} options={{...options, plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: event || "Percentage",
                font:{
                    size: 30
                }
            },
            tooltip:{
                usePointStyle:true
            }
        }}} />
            </div>}

            {dropDown==="Pie" && <div className={styles.chartPie} >
                <Pie data={data} options={options} />
            </div>}

            {dropDown==="Line" && <div className={styles.chartPie} >
                <Line data={data} options={options} />
            </div>}
        </React.Fragment>
    )
}
