import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import App  from './App';
import { unpackError } from './utils';

export function QueryClientWrapper() {
	const handleApiError = (error: any) => {
		console.log(error);
	};
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: { refetchOnMount: false, refetchOnReconnect: false, refetchOnWindowFocus: false, onError: handleApiError },
					mutations: { onError: handleApiError },
				},
			})
	);
	return (
		<QueryClientProvider client={queryClient}>
			<App></App>
		</QueryClientProvider>
	);
}
