import TheAccordion from "../../components/psychologists-detail/TheAccordion";
import PsychologistsService from "../../services/PsychologistsService";
import { useRouter } from "next/router";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";
import { GetServerSideProps } from "next";

const PsychologistsDetail = ({ psychologist }: { psychologist: any }) => {
  const router = useRouter();
  const intl = useIntl();
  const { locale }: { locale?: any } = useRouter();

  const accordionData = [
    {
      title: "Identidad de Género",
      content: "gender_identity",
    },
    {
      title: "Tipo de Matrícula",
      content: "registration_type",
    },
    {
      title:
        "Número de Matrícula (en caso de tener MN y MP, poner ambas en ese orden)",
      content: "registration_number",
    },
    {
      title:
        "Añada el nombre de la institución o servicio en salud mental en caso de formar parte",
      content: "institution",
    },
    {
      title: "¿Integra un equipo de salud con Médicx Psiquiatra?",
      content: "team",
    },
    {
      title: "Jurisdicción",
      content: "province",
    },
    {
      title:
        "Acá podes especificar la localidad dentro de la provincia donde ejerces",
      content: "city",
    },
    {
      title: "Mayor grado académico alcanzado",
      content: "education",
    },
    {
      title: "¿En cuáles de estos modelos terapéuticos acredita formación?",
      content: "therapeutic_models",
    },
    {
      title: "Formación en Perspectiva de Género/LGBTIQ+",
      content: "gender_perspective",
    },
    {
      title:
        "Otras formaciones realizadas que puedan ayudar a especificar tu perfil profesional",
      content: "specializations",
    },
    {
      title: "Población de trabajo",
      content: "work_populations",
    },
    {
      title: "Modalidad de Trabajo",
      content: "work_modalities",
    },
    {
      title: "Atención on-line",
      content: "online",
    },
    {
      title: "¿Trabaja con Obras Sociales / Prepagas?",
      content: "prepaid",
    },
    {
      title: "Especificar cuáles",
      content: "prepaid_type",
    },
    {
      title:
        "¿Facturás para realizar el reintegro en las Obras Sociales / Prepagas?",
      content: "invoice",
    },
    {
      title: "¿Utiliza Lengua de Señas? (manejo fluido para una sesión)",
      content: "sign_language",
    },
    {
      title:
        "Además de Español, ¿tiene manejo de otro/s idioma/s fluido/s para una sesión?",
      content: "session_languages",
    },
    {
      title:
        "Algún dato que quieras añadir y no se haya contemplado previamente en el cuestionario",
      content: "additional_data",
    },
  ];

  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const formattedDate = () => {
    let d = psychologist.date!.split(" ");
    d = new Date(d);

    if (locale === "en") {
      return (
        intl.formatMessage({ id: `months.${monthNames[d.getMonth()]}` }) +
        " " +
        d.getDate() +
        ", " +
        d.getFullYear()
      );
    }

    return (
      d.getDate() +
      " de " +
      intl.formatMessage({ id: `months.${monthNames[d.getMonth()]}` }) +
      ", " +
      d.getFullYear()
    );
  };
  return (
    <>
      <Head>
        <title>{`${psychologist.name || "Sin nombre"} | Psievidencia`}</title>
      </Head>
      {psychologist != null && Object.keys(psychologist).length > 0 && (
        <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
          <button
            className="
        relative
        bottom-[2rem]
        rounded
        w-10
        h-10
        before:bg-body
        before:rounded
        overflow-hidden
        block
        before:bg-arrow-left before:bg-no-repeat before:bg-cover before:bg-center 
        before:absolute before:inset-0
        before:block"
            onClick={() => router.back()}
          ></button>
          <div className="relative mb-16 text-center">
            <h1 className="text-5xl mb-6 break-words">
              <span className="bg-body">
                {psychologist.name !== "" ? (
                  psychologist.name
                ) : (
                  <span className="italic break-words">Sin nombre</span>
                )}
              </span>
            </h1>
            <h2 className="text-2xl break-words">
              <span className="bg-body">{psychologist.email}</span>
            </h2>
          </div>
          <h3 className="text-1xl my-6">{formattedDate()}</h3>
          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <TheAccordion
                key={title}
                title={title}
                content={psychologist[content]}
              />
            ))}
          </div>
          <div className="mt-12">
            <p className="text-lg">
              <FormattedMessage id="contact" />
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="break-words">
                <span className="underline">Redes Sociales</span>:{" "}
                {psychologist.social_networks !== "" ? (
                  <>{psychologist.social_networks}</>
                ) : (
                  <>
                    <FormattedMessage id="no.data" />
                  </>
                )}
              </p>
              <p className="text-right break-words">
                <span className="underline">Número o Mail de contacto</span>:{" "}
                {psychologist.phone_number !== "" ? (
                  <>{psychologist.phone_number}</>
                ) : (
                  <>
                    <FormattedMessage id="no.data" />
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const psychologist = (await PsychologistsService.detail(context.query.id))
    .data;
  return {
    props: {
      psychologist,
    },
  };
};

export default PsychologistsDetail;
