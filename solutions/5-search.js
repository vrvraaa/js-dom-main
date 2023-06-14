export default (document) => {
  // BEGIN

    const articleData = {};
    const titleElement = document.querySelector('.content h1');
    articleData.title = titleElement ? titleElement.textContent : '';
    const descriptionElement = document.querySelector('.content .description');
    articleData.description = descriptionElement ? descriptionElement.textContent : '';
    articleData.items = [];

    const articleElements = document.querySelectorAll('.content .links > div');
    articleElements.forEach((articleElement) => {
      const articleTitleElement = articleElement.querySelector('h2 a');
      const articleDescriptionElement = articleElement.querySelector('p');
      if(articleTitleElement && articleDescriptionElement) {
        const articleTitle = articleTitleElement.textContent;
        const articleDescription = articleDescriptionElement.textContent;
        articleData.items.push({ title: articleTitle, description: articleDescription });
      }
    });
  
    return articleData;
  
  // END
};
