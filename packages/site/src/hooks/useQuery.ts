import API, { graphqlOperation } from '@aws-amplify/api';
import { useAsync } from '.';

interface QueryProps<T> {
  query: string;
  immediate?: boolean;
  variables?: object;
  onResult?: (value: T) => void;
  onFail?: (exception: Error) => void;
  useIsLoading?: boolean;
}

function useQuery<T>({
  query,
  immediate = false,
  variables,
  onResult,
  onFail,
  useIsLoading,
}: QueryProps<T>) {
  const { value, execute, error, loading } = useAsync<T>({
    asyncFunction: async function(newVariables) {
      const result = await API.graphql(
        graphqlOperation(query, newVariables || variables),
      );
      return (result as any)?.data as T;
    },
    immediate,
    onResult,
    onFail,
    useIsLoading,
  });

  return { response: (value as T) || ({} as T), execute, error, loading };
}

export default useQuery;
