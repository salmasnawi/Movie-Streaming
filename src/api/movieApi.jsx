import axios from "axios";

const API_KEY = "36b927caa7f63dd9f0ca6caaf5592946";
const BASE_URL = "https://api.themoviedb.org/3";

// جلب قائمة الأفلام الشائعة
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY, language: "en-US" },
    });

    return response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      genres: movie.genre_ids.slice(0, 3).map((id) => genreMap[id] || "Unknown"),
    }));
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

// جلب تفاصيل فيلم محدد
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY, language: "en-US" },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// خريطة التصنيفات لتحويل الـ genre_ids إلى أسماء
const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
