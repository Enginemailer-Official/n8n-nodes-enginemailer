import { SubscriberProperties } from '../../interfaces';

export const subscriberUntagSubcategoryDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
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
		displayName: 'Subcategory',
		name: 'subcategories',
		type: 'multiOptions',
		required: true,
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['untag'],
			},
		},
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfSubcategories',
		},
	},
];
