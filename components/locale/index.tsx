import { deepAssign } from '../utils/deepAssign';
import defaultMessages from './lang/zh-CN';

let muldLang = 'zh-CN';
const muldMessage: Record<string, any> = {
    'zh-CN': defaultMessages,
};
export default {
    messages() {
        return muldMessage[muldLang];
    },
    use(lang: string, messages?: Record<string, any>) {
        muldLang = lang;
        this.add({ [lang]: messages });
    },
    add(messages = {}) {
        deepAssign(muldMessage, messages);
    },
};
