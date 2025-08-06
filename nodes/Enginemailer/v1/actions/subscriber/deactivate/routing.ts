import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberDeactivateRouting: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/unsubscribe',
		body: {
			email: '={{$parameter.email}}',
		},
	},
};
