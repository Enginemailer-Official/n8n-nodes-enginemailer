import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberUnsubscribedDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['unsubscribed'],
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
		displayName: 'Unsubscribe Source',
		name: 'filter',
		type: 'options',
		noDataExpression: true,
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['unsubscribed'],
			},
		},
		options: [
			{
				name: 'Autoresponder',
				value: 'Autoresponder',
			},
			{
				name: 'Campaign',
				value: 'Campaign',
			},
		],
		default: '',
		description: '',
	},
	{
		displayName: 'Autoresponder',
		name: 'filter_autoresponder',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['unsubscribed'],
				filter: ['Autoresponder'],
			},
		},
		description: "This is only applicable if the unsubscribe source is set to 'Autoresponder.'",
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfAutoresponders',
		},
	},
	{
		displayName: 'Campaign',
		name: 'filter_campaign',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['unsubscribed'],
				filter: ['Campaign'],
			},
		},
		description: "This is only applicable if the unsubscribe source is set to 'Campaign.'",
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfCampaigns',
		},
	},
];
