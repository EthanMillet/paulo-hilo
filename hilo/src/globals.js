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


  };
  