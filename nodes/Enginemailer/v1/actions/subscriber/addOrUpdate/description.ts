import { SubscriberProperties } from '../../interfaces';

export const subscriberAddOrUpdateDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['addOrUpdate'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
	{
		displayName: 'Source Type',
		name: 'sourcetype',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['addOrUpdate'],
			},
		},
		default: 'Signup from website',
	},
	{
		displayName: 'Subcategory (Names or IDs)',
		name: 'subcategories',
		type: 'multiOptions',
		description:
			'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['addOrUpdate'],
			},
		},
		default: [],
		typeOptions: {
			loadOptionsMethod: 'getListOfSubcategories',
		},
	},
	{
		displayName: 'Custom Fields',
		name: 'customfields',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['addOrUpdate'],
			},
		},
		default: `[
	{
		"customfield_key": "first_name",
		"customfield_value": "John"
	}
]`,
		description:
			'Enter the custom fields data in JSON format. To find the custom field key for your account, log in to your Enginemailer portal and navigate to the Custom Fields section: <a href="https://portal.enginemailer.com/Subscribers/CustomFields">Custom Fields</a>.',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
	{
		displayName: 'Update Type',
		name: 'updatetype',
		type: 'options',
		noDataExpression: true,
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['addOrUpdate'],
			},
		},
		options: [
			{
				name: 'Overwrite',
				value: 'Overwrite',
			},
			{
				name: 'Append',
				value: 'Append',
			},
			{
				name: 'Ignore',
				value: 'Ignore',
			},
		],
		default: 'Ignore',
		description:
			"These options are only applicable if data exists. The default option is 'Ignore,' which leaves the data unchanged. Choose 'Overwrite' to replace the existing data with the new information, or select 'Append' to add the new data without removing any existing content. Note: 'Append' only applicable to Subcategories field",
	},
];
