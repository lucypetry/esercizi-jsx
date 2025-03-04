import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useBotResponse = (message) => {
  const { data, error, mutate } = useSWR(
    message ? `https://mocki.io/v1/b4d55400-3427-4e18-b38f-25f4271c4bee` : null,
    fetcher
  );

  return {
    response: data?.response,
    isLoading: !error && !data,
    isError: error,
    refetch: mutate,
  };
};

export default useBotResponse;
