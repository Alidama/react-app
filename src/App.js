import { useEffect, useState } from "react";
import {NotificationContainer} from 'react-notifications';
import { useDispatch, useSelector } from "react-redux";
import CardFilm from "./Componants/CardFilm";
import CategoriesSelector from "./Componants/CategoriesSelector";
import Header from "./Componants/Header";
import Spinner from "./Componants/Spinner";
import { getMoviesWithThunk } from "./redux/action";
import 'react-notifications/lib/notifications.css';

export default function App() {
  const [choise, setChoise] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.reducer.loading);
  const movies = useSelector((state) => state.reducer.movies);

  useEffect(() => {
    dispatch(getMoviesWithThunk());
  }, [dispatch]);

  const getCategories = () => {
    var cathégories = [];
    movies.forEach((mv) => {
      if (!cathégories.includes(mv.category)) {
        cathégories.push(mv.category);
      }
    });
    return cathégories;
  };
  if (loading) return <Spinner />;
  return (
    <>
        <Header />
        {!!movies.length && (
          <CategoriesSelector options={getCategories()} setChoise={setChoise} />
        )}
        <div className="p-10 mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {movies
            .filter((mv) => (choise !== "" ? mv.category === choise : mv))
            .map((mv) => (
              <CardFilm
                key={mv.id}
                id={mv.id}
                likes={mv.likes}
                dislikes={mv.dislikes}
                category={mv.category}
                title={mv.title}
              />
            ))}
        </div>
        <NotificationContainer />
    </>
  );
}
