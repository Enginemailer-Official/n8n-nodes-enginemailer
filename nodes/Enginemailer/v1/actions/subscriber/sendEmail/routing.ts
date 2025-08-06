import { INodePropertyRouting } from 'n8n-workflow';

export const subscriberSendEmail: INodePropertyRouting = {
	request: {
		method: 'POST',
		url: '/sendemail',
		body: {
			email: '={{$parameter.email}}',
			type: '={{$parameter.contentType}}',
			html: '={{$parameter.html || undefined}}',
			subject: '={{$parameter.subject || undefined}}',
			sender_email: '={{$parameter.sender_email || undefined}}',
			sender_name: '={{$parameter.sender_name || undefined}}',
			template_id: '={{$parameter.template_id || undefined}}',
			substitution_tags: '={{$parameter.substitution_tags || undefined}}',
			cc_emails: '={{$parameter.cc_emails || undefined}}',
		},
	},
};
