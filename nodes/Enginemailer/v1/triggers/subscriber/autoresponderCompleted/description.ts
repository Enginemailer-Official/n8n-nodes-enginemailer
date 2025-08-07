/* eslint-disable n8n-nodes-base/node-param-type-options-max-value-present */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberCompletedAutoresponderDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['autoresponderCompleted'],
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
		displayName: 'Autoresponder Name or ID',
		name: 'filter_autoresponder',
		type: 'options',
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['autoresponderCompleted'],
			},
		},
		description:
			'Filter by autoresponder. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
		default: 'All',
		typeOptions: {
			loadOptionsMethod: 'getListOfAutoresponders',
		},
	},
];
