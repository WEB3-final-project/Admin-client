const API_URL = import.meta.env.VITE_API_URL;

export const authProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'include',
    });

    if (response.status < 200 || response.status >= 300) {
      const error = await response.json();
      throw new Error(error.message || 'Identifiants invalides');
    }

    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('role', data.role);
    return Promise.resolve();
  },

  logout: async () => {
    const token = localStorage.getItem('access_token');
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
        }),
        credentials: 'include',
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion backend', error);
    }
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    return Promise.resolve();
  },

  checkError: async (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        });
        if (response.status === 200) {
          const data = await response.json();
          localStorage.setItem('access_token', data.access_token);
          return Promise.resolve();
        }
      } catch (e) {
        console.error('Impossible de rafraîchir le token', e);
      }
      localStorage.removeItem('access_token');
      localStorage.removeItem('role');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('access_token') ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => {
    const role = localStorage.getItem('role');
    return role ? Promise.resolve(role) : Promise.reject();
  },
};