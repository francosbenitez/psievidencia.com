import Link from "next/link";
import { Psychologist } from "../../types";
import { FormattedMessage } from "react-intl";
import Heart from "../../public/icons/heart.svg";
import UsersService from "../../services/UsersService";

const TheCard = ({
  psychologist,
  update,
  showLogin,
}: {
  psychologist: Psychologist;
  update: any;
  showLogin?: any;
}) => {
  const handleCreate = async (id: any, e: React.FormEvent) => {
    e.preventDefault();
    try {
      (await UsersService.favoritesCreate(id)).data.data;
      update();
    } catch (errors) {
      showLogin();
      console.log("errors.response.data", errors.response.data);
    }
  };

  const handleDelete = async (id: any, e: React.FormEvent) => {
    e.preventDefault();
    try {
      (await UsersService.favoritesDelete(id)).data.data;
      update();
    } catch (errors) {
      console.log("errors.response.data", errors.response.data);
    }
  };

  return (
    <Link href={`/psychologists/${psychologist.id}`}>
      <a className="w-full rounded shadow-md bg-white p-10 flex flex-col border-2 hover:border-primary cursor-pointer relative">
        <button
          onClick={
            psychologist.liked
              ? (e) => handleDelete(psychologist.id, e)
              : (e) => handleCreate(psychologist.id, e)
          }
        >
          <Heart
            className={`absolute right-0 top-0 mr-3 mt-3 hover:fill-gray-200 ${
              psychologist.liked ? "fill-gray-500" : ""
            }`}
          />
        </button>
        <header className="text-xl mb-3 text-center">
          {psychologist.name !== "" ? (
            psychologist.name
          ) : (
            <span className="italic">Sin nombre</span>
          )}
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
      </a>
    </Link>
  );
};

export default TheCard;
