class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('authenticatedUserPw', password);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('authenticatedUserPw')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false;
        return true;
    }
}

export default new AuthenticationService()