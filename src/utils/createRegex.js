export default function createRegex(text, keepSimilarWords) {
  try {
    if (keepSimilarWords) {
      return new RegExp(
        `${text
          .toLowerCase()
          .trim()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/,./g, "")}`,
        "i"
      );
    }
    return new RegExp(
      `^[.,;!?]{0,}${text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/,./g, "")}[.,;!?]{0,}$`,
      "i"
    );
  } catch (e) {}
}
