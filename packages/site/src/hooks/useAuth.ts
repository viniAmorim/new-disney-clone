import { useCallback } from 'react';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

import { useAsync } from '.';

function useAuth() {
  const router = useRouter();

  const checkAuth = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
    } catch {
      return false;
    }
  }, []);

  const handleResult = useCallback(() => {
    if (value !== null && !value) {
      router.push('/');
    }
  }, [router]);

  const { value } = useAsync({
    asyncFunction: checkAuth,
    onResult: handleResult,
  });
}

export default useAuth;
