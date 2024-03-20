const cache = {
	short: { cacheTime: 30 * 1000, staleTime: 10 * 1000 },
	long: { cacheTime: 5 * 60 * 1000, staleTime: 60 * 1000 },
};

module.exports = {
	api: {
		output: {
			workspace: 'src/',
			client: 'react-query',
			target: './api',
			schemas: './api/models',
			mode: 'tags-split',
			prettier: true,
		},
		hooks: {
			afterAllFilesWrite: 'prettier --write',
		},
		input: {
			target: 'http://localhost:5187/swagger/v1/swagger.json',
		},
	},
};
