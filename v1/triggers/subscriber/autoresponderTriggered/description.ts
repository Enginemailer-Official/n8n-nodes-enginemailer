import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberTriggeredAutoresponderDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['autoresponderTriggered'],
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
		displayName: 'Autoresponder',
		name: 'filter_autoresponder',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['autoresponderTriggered'],
			},
		},
		description: 'Filter by autoresponder',
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfAutoresponders',
		},
	},
];
