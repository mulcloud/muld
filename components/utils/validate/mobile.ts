export function isMobile(value: string): boolean {
    // eslint-disable-next-line no-param-reassign
    value = value.replace(/[^-|\d]/g, '');
    return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
