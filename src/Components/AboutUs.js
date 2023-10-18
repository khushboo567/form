const Aboutus=({name,mySurname})=>{
    // console.log("mySurname",props)
    return(
        <div>
            <h3>About Us</h3>
            <h3>{name}</h3>
            <h3>{mySurname}</h3>
            {/* <input placeholder="Name" type="text" />
            <br/>
            <br/>
            <input placeholder="E-mail" type="email" required/>
            <br/>
            <br/>
            <input type="submit" name="submit"/> */}
        </div>
    )
}
export default Aboutus