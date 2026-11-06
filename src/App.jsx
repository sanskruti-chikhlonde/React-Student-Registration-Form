import config from "./utils/config.json";

function App() {
  return (
    <div>
      <h1>{config.title}</h1>
      <p>{config.description}</p>

    <from>
      <div>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />
      </div>

      <div>
  <label>Gender</label>

  <div>
    <input type="radio" name="gender" value="Male" />
    <label>Male</label>
  </div>

  <div>
    <input type="radio" name="gender" value="Female" />
    <label>Female</label>
  </div>

  <div>
    <input type="radio" name="gender" value="Other" />
    <label>Other</label>
  </div>
</div>

<div>
  <label>Skills</label>

  {config.skills.map((skill) => {
    return (
      <div key={skill}>
        <input type="checkbox" value={skill} />
        <label>{skill}</label>
      </div>
    );
  })}
</div>

<div>
  <label>City</label>

  <select>
    <option value="">Select your city</option>

    {config.cities.map((city) => {
      return <option key={city} value={city}>{city}</option>;
    })}
  </select>
</div>

    </from>
    </div>
  );
}

export default App;