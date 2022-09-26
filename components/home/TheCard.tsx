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
      update(id);
    } catch (errors) {
      showLogin();
      console.log("errors.response.data", errors.response.data);
    }
  };

  const handleDelete = async (id: any, e: React.FormEvent) => {
    e.preventDefault();
    try {
      (await UsersService.favoritesDelete(id)).data.data;
      update(id);
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
          {psychologist.therapeutic_models.length > 0 && (
            <li className="text-left">
              {psychologist.therapeutic_models.map(
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
              {psychologist.therapeutic_models.length > 3 && <span>...</span>}
            </li>
          )}
          {psychologist.work_populations.length > 0 && (
            <li className="text-left">
              {psychologist.work_populations.map(
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
              {psychologist.work_populations.length > 3 && <span>...</span>}
            </li>
          )}
          {psychologist.specializations.length > 0 && (
            <li className="text-left">
              {psychologist.specializations.map(
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
              {psychologist.specializations.length > 3 && <span>...</span>}
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
