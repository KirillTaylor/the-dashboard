const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/.test(email);
}

export { isEmailValid };