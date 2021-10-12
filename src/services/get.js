import useSWR from "swr";

import fetcher from "./fetcher";

const useData = () => {
  const { data, error } = useSWR(["/get"], fetcher);
  return { data, error, isLoading: !data && !error };
};

export default useData;
