/**
 * Asynchronously sleeps for a specified amount of time, pausing the execution.
 * @param {number} ms Number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after sleeping for the specified time.
 */
export const sleep = (ms: number): Promise<void> => new Promise((t) => setTimeout(t, ms))
