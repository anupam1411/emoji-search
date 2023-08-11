import "./App.css";
import EmojiResults from "./Dashboard/Emoji/EmojiResults";
import Header from "./Dashboard/Header/Header";
import SearchBar from "./Dashboard/SearchBar/SearchBar.jsx";
import { PureComponent } from "react";
import { Stack } from "react-bootstrap";
import Filter from "./Dashboard/Emoji/Filter";

export class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange=(event)=>(
    this.setState({
    filteredEmojis:Filter(event.target.value,15)})
  )
  render() {
    return (
      <div>
        <Stack gap={3}>
          <Header />
          <SearchBar handleChange={this.handleChange} />
          <EmojiResults emojiData={this.state.filteredEmojis}  />
        </Stack>
      </div>
    );
  }
}

export default App;
