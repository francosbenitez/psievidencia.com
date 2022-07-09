import Link from "next/link";
import { Psychologist } from "../../types";

const TheCard = ({ psychologist }: { psychologist: Psychologist }) => {
  return (
    <Link href={`/psychologists/${psychologist.id}`}>
      <div className="w-full rounded-lg shadow-xl bg-white p-10 flex flex-col border-2 hover:border-indigo-500/100 cursor-pointer">
        {/* {psychologist.image_url && (
          <Image
            src={psychologist.image_url}
            alt=""
            className="rounded-full p-4 h-40 w-40 mx-auto"
          />
        )} */}
        <header className=" text-2xl font-extrabold py-4 px-4 text-center">
          {psychologist.name !== "" ? psychologist.name : "Unknown"}
        </header>
        <div>
          <ul className="text-gray-500 text-center font-semibold break-words">
            <li>{psychologist.province}</li>
            <li className="text-left">
              {psychologist.therapeutic_model.split(",").map(
                (item, index) =>
                  index < 3 && (
                    <span
                      className="bg-indigo-400 text-white break-all mr-1 px-1"
                      key={item}
                    >
                      {item}
                    </span>
                  )
              )}
              {psychologist.therapeutic_model.split(",").length > 3 && (
                <span>...</span>
              )}
            </li>
            <li className="text-left">
              {psychologist.work_population.split(",").map(
                (item, index) =>
                  index < 3 && (
                    <span
                      className="bg-green-400 text-white break-all mr-1 px-1"
                      key={item}
                    >
                      {item}
                    </span>
                  )
              )}
              {psychologist.work_population.split(",").length > 3 && (
                <span>...</span>
              )}
            </li>
            {psychologist.specialization !== "" && (
              <li className="text-left">
                {psychologist.specialization.split(",").map(
                  (item, index) =>
                    index < 3 && (
                      <span
                        className="bg-blue-400 text-white break-all mr-1 px-1"
                        key={item}
                      >
                        {item}
                      </span>
                    )
                )}
                {psychologist.specialization.split(",").length > 3 && (
                  <span>...</span>
                )}
              </li>
            )}
          </ul>
        </div>
        <footer className="text-center py-3 text-gray-500 flex justify-center mt-auto block">
          {psychologist.online === "Sí" && (
            <p className="p-2">
              <span className="bg-indigo-500 text-white p-2">
                Atiende online
              </span>
            </p>
          )}
        </footer>
      </div>
    </Link>
  );
};

export default TheCard;
