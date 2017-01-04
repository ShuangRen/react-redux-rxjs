const key = 'sessionId';

export const existSessionId = () => {
  const sessionId = localStorage.getItem(key);
  return !!sessionId;
};

export const getSessionId = () => {
  if (!existSessionId) {
    return '';
  }
  try {
    const sessionId = localStorage.getItem(key);
    return sessionId;
  } catch (e) {
    console.error(e);
    return '';
  }
}

export const setSessionId = (sessionId) => {
  try {
    localStorage.setItem(key, sessionId);
  } catch (e) {
    console.error(e);
  }
}

export const removeSessionId = () => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
}
