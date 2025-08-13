import { SubscriberProperties } from '../../interfaces';

export const subscriberUntagSubcategoryDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['untag'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
	{
		displayName: 'Subcategory (Names or IDs)',
		name: 'subcategories',
		type: 'multiOptions',
		description:
			'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['untag'],
			},
		},
		default: [],
		typeOptions: {
			loadOptionsMethod: 'getListOfSubcategories',
		},
	},
];
