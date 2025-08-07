/* eslint-disable n8n-nodes-base/node-param-type-options-max-value-present */
/* eslint-disable n8n-nodes-base/node-param-description-wrong-for-limit */
import { TriggerSubscriberProperties } from '../../interfaces';

export const subscriberFieldsUpdatedDescription: TriggerSubscriberProperties = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
				operationTrigger: ['fieldsUpdated'],
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
];
