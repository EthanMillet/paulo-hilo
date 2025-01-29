/**
 * @description Global reusable functions
 */
export default {

    /**
     * @description create dynamic grid cols
     * @param {*} message 
     * @returns 
     */
    dynamicCols(cols) {
        return { gridTemplateColumns: `repeat(${cols}, 1fr)` }
    },

    /**
     * @description Convert PascalCase string into Pascal Case with spaces
     * @param {string} str 
     * @returns {string}
     */
    formatTitle(str) {
        return str.replace(/([A-Z])/g, ' $1').trim();
    }

  };
  