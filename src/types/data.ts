export interface MoviesData {
  results: [],
  total_pages: number
}

export interface DetailData {
  backdrop_path: string,
  title: string,
  overview: string,
  vote_average: number,
  release_date: string,
  genres: [{ name: [] }],
}

export interface RecommendsData {
  results: {
    id: number,
    title: string,
    backdrop_path: string,
    vote_average: number
  }[],
  total_pages: number,
}

export interface ReviewsData {
  results: {
    id: number,
    author: string,
    author_details: {
      avatar_path: string,
      rating: number
    },
    content: string,
    updated_at: string,
  }[],
  total_pages: number,
}

export interface VideosData {
  results: {
    id: number,
    key: string
  }[],
}

