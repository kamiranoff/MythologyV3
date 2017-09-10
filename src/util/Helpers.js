class Helpers {
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static getFirstLine(text, char) {
    const idx = text.indexOf(char);
    return text.substring(0, idx);
  }
}

export default Helpers;
