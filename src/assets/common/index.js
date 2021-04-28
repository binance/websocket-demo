export const generateStreamKey = (type, dataSource, categoryIndex, streamIndex) => {
  return `${type}:${dataSource}::${categoryIndex}-${streamIndex}`;
};
export const extractType = streamKey => {
  const index = streamKey.indexOf(':') || 0;
  return streamKey.substring(0, index);
};

export const extractDataSource = streamKey => {
  const startIndex = streamKey.indexOf(':') + 1 || 0;
  const endIndex = streamKey.indexOf('::') || 0;
  return streamKey.substring(startIndex, endIndex);
};
export const extractCategoryIndex = streamKey => {
  const startIndex = streamKey.indexOf('::') + 2 || 0;
  const endIndex = streamKey.indexOf('-') || 0;
  return Number(streamKey.substring(startIndex, endIndex));
};
export const extractStreamIndex = streamKey => {
  const index = streamKey.indexOf('-') || 0;
  return Number(streamKey.substring(index + 1));
};
export const isUserStream = dataSource => {
  return dataSource === 'user';
};
