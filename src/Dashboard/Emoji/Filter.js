import EmojiList from "./EmojiList.json";

function Filter(searchText, maxResults) {
  return EmojiList.filter((emoji) => {
    if (
      emoji.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

export default Filter;
