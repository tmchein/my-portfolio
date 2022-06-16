import ListOfTech from "../ListOfTech";
import Section from "../Section";
import stack from "../../utils/Stack";
import projects from "../../utils/Projects";
import Title from "../Title";
import { useI18N } from "../../context/useI18n";

export default function WindowContent() {
  const { t } = useI18N();
  return (
    <main className="relative h-[95%] w-full">
      <div className="w-full h-full flex flex-col items-center absolute overflow-auto px-2 sm:px-24">
        <h1 className="text-4xl text-center font-bold underline mb-8">
          {t("PAGE_TITLE_GREETING")}
        </h1>
        <img
          className="w-32 border-4 border-gray-900 rounded-full"
          src="/myprofilepic.jpeg"
          alt="Juan Rojas face"
        />
        <h2 className="font-light">{t("NAME_DESCRIPTION")}</h2>
        <h2 className="mb-8 font-bold text-center">{t("ROLE_DESCRIPTION")}</h2>
        <Title content="Welcome" color="bg-[#3197eb]" />
        <Title content="Bienvenido" color="bg-[#fe2323]" />
        <Title content="willkommen" color="bg-[#FFBD44]" />
        <Title content="Bem-vindo" color="bg-[#00CA4E]" />
        <hr className="w-3/4 border-2 border-gray-900 my-5" />
        <Section title={t("ABOUT_ME")} body={t("ABOUT_ME_BODY")} />
        <Section title={t("MY_EXPERIENCE")}>
          <Title
            content="Globant"
            size="small"
            alignLeft
            color="bg-[#BFD732]"
          />
          <span className="underline font-semibold">{`${t("JULY")} 2021 - ${t(
            "PRESENT"
          )}`}</span>
          <p className="mb-8 text-justify">{t("GLOBANT_EXPERIENCE")}</p>
          <Title
            content="Torrens University Australia"
            size="small"
            alignLeft
            color="bg-[#F25002]"
          />
          <span className="underline font-semibold">
            {`${t("JANUARY")} - ${t("JULY")} 2021`}
          </span>
          <p className="text-justify">{t("TUA_EXPERIENCE")}</p>
        </Section>
        <Section title={t("STACK_OF_TECHNOLOGIES")}>
          <ListOfTech elements={stack} />
        </Section>
        <Section title={t("MY_PROJECTS")}>
          <ListOfTech elements={projects} />
        </Section>
      </div>
    </main>
  );
}
