import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMovies from "./actions/Movies"; // Aksiyon oluşturucuyu içe aktarın

const Movies = () => {
    const dispatch = useDispatch();
    const yaziListesi = useSelector((state) => state.yaziListesi);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div className="App">
            {yaziListesi.map((item) => {
                return <div key={item.id}>{item.title}</div>;
            })}
        </div>
    );
};

export default Movies;
