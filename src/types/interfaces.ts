export interface BaseMovieProps {
    production_countries: {
      iso_3166_1: string;
      name: string
    }[];
    genres: {
      id: number;
      name: string;
    }[];
    genre_ids?: number[];
    movies: BaseMovieProps[];
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
  }

  export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; 
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

export interface BaseActorListProps {
  actors: ActorDetails[];
  action: (a: ActorDetails) => React.ReactNode;
}

export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

export interface ActorListPageTemplateProps {
  title: string;
  actors: ActorDetails[];
  action: (a: ActorDetails) => React.ReactNode;
}

   export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }


export type FilterOption = "title" | "genre";

export interface ActorDetails {
  id: number;
  name: string;
  biography: string;
  birthday: string;
  detahday: string | null;
  place_of_birth: string | null;
  profile_path: string | null;
  popularity: number;
  known_for_department: string | null;
}

export interface ActorMovieCredits {
  cast: {
    id: number;
    title: string;
    character: string;
    release_date: string;
    poster_path: string | null;
  }[];
}
