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

export function setSessionId(token) {
  console.log(token);
  localStorage.setItem(key, token);
}

export function requireAuth(nextState, replaceState) {

  if (!isLogged()) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

export function requestAuth(username, password) {
  const config = {
      method: 'POST',
      body: JSON.stringify({
    		username: username,
    		password: password
    	}),
      headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }),
      mode: 'cors',
      cache: 'no-cache'
    };
  fetch('http://localhost:8000/api-token-auth', config)
  .then(response => response.json())
  .then(data => setSessionId(data))
  .catch(error => console.error(error));
}
