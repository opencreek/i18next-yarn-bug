import {useTranslation} from "react-i18next";

export default function Home() {
  const {t} = useTranslation("translations")
  return (
    <span>
      translation: {t("key")}
    </span>
  )
}

