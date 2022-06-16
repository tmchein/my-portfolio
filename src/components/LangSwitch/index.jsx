import { useI18N } from "../../context/useI18n";

export default function LangSwitch() {
  const { locale, setLocale, t } = useI18N();
  const handleChange = () => {
    setLocale(locale === "EN" ? "ES" : "EN");
  };

  return (
    <div className="flex justify-around items-center text-white w-32">
      <p>{t("LANG")}</p>
      <button
        className="bg-white text-black font-bold px-3 hover:bg-blue-500 hover:text-white"
        onClick={handleChange}
      >
        {locale === "EN" ? "ES" : "EN"}
      </button>
    </div>
  );
}
