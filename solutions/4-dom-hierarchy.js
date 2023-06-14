// BEGIN
function getParagraphs(node) {
  
  const paragraphs = [];

  function traverse(element) {

    if (element.tagName === 'P') {

      const text = element.textContent.trim();
      paragraphs.push(text);
    }

    element = element.firstChild;
    while (element) {

      traverse(element);
      element = element.nextSibling;
    }
  }

  traverse(node);

  return paragraphs;
}

export default getParagraphs;
// END