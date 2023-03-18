import {useI18n} from 'vue-i18n';

export function useTranslate() {

    const {t} = useI18n();

    const doTranslate = (txt) => {
        return t(txt.toLowerCase())
    }

    return { doTranslate };
}