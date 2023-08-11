import React, { PureComponent } from "react";
import EmojiResultRow from "./EmojiResultRow";
import clipboard from "clipboard";

export default class EmojiResults extends PureComponent {
  componentDidMount() {
    this.clipboard = new clipboard(".copy-it");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { emojiData } = this.props;
    return (
      <div className="component-emoji-results">
        {emojiData.map((emoji) => (
          <EmojiResultRow
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        ))}
      </div>
    );
  }
}
