import Link from "next/link";
import { Psychologist } from "../../types";
import { FormattedMessage } from "react-intl";
import Heart from "../../public/icons/heart.svg";

const TheCard = ({ psychologist }: { psychologist: Psychologist }) => {
  return (
    <Link href={`/psychologists/${psychologist.id}`}>
      <div className="w-full rounded shadow-md bg-white p-10 flex flex-col border-2 hover:border-primary cursor-pointer relative">
        <Heart className="absolute right-0 top-0 mr-3 mt-3" />
        <header className="text-xl mb-3 text-center">
          {psychologist.name !== "" ? psychologist.name : "Unknown"}
        </header>
        <ul className="text-primary text-center break-words">
          <li className="mb-3">{psychologist.province}</li>
          <li className="text-left">
            {psychologist.therapeutic_model.split(",").map(
              (item, index) =>
                index < 3 && (
                  <span
                    className="bg-primary text-white break-all mr-1 px-1"
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
                    className="bg-primary text-white break-all mr-1 px-1"
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
                      className="bg-primary text-white break-all mr-1 px-1"
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
        <footer className="text-center py-3 text-primary flex justify-center mt-auto block">
          {psychologist.online === "Sí" && (
            <p className="p-2">
              <span className="bg-primary text-white p-2">
                <FormattedMessage id="offers.online" />
              </span>
            </p>
          )}
        </footer>
      </div>
    </Link>
  );
};

export default TheCard;
