import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberDeleteRouting: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/deletesubscriber',
		body: {
			email: '={{$parameter.email}}',
		},
	},
};
