import React from "react";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addDislike, addLike } from "../redux/actionType";
import { HandThumbDownIconSolid, HandThumbUpIconSolid } from "./iconSolid";
import { TrashIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import img from "../assets/imageFilm.jpg";

function CardFilm({ id, dislikes, likes, category, title }) {
  const likess = useSelector((state) => state.reducer.likes);
  const disLikes = useSelector((state) => state.reducer.disLikes);
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useDispatch();
  const likeHnadler = (id) => {
    dispatch({
      type: addLike,
      payload: id,
    });
  };
  const disLikeHnadler = (id) => {
    dispatch({
      type: addDislike,
      payload: id,
    });
  };
  return (
    <div
      key={id}
      className={`relative overflow-hidden relative shadow-2xl rounded-lg border-dashed border-2 ${
        id % 2 ? "border-gray-800" : "border-white-400"
      }`}
    >
      <img
        alt={title}
        src={img}
        className="opacity-20 absolute w-full h-full z-0"
      />

      <div className="px-6 py-4 h-full bg-gray-200 z-20">
        <div className="flex justify-end">
          <TrashIcon
            className="h-6 w-6 text-[#FF0000] cursor-pointer z-40"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <div className=" text-xl mb-2 text-center mt-3">{category}</div>
        <div className="flex items-center justify-center mt-2 gap-5 cursor-pointer">
          <div className="flex items-center justify-center gap-1">
            {likess.includes(id) ? (
              <HandThumbUpIconSolid
                className="h-6 w-6 text-blue-500 z-40"
                onClick={() => likeHnadler(id)}
              />
            ) : (
              <HandThumbUpIcon
                className="h-6 w-6 z-40 "
                onClick={() => likeHnadler(id)}
              />
            )}

            <div className="font-bold text-l mb-2 mt-3 text-right">
              {" "}
              {likess.includes(id) ? likes + 1 : likes}
            </div>
          </div>
          <div className="flex items-center justify-center cursor-pointer gap-1">
            {disLikes.includes(id) ? (
              <HandThumbDownIconSolid
                className="h-6 w-6 text-red-500 z-40"
                onClick={() => disLikeHnadler(id)}
              />
            ) : (
              <HandThumbDownIcon
                className="h-6 w-6 z-40"
                onClick={() => disLikeHnadler(id)}
              />
            )}
            <div className="font-bold text-l mb-2 mt-3 text-left">
              {disLikes.includes(id) ? dislikes + 1 : dislikes}
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} id={id} title={title} />}
    </div>
  );
}

export default CardFilm;
