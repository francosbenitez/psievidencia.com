import React from "react";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Head from "next/head";

const FAQ = () => {
  const faqs = [
    {
      title: "¿Cómo me registro en la web?",
      content:
        "Para registrarte en la web como profesional de psico, dirigite a <a class='underline' href='https://docs.google.com/forms/d/1KHCPdTENlypWSJGPOGsLB5uud7-Kxl91oEspAkJmyvU/viewform?edit_requested=true' target='_blank' rel=noopener noreferrer'>este Google Forms</a>. De momento, estamos usando este método, hasta que podamos integrar un formulario en la web (¡lo cual se viene pronto!).",
    },
    {
      title: "¿Cómo colaboro con Psievidencia?",
      content:
        "¡Encantadísimos de sumar nuevos #Psievidentes! Dirigite a <a class='underline' href='/collaborate'>Colaborar</a> para saber más.",
    },
    {
      title: "¿Cómo puedo editar mi perfil?",
      content: "¡Todavía estamos trabajando en esa funcionalidad!",
    },
  ];

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes | Psievidencia</title>
        <meta
          name="description"
          content="Preguntas Frecuentes | Psievidencia"
        />
      </Head>
      <div className="container min-h-screen w-11/12 mx-auto pt-20 pb-40">
        <div className="text-center">
          <h2 className="text-3xl underline">Preguntas Frecuentes</h2>
          <p className="text-lg mt-4">
            Tus preguntas acerca de Psievidencia, respondidas
          </p>
        </div>
        <div className="mt-6 mx-auto max-w-2xl">
          {faqs.map((faq) => (
            <Accordion key={faq.title} sx={{ marginBottom: "1rem" }}>
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="text-lg">{faq.title}</p>
              </MuiAccordionSummary>
              <MuiAccordionDetails>
                <p
                  className="text-lg"
                  dangerouslySetInnerHTML={{ __html: faq.content }}
                />
              </MuiAccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
