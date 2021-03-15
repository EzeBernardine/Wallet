export const generateID = (length) => {
  if (length < 8 || length > 20) {
    alert("length must be a whole number and between 8 and 20");
    return;
  }
  const generated = Array.from({ length }, () => {
    const characters = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
    ];

    return characters[Math.floor(Math.random() * characters.length)];
  });

  return generated.join("");
};
