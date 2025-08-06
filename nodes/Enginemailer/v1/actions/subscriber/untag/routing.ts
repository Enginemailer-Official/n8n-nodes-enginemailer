import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberUntagSubcategory: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/untagtosubcategory',
		body: {
			email: '={{$parameter.email}}',
			subcategories: '={{$parameter.subcategories}}',
		},
	},
};
