require(`datejs`)
function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: new Date().toString("M/d/yyyy") 
  };

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      combinedObject.users.push(...arg);
    }
  });

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};