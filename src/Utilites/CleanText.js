let isBadChar = false;

export const removeApiTags = (text) => {
  const newText = text.split("").map((char) => {
    if (char === "<") {
      isBadChar = true;
    }
    if (char === ">") {
      isBadChar = false;
      return;
    }
    return isBadChar ? "" : char;
  });
  return newText.join("");
};
