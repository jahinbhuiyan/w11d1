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
         if (user.phoneNumber.length){
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
        }
    
    const handleRadio = (field) => {
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
            <input type="number" placeholder="1-###-###-####" value = {user.phoneNumber} onChange ={handleChange("phoneNumber")}/>
            <select name="PhoneType">
                <option value="home" onChange={handleRadio('phoneType')}> Home </option>
                <option value="work" onChange={handleRadio('phoneType')}> Work </option>
                <option value="mobile" onChange={handleRadio('phoneType')}> Mobile </option>
            </select>
            <input type="radio" id="instructor" name="staff" value="instructor" onChange={handleRadio('staff')}/>
            <label for="instructor">Instructor</label>
            <input type="radio" id="student" name="staff" value="student"onChange={handleRadio('staff')}/>
            <label for="student">Student</label>
            <br/>
            <label for="bio">Biography</label>
            <br/>
            <textarea id="bio" name="bio" placeholder="enter BIO here" value = {user.bio} onChange ={handleChange("bio")}/>
            <br/>
            <input type="checkbox" id="email" name="email" value="false"  onChange={handleChange("emailNotifications")}/>
            <label for="email">Email Notification?</label>
            <br/>
            <input type = "submit" value = "Submit"/>
        </form>
        </>
    )



}

export default Form;