import "./App.css";
import { Header, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as="h2" icon>
          <Icon name="settings" />
          Congratulations!
          <Header.Subheader>
            You are running custom React dev environment with Docker, Semantic UI and Django API.
          </Header.Subheader>
        </Header>
      </header>
    </div>
  );
}

export default App;
