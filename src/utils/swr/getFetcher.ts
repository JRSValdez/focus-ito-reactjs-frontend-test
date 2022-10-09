import api from "../../apis/TMDBApi";

export const getSWRFetcher = async (url: string) => {
  return await api.get(url);
};
