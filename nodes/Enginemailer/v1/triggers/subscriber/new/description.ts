/* eslint-disable n8n-nodes-base/node-param-type-options-max-value-present */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
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
				name: 'All',
				value: 'All',
			},
			{
				name: 'API',
				value: 'API',
			},
			{
				name: 'Form',
				value: 'Form',
			},
			{
				name: 'Import',
				value: 'Import',
			},
			{
				name: 'LandingPage',
				value: 'LandingPage',
			},
			{
				name: 'Manual',
				value: 'Manual',
			},
			{
				name: 'Popup',
				value: 'Popup',
			},
			{
				name: 'WhatsApp',
				value: 'WhatsApp',
			},
		],
		default: 'All',
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
		description: 'Set the maximum number of records returned in the API response (up to 50)',
		default: 50,
		placeholder: '1',
		typeOptions: {
			minValue: 1,
			maxValue: 50,
			numberPrecision: 0,
		},
	},
	{
		displayName: 'Form Name or ID',
		name: 'filter_form',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['Form'],
			},
		},
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
		default: 'All',
		typeOptions: {
			loadOptionsMethod: 'getListOfForms',
		},
	},
	{
		displayName: 'Landing Page Name or ID',
		name: 'filter_page',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['LandingPage'],
			},
		},
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
		default: 'All',
		typeOptions: {
			loadOptionsMethod: 'getListOfLandingPages',
		},
	},
	{
		displayName: 'Popups Name or ID',
		name: 'filter_popups',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['newSub'],
				source: ['Popup'],
			},
		},
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
		default: 'All',
		typeOptions: {
			loadOptionsMethod: 'getListOfPopups',
		},
	},
];
