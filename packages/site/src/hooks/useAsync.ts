/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';

import { useStateIfMounted } from 'use-state-if-mounted';

interface AsyncProps<T> {
  asyncFunction: (params?: any) => Promise<T>;
  immediate?: boolean;
  onResult?: (value: T) => void;
  onFail?: (error: Error) => void;
  useIsLoading?: boolean;
}

function useAsync<T>({
  asyncFunction,
  immediate = true,
  onResult,
  onFail,
  useIsLoading = false,
}: AsyncProps<T>) {
  const [value, setValue] = useStateIfMounted<{
    error: Error;
    loading: boolean;
    value: T | null;
  }>({
    error: null,
    loading: false,
    value: null,
  });

  const execute = useCallback(
    async (params?: any) => {
      if (useIsLoading) {
        setValue({
          error: null,
          loading: true,
          value: null,
        });
      }

      try {
        const response = await asyncFunction(params);
        setValue({
          error: null,
          loading: false,
          value: response,
        });

        if (onResult) {
          onResult(response);
        }
      } catch (tempError) {
        setValue({
          error: tempError,
          loading: false,
          value: null,
        });

        if (onFail) {
          onFail(tempError);
        }
      }
    },
    [asyncFunction],
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]);

  return { execute, ...value };
}

export default useAsync;
