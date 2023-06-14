import camelCase from 'lodash/camelCase';

// BEGIN
export default (doc) => {
  
    const elemArr = doc.body.getElementsByTagName('*');
    for (const elem of elemArr) {

      const clsArr = Array.from(elem.classList);
      for (const cls of clsArr) {

        const nmlCls = camelCase(cls);
        elem.classList.replace(cls, nmlCls);
      }
    }
  };
// END