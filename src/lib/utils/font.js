export const getFontSize = (type = 'p') => {
    let size = 14;

    switch (type) {
        case 'h1':
            size = 22;
            break;
        case 'h2':
            size = 20;
            break;
        case 'h3':
            size = 18;
            break;
        case 'h4':
            size = 17;
            break;
        case 'h5':
            size = 16;
            break;
        case 'p':
            size = 14;
            break;
        case 'info':
            size = 12;
            break;
        default:
            break;
    }

    return `${size}px`;
};
