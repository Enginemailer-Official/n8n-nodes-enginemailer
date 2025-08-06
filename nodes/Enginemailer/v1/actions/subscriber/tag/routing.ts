import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberTagSubcategory: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/tagtosubcategory',
		body: {
			email: '={{$parameter.email}}',
			subcategories: '={{$parameter.subcategories}}',
		},
	},
};
