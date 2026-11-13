import { useState } from "react";
import config from "./utils/config.json";
import "./App.css";

function App() {

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Male");

const [html, setHtml] = useState(false);
const [css, setCss] = useState(false);
const [javascript, setJavascript] = useState(false);
const [react, setReact] = useState(false);
const [city, setCity] = useState("");
const [address, setAddress] = useState("");
const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      <h1>{config.title}</h1>
      <p>{config.description}</p>

    <form 
      className="student-form"
      onSubmit={(e) =>{
        e.preventDefault();
        setSubmitted(true);
      }}>

      <div>
        <label>Full Name</label>
        <input type="text"
         placeholder="Enter your full name"
         value={fullName}
         onChange={(e) => {
         setFullName(e.target.value);
         }} />
      </div>

      <div>
  <label>Gender</label>

  <div>
    <input 
    type="radio"
     name="gender" 
     value="Male"
     checked={gender === "Male"}
     onChange={(e) => {
      setGender(e.target.value);
     }} />
    <label>Male</label>
  </div>

  <div>
    <input 
    type="radio" 
    name="gender" 
    value="Female"
    checked={gender === "Female"}
    onChange={(e) => {
      setGender(e.target.value);
    }} />
    <label>Female</label>
  </div> 

  <div>
    <input
     type="radio" 
     name="gender" 
     value="Other"
     checked={gender === "Other"}
     onChange={(e) => {
      setGender(e.target.value);
     }} />
    <label>Other</label>
  </div>
</div>

<div>
  <label>Skills</label>

  {config.skills.map((skill) => {
    return (
      <div key={skill}>
        <input type="checkbox"
         value={skill}
         checked={
          skill === "HTML" ? html :
          skill === "CSS" ? css :
          skill === "JavaScript" ? javascript :
          react
         }
         onChange= {(e) => {
          if (skill === "HTML") {
            setHtml(e.target.checked);
          } else if (skill === "CSS"){
            setCss(e.target.checked);
          } else if (skill === "JavaScript") {
      setJavascript(e.target.checked);
    } else {
      setReact(e.target.checked);
    }

         }} />
        <label>{skill}</label>
      </div>
    );
  })}
</div>

<div>
  <label>City</label>

  <select
   value={city}
    onChange={(e) => {
      setCity(e.target.value);
    }}>
      <option value="">Select your city</option>

      {config.cities.map((city) => {
        return <option key={city} value={city}>{city}</option>;
   })}
  </select>
</div>

<div>
  <label>Address</label>
  <textarea
   placeholder="Enter your address"
   value={address}
   onChange={(e) => {
    setAddress(e.target.value);
   }}>
   </textarea>
</div>

<div>
  <button type="submit">Submit</button>
</div>

    </form>

    {submitted && (
  <div className="submitted-details">
    <h2>Student Details</h2>

    <p>Full Name: {fullName}</p>
    <p>Gender: {gender}</p>

    <p>
      Skills: {html && "HTML"} {css && "CSS"}
      {javascript && "JavaScript"} {react && "React"}
    </p>

    <p>City: {city}</p>
    <p>Address: {address}</p>
  </div>
)}

    </div>
  );
}

export default App;