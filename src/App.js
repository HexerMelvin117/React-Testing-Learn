import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now()
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <Router>
      <Link exact to="/">Home</Link>
      <Link to="/second">Second Page</Link>
      <Switch>
        <Route path="/second">
          <h1>Second Page Placeholder</h1>
        </Route>
        <Route path="/">
          <div>
            <h1>TODOs</h1>

            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>

            <form onSubmit={handleSubmit}>
              <label htmlFor="new-todo">What needs to be done?</label>
              <br />
              <input id="new-todo" value={text} onChange={handleChange} />
              <button>Add #{items.length + 1}</button>
            </form>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
