import { SubscriberProperties } from '../../interfaces';

export const subscriberTagSubcategoryDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['tag'],
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
				operation: ['tag'],
			},
		},
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfSubcategories',
		},
	},
];
