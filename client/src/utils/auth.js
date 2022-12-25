class Auth {
    getToken() {
        return localStorage.getItem('id_token');
    }
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign("/explore");
    }
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign("/explore");
    }
}

export default new Auth();