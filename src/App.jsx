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
    </from>
    </div>
  );
}

export default App;