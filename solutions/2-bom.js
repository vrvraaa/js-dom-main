// BEGIN
function newSolution(endpoint) {
  const userAgent = navigator.userAgent;
  const browserInfo = userAgent.match(/Mozilla\/\d+\.\d+/)[0]; 
  return `${browserInfo} ${endpoint}`;
}
export default newSolution;
// END



