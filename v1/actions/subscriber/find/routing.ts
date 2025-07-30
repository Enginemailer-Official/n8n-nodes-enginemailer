import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberFindRouting: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/findsubscriber',
		body: {
			email: '={{$parameter.email}}',
		},
	},
};
