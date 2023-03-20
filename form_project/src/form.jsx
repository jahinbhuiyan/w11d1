import {useState} from 'react';

const Form = () => {

    const [user,setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "", 
        staff: "",
        bio: "",
        emailNotifications: ""
    });

    const [errors,setErrors] = useState([]);

    const handleSubmit = (e) =>{
        // debugger
        e.preventDefault();

        const currentErrors = validate();
        setErrors(currentErrors);

        if (currentErrors.length){
            console.log("errors!");
        }else{
            console.log("Making fake requests")
        }
    }

    const handleChange = (field)=>{
        // debugger
        // debugger
        return (e)=>{
            let val = e.target.value;
                if(e.target.checked){

                    val = true;
                    
                }
            setUser({
                ...user,
                [field]:val
            });
        };
    };

    const validate = () =>{
        const currentErrors = [];

        if (user.name.length ===0){
            currentErrors.push("Name cannot be empty")
        }

        if (user.email.length ===0 ){
            currentErrors.push("Email cannot be empty")
        }

        // if(!(user.email.split(".").length === 2 && user.email.split(".")[0].includes("@")) ){
        //     currentErrors.push("Not valid Email")
        // }
         if (user.phoneNumber){
            if(user.phoneNumber.length !== 12){
                currentErrors.push("Not a valid phonenumber")
            }
            if(!user.phoneType){
                currentErrors.push("Please select a phone type!")
            }
         }

         if (user.bio.length > 280){
            currentErrors.push("Exceeded character limit")
         }

         if (!user.staff){
            currentErrors.push("Please select a Staff Type")
         }
         return currentErrors
        }
    
    const handleRadio = (field) => {
        // debugger
        return (e) => {
            const element = e.target
            if(element.checked || element.selected){
                const val = e.target.value

                setUser({
                    ...user,
                    [field]:val
                });
            }
        }
    }


    return(
        <>
        <ul>
            {errors.map((error,i) => <li key = {i}>{error}</li>)}
        </ul>
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Name" value = {user.name} onChange={handleChange("name")} />
            <input type="email" placeholder="Email" value = {user.email} onChange = {handleChange("email")}/>
            <input type="text" placeholder="1-###-###-####" value = {user.phoneNumber} onChange ={handleChange("phoneNumber")}/>
            <select name="PhoneType" onChange = {handleChange("phoneType")} value = {user.phoneType}>
                <option value="home"> Home </option>
                <option value="work" > Work </option>
                <option value="mobile"> Mobile </option>
            </select>
            <input type="radio" id="instructor" name="staff" value="instructor" onChange={handleRadio('staff')}/>
            <label htmlFor="instructor">Instructor</label>
            <input type="radio" id="student" name="staff" value="student"onChange={handleRadio('staff')}/>
            <label htmlFor="student">Student</label>
            <br/>
            <label htmlFor="bio">Biography</label>
            <br/>
            <textarea id="bio" name="bio" placeholder="enter BIO here" value = {user.bio} onChange ={handleChange("bio")}/>
            <br/>
            <input type="checkbox" id="email" name="email" value="false"  onChange={handleChange("emailNotifications")}/>
            <label htmlFor="email">Email Notification?</label>
            <br/>
            <input type = "submit" value = "Submit"/>
        </form>
        <div>{console.log(user)}</div>
        </>
    )
    console.log(user)



}

export default Form;