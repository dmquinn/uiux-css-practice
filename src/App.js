import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const slicedArray = contacts.slice(0, 5);

  return (
    <div className="App">
      <>
        <table>
          <tr>
            <th>PICTURE</th>
            <th>NAME</th>
            <th>POPULARITY</th>
            <th>WON OSCAR</th>
            <th>WON EMMY</th>
          </tr>
          {slicedArray.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} style={{ height: "100px" }} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy && <td>🏆</td>}
              </tr>
            );
          })}
        </table>
      </>
    </div>
  );
}

export default App;
