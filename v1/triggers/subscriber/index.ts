import { INodeProperties } from 'n8n-workflow';

import * as newSub from './new';

export { newSub };

export const description: INodeProperties[] = [
	{
		displayName: 'Event',
		name: 'operationTrigger',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resourceTrigger: ['subscriberTrigger'],
			},
		},
		options: [
			{
				name: 'New Subscriber',
				value: 'newSub',
				description: 'Triggers when a new subscriber is created.',
				action: 'Triggers when a new subscriber is created.',
			},
		],
		default: 'newSub', //TODO change
	},
	...newSub.description,
];
