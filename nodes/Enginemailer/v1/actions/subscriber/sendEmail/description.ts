import { SubscriberProperties } from '../../interfaces';

export const subscriberSendEmailDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
	{
		displayName: 'Content Type',
		name: 'contentType',
		type: 'options',
		noDataExpression: true,
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
			},
		},
		options: [
			{
				name: 'Template',
				value: 'template',
			},
			{
				name: 'HTML',
				value: 'html',
			},
		],
		default: 'html',
	},
	{
		displayName: 'HTML Content',
		name: 'html',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
				contentType: ['html'],
			},
		},
		default: `<!DOCTYPE html>
<html>
	<body>
		<p>Hi John,</p>
		<p>This is a testing email.</p>
	</body>
</html>`,
		description:
			'If not using a template, provide the full HTML content for the email. Ensure the HTML is properly formatted and includes any necessary inline styles. If using a template, HTML content is not required.',
		typeOptions: {
			editor: 'htmlEditor',
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
				contentType: ['html'],
			},
		},
		default: '',
	},
	{
		displayName: 'Sender Email',
		name: 'sender_email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
				contentType: ['html'],
			},
		},
		default: '',
	},
	{
		displayName: 'Sender Name',
		name: 'sender_name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
				contentType: ['html'],
			},
		},
		default: '',
	},
	{
		displayName: 'Template Name or ID',
		name: 'template_id',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
				contentType: ['template'],
			},
		},
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfTemplates',
		},
		description:
			'The subject and sender email will follow the template. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Substitution Tags',
		name: 'substitution_tags',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
			},
		},
		default: `[
	{
		"Key": "firstname",
		"Value":"John"
	},
	{
		"Key":"member_id",
		"Value":"1234"
	}
]`,
		description:
			"Ensure the 'key' matches the tag used in the subject, HTML content, or template. If a tag has no corresponding value, it will be replaced with a blank space.",
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
	{
		displayName: 'CC Emails',
		name: 'cc_emails',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['sendEmail'],
			},
		},
		placeholder: 'user1@domain.com, user2@domain.com',
		default: '',
		description: 'Enter up to 10 email addresses, separated by commas',
	},
];
