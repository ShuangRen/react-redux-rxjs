const key = 'tokenId';

export const getSessionId = () => {
  return localStorage.getItem(key);
}

export const deleteSessionId = () => {
  localStorage.removeItem(key);
}

export const isLogged = () => {
  return !!getSessionId();
}

export function requireAuth(nextState, replaceState) {
  if (!isLogged())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}
