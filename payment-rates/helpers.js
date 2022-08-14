function formatItem(item) {
  return {
    name: item.name,
    from: item.from,
    to: item.to,
    rate: item.rate,
    updatedAt: new Date(item.updatedAt).toISOString()
  };
}

function format(data) {
  return Array.isArray(data) ? data.map((item)=>formatItem(item)) : formatItem(data);
}

module.exports = {
  format
};
