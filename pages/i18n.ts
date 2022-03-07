import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import FetchBackend from "i18next-fetch-backend";


i18next
    .use(FetchBackend)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        defaultNS: "translations",
        fallbackNS: "translations",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        react: {
            transWrapTextNodes: "span",
            useSuspense: false
        },
    })

export default i18next