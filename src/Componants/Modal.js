import React from "react";
import { useDispatch } from "react-redux";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { deleteMovie } from "../redux/actionType";
import { NotificationManager} from 'react-notifications';
export default function Modal({ setShowModal, id, title }) {
  const dispatch = useDispatch();
  const deleteMovieHandler = (id) => {
    dispatch({
      type: deleteMovie,
      payload: id,
    });
    NotificationManager.success(`vous avez bien supprimé le film ${title}`);
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative my-6 mx-auto max-w-2xl border-2 border-gray-500 rounded-lg mx-4">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 flex-auto ">
            <div className="flex justify-center ">
              <div>
                <ExclamationTriangleIcon className="h-16 w-16 text-red-500 align-center" />
              </div>
            </div>
            <p className="my-8 text-slate-500 text-lg leading-relaxed">
              Are you sure you want to delete the movie{" "}
              <span className="text-red-500">"{title}"</span> ?
            </p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              type="button"
              onClick={() => deleteMovieHandler(id)}
            >
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
