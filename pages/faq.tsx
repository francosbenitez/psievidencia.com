import React from "react";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Head from "next/head";
import Link from "next/link";

const FAQ = () => {
  const faqs = [
    {
      title: "¿Cómo me registro en la web?",
      content: (
        <>
          Para registrarte en la web como profesional de psico, dirigite a{" "}
          {
            <Link
              href="https://docs.google.com/forms/d/1KHCPdTENlypWSJGPOGsLB5uud7-Kxl91oEspAkJmyvU/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underline cursor-pointer">
                este Google Forms
              </span>
            </Link>
          }
          . De momento, estamos usando este método, hasta que podamos integrar
          un formulario en la web (¡lo cual se viene pronto!).
        </>
      ),
    },
    {
      title: "¿Cómo colaboro con Psievidencia?",
      content: (
        <>
          ¡Encantadísimos de sumar nuevos bancantes del proyecto! Dirigite a{" "}
          {
            <Link href="/collaborate">
              <span className="underline cursor-pointer">Colaborar</span>
            </Link>
          }{" "}
          para saber más.
        </>
      ),
    },
    {
      title: "¿Cómo puedo editar mi perfil?",
      content: "¡Todavía estamos trabajando en esa funcionalidad!",
    },
    {
      title: "¿Existe un proceso de verificación de los perfiles?",
      content: (
        <>
          De momento no, aún no está esa posibilidad. Pero si creés que alguien
          posee una identidad falsa y/o alude a formaciones que no posee, podés
          denunciarlo{" "}
          {
            <Link href="/contact">
              <span className="underline cursor-pointer">contactándonos</span>
            </Link>
          }
          .
        </>
      ),
    },
    {
      title: "¿Es válido para otros países?",
      content: (
        <>
          La mayoría de les psicoterapeutas atiende de manera virtual, ¡por lo
          tanto sí! Es válido para todos los países.
        </>
      ),
    },
    {
      title: "¿Se cobra por pertenecer a Psievidencia?",
      content: (
        <>
          No, Psievidencia es completamente gratuito. Si te interesaría aportar
          tu granito de arena al proyecto, dirígete a{" "}
          {
            <Link href="/collaborate">
              <span className="underline cursor-pointer">Colaborar</span>
            </Link>
          }
          .
        </>
      ),
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
          {faqs.map((faq) => {
            console.log("faq.content", faq.content);
            return (
              <Accordion key={faq.title} sx={{ marginBottom: "1rem" }}>
                <MuiAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="text-lg">{faq.title}</p>
                </MuiAccordionSummary>
                <MuiAccordionDetails>{faq.content}</MuiAccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
