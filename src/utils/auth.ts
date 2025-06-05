const isAuthenticated = () => {
    // TODO: Implement authentication check
    return localStorage.getItem('isAuthenticated');
}

const setAuthenticated = (value: boolean) => {
    localStorage.setItem('isAuthenticated', value.toString());
}

export { isAuthenticated, setAuthenticated };