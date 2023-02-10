export function IsEmailValid(value) {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
    if (!value) {
        return 'Email Id should not be blank.';
    }
    else if (!emailRegExp.test(value)) {
        return 'Invalid email address';
    }
    return ''
}

export function IsMobileNoValid(value) {
    const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (!value) {
        return 'Mobile No should not be blank.';
    }
    else if (!phoneRegExp.test(value)) {
        return 'Invalid email address';
    }
    return ''
}

export function IsEmpty(name, value) {
    return !value ? name + ' should not be blank.' : ''
}