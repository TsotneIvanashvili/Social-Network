const SetLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}


const GetLocal = (key) => {
    return JSON.parse(localStorage.getItem(key))
}


export {SetLocal, GetLocal}