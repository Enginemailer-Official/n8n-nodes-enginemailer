import { INodePropertyRouting } from 'n8n-workflow';

// TODO further testing needed
export const subscriberADdOrUpdate: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/addupdatesubscriber',
		body: {
			email: '={{$parameter.email}}',
			sourceType: '={{$parameter.sourceType}}',
			subcategories: '={{$parameter.subcategories}}',
			customfields: '={{$parameter.customfields}}',
			updatetype: '={{$parameter.updatetype}}',
		},
	},
};
