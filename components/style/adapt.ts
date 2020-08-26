export default function adapt(): void {
    // 标准根字体大小
    const ORIGIN_FONT_SIZE = 16;
    // 最大适配宽度
    const MAX_ADAPT_WIDTH = 420;
    // 标准宽度
    const BASE_SCREEN_WIDTH = 375;
    // 最大适配字体
    const MAX_FONT_SIZE = (MAX_ADAPT_WIDTH / BASE_SCREEN_WIDTH) * ORIGIN_FONT_SIZE;

    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html');
        let fontSize = (window.innerWidth / BASE_SCREEN_WIDTH) * ORIGIN_FONT_SIZE;
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
        html!.style.fontSize = `${fontSize}px`;
    });
}
