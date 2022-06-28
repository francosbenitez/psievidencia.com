import { Link } from "react-router-dom";

const PsychologistsCards = ({ psychologist }) => {
  return (
    <Link
      to={`/psychologists/${psychologist.id}`}
      className="w-full rounded-lg shadow-xl bg-white p-10 flex flex-col border-2 hover:border-indigo-500/100"
    >
      {psychologist.image_url && (
        <img
          src={psychologist.image_url}
          alt=""
          className="rounded-full p-4 h-40 w-40 mx-auto"
        />
      )}
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {psychologist.name}
      </header>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin
        gravida hendrerit lectus. Amet nisl suscipit adipiscing bibendum est
        ultricies. Lectus quam id leo in vitae turpis massa sed. Mi sit amet
        mauris commodo quis imperdiet. Elementum curabitur vitae nunc sed velit.
      </p> */}
      <footer className="text-center py-3 text-gray-500 flex justify-center mt-auto block">
        {psychologist.online === "Sí" && (
          <p className="p-2">
            <span className="bg-indigo-500 text-white p-2">Atiende online</span>
          </p>
        )}
      </footer>
    </Link>
  );
};

export default PsychologistsCards;
