import React from "react";
import '../view.css'
import countries from "../../countries";
const edit= require('../images/edit.svg').default

const WarehouseBox = (props) => {
    // var employment_type = ''
    // var end_date = ''
    // if(box.box.employment_type==1)
    // employment_type = 'part-time'
    // if(box.box.employment_type==2)
    // employment_type = 'full-time'
    // if(box.box.employment_type==3)
    // employment_type = 'self-employed'
    // if(box.box.end_date == null)
    // end_date = 'Present'
    // else
    // end_date = box.box.end_date
    // const username = sessionStorage.getItem("username")
// const viewusername = sessionStorage.getItem("viewusername")
    // console.log(props.box);
    
    

    return <div className="expbox">
        {/* <img className="explogo" src={box.box.company_data.logo} alt="logo"/> */}
        <div>
        <p style={{fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props.name}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{ props.location }  </p>
        {/* <p style={{fontWeight: '400',fontSize: '1.2vw',color:"#EBEBF0"}}>{box.box.start_date}  - {end_date} · </p> */}
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>{props.max_volume} </p>
        </div>
        {/* {(username===viewusername)?<img  className="editicon action" src={edit} />:null} */}
    </div>
}

export default WarehouseBox;