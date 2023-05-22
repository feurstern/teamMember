import { useState } from "react";
import keqing from '../pics/keqing.webp'
import hutao from '../pics/hutao.png'
import ganyu from '../pics/gamnyu.webp'

const Employee = () => {
    const [selectedTeam, setTeam] = useState("TeamC");
    const [employee, setEmployee] = useState([
        {
            id: 1,
            fullName: "Hatsune Miku",
            designation: "Game Developer",
            gender: "female",
            teamName: "Team A"
        },
        {
            id: 2,
            fullName: "Yuuki Kashiwagi",
            designation: "UI/UX Designer",
            gender: "female",
            teamName: "Team A"
        },
        {
            id: "3",
            fullName: "Mari Kitagawa",
            designation: "3D Artist",
            gender: "female",
            teamName: "Team A"
        },
        {
            id: "4",
            fullName: "Yuuko Oshima",
            designation: "Full Stack Developer",
            gender: "female",
            teamName: "Team B"
        },
        {
            id: "5",
            fullName: "Saeko Yamamoto",
            designation: "QA Teater",
            gender: "Female",
            teamName: "Team B"
        },
        {
            id: "6",
            fullName: "Mikasa Ackerman",
            designation: "Database Engineer",
            gender: "Female",
            teamName: "Team B"
        },
        {
            id: "7",
            fullName: "Mieruko",
            designation: "Machine Learning Developer",
            gender: "Female",
            teamName: "Team C"
        },
        {
            id: "8",
            fullName: "Utaha Kasmumigaoka",
            designation: "AI Engineer",
            gender: "Female",
            teamName: "Team C"
        },
        {
            id: "9",
            fullName: "Keqing",
            designation: "Data Analyist",
            gender: "Female",
            teamName: "Team C"
        },
        {
            id: "10",
            fullName: "Hu Tao",
            designation: "Arduino Engineer",
            gender: "Female",
            teamName: "Team D"
        },
        {
            id: 11,
            fullName: "Kiyana Kaslana",
            designation: "Arduino Engineer",
            gender: "Female",
            teamName: "Team D"
        },
        {
            id: 12,
            fullName: "Raiden Mei",
            designation: "RPA Developer",
            gender: "Female",
            teamName: "Team D"
        },

    ])

    const handleEmployeeCardClick=(event)=>{

    }
    

    const handleTeamSelectionChange=(event)=>{
        console.log(event.target.value);
        setTeam(event.target.value);

    }

    // const getImageData=()=>{
    //     let imgProfile
    //     if(employee.id ==="1"){
    //         imgProfile = {keqing};
    //     }
    //     else if(employee.id==="2"){
    //         imgProfile = {hutao};
    //     }

    //     else{
    //         imgProfile = {ganyu};

    //     }


        
        
        
        
        
    // }
    return (
        <main className="container">
          <div class="row justify-content-center mt-3 b-3">
            <div>
                <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option> 
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>
            </div>
          </div>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div className="card-collection"> 
                    {
                        employee.map((employee) => (
                            <div id={employee.id} className="card m-2" style={{cursor:"pointer"}}>
                                {(employee.id=1)?
                                (employee.id=2)? 
                                (employee.id=3)? 
                                (employee.id=4)?
                                (employee.id=5)?

                                                      <img src={keqing} class="card-top-img" />
                                                    : <img src={hutao} class="card-top-img" />   
                                                    : <img src={ganyu} class="card-top-img" /> 
                                                    : <img src={keqing} class="card-top-img"></img>      
                                                    : <img src={hutao} class="card-top-img"></img> 
                                                    : <img src={keqing} class="card-top-img"></img>                           
                                                     } 
                               

                                <div className="card-body">
                                    <h5 className="card-title"> Fullname : {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                    <p className="card-text"><b>Gender: </b> {employee.gender}</p>
                                    <p className="card-text"><b>Team Name : {employee.teamName}</b></p>
                                    {/* <button value className="btn btn-primary">Choose</button> */}
                                    
                                </div>
                            </div>

                        ))
                    }
                    </div>

                </div>
            </div>

        </main>
    )
}

export default Employee;