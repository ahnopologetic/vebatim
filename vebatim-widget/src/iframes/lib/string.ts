const sanitizeString = (str: string) => {
    return str.trim().replace(/\n/g, ' ');
};

export { sanitizeString };