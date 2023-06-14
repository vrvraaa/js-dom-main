// BEGIN
function beautifyPage() {
  const bodyContent = document.body.innerHTML;
  const lines = bodyContent.trim().split('\n');
  let newBodyContent = "";
  for(let line of lines){
    newBodyContent += `<p>${line}</p>`;
  }
  document.body.innerHTML = newBodyContent;
}

beautifyPage();
// END