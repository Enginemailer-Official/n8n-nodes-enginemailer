import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberTaggedDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['tagged'],
			},
		},
		description: 'Set the maximum number of records returned in the API response (up to 50).',
		default: 50,
		placeholder: '1',
		typeOptions: {
			minValue: 1,
			maxValue: 50,
			numberPrecision: 0,
		},
	},
	{
		displayName: 'Subcategory',
		name: 'filter_subcategory',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['tagged'],
			},
		},
		description: 'Filter by subcategory',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfSubcategories',
		},
	},
];
