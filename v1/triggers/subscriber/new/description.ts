import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberNewDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Source',
		name: 'source',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
			},
		},
		options: [
			{
				name: 'Form',
				value: 'Form',
			},
			{
				name: 'API',
				value: 'API',
			},
			{
				name: 'Manual',
				value: 'Manual',
			},
			{
				name: 'LandingPage',
				value: 'LandingPage',
			},
			{
				name: 'Import',
				value: 'Import',
			},
			{
				name: 'WhatsApp',
				value: 'WhatsApp',
			},
			{
				name: 'Popup',
				value: 'Popup',
			},
		],
		default: '',
		description: 'Filter Subscribers by source',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
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
		displayName: 'Form',
		name: 'filter_form',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['Form'],
			},
		},
		description:
			"This is only applicable if the source is set to 'Form.' If not selected, it will filter by all forms.",
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfForms',
		},
	},
	{
		displayName: 'Landing Page',
		name: 'filter_page',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['LandingPage'],
			},
		},
		description:
			"This is only applicable if the source is set to 'LandingPage' If not selected, it will filter by all landing pages.",
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfLandingPages',
		},
	},
	{
		displayName: 'List of Popups',
		name: 'filter_popups',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['Popup'],
			},
		},
		description:
			"This is only applicable if the source is set to 'Popup'. If not selected, it will filter by all popups.",
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getListOfPopups',
		},
	},
];
