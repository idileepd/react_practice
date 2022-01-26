//Action Creator
export const consoleLog = (log) => {
  console.log(log);
  // if (typeof log === "string") log = { log };
  // if (Array.isArray(log)) log = { log };

  //api call can be made here for cleaner code
  return {
    type: "ADD_LOG",
    // payload: JSON.stringify(log),
    payload: { log },
  };
};
