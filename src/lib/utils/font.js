export const getFontSize = (type = 'p') => {
    let size = 14;

    switch (type) {
        case 'h1':
            size = 25;
            break;
        case 'h2':
            size = 23;
            break;
        case 'h3':
            size = 21;
            break;
        case 'h4':
            size = 19;
            break;
        case 'h5':
            size = 17;
            break;
        case 'p':
            size = 16;
            break;
        case 'info':
            size = 14;
            break;
        default:
            break;
    }

    return `${size}px`;
};
