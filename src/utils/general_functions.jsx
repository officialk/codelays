/**
 * It takes time(seconds) as parameter and wait for that time
 * @param {number} time - time in seconds
 * @return {null}
 */
export const wait = async (time) =>
    new Promise((resolve) => {
      setTimeout(resolve, time*1000);
    });

