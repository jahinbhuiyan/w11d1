

const Form = () => {


    return(
        <>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email"/>
            <input type="number" placeholder="PhoneNumber"/>
            <select name="PhoneType">
                <option value="home"> Home </option>
                <option value="work"> Work </option>
                <option value="mobile"> Mobile </option>
            </select>
            <input type="radio" id="instructor" name="staff" value="instructor"/>
            <label for="instructor">Instructor</label>
            <input type="radio" id="student" name="staff" value="student"/>
            <label for="student">Student</label>
            <br/>
            <label for="bio">Biography</label>
            <br/>
            <textarea id="bio" name="bio" placeholder="enter BIO here"/>
            <br/>
            <input type="checkbox" id="email" name="email"/>
            <label for="email">Email Notification?</label>
        </form>
        </>
    )

}

export default Form;