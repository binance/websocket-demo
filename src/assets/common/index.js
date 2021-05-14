export const generateStreamKey = (type, streamIndex) => {
  return `${type}:${streamIndex}`;
};
export const extractType = streamKey => {
  const index = streamKey.indexOf(':') || 0;
  return streamKey.substring(0, index);
};
export const extractStreamIndex = streamKey => {
  const index = streamKey.indexOf(':') || 0;
  return Number(streamKey.substring(index + 1));
};
export const isUserStream = dataSource => {
  return dataSource === 'user';
};
