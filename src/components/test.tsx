import { useTranslations } from "next-intl";

export function Test() {
    const t = useTranslations();

    return (<>{t("test")}</>)
}