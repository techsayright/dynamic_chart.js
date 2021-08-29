import React, { useState } from 'react'
import styles from './css module/PrForm.module.scss'

export const PrForm = (props) => {
    const [isValid, setIsValid]= useState({isValidLabel: true, isValidData: true})

    const formSubmitHandler =(event)=>{
        event.preventDefault();

        // offcial way to get form value when we dont need any mutation
        const {eventName ,labelname, data}= event.target.elements;

        // value validation
        if(!(labelname.value || data.value)){
            setIsValid({isValidLabel: false, isValidData: false})
            return
        }
        else if(!labelname.value){
            setIsValid({isValidLabel: false, isValidData:true})
            return
        }
        else if(!data.value){
            setIsValid({isValidLabel:true ,isValidData: false})
            return
        }
        
        setIsValid({isValidLabel: true, isValidData: true})

        props.formDataFunction(eventName.value,labelname.value ,data.value);

        // reset form    
        labelname.value=""    
        data.value=""    
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles["form-control"]}>

                <div className={styles.flex}>
                    <div >
                        <label htmlFor="label">Event Name <small>(Optional)</small></label><br />
                        <input type="text" name="label" id="eventName" placeholder="Enter Event Name" />
                    </div>

                    <div className={!isValid.isValidLabel ? styles.Err : ""}>
                        <label htmlFor="name">Label Name</label><br />
                        <input type="text" name="name" id="labelname" placeholder="Enter Label Name" />
                    </div>

                    <div className={!isValid.isValidData ? styles.Err :""}>
                        <label htmlFor="pr">Data</label><br />
                        <input type="number" name="pr" id="data" placeholder="Enter a Data" />
                    </div>
                </div>

                <div className={styles["btn--submit"]}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}
