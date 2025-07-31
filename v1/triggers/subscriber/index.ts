import { INodeProperties } from 'n8n-workflow';

import * as newSub from './new';
import * as unsubscribed from './unsubscribed';
import * as tagged from './tagged';
import * as deleted from './deleted';
import * as untagged from './untagged';
import * as fieldsUpdated from './fieldsUpdated';
import * as autoresponderTriggered from './autoresponderTriggered';
import * as autoresponderCompleted from './autoresponderCompleted';

export { newSub };
export { unsubscribed };
export { deleted };
export { tagged };
export { untagged };
export { fieldsUpdated };
export { autoresponderTriggered };
export { autoresponderCompleted };

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
			{
				name: 'Subscriber Unsubscribed',
				value: 'unsubscribed',
				description: 'Triggers when a subscriber unsubscribes.',
				action: 'Triggers when a subscriber unsubscribes.',
			},
			{
				name: 'Subscriber Tagged',
				value: 'tagged',
				description: 'Triggers when a subscriber is tagged with a subcategory.',
				action: 'Triggers when a subscriber is tagged with a subcategory.',
			},
			{
				name: 'Subscriber Deleted',
				value: 'deleted',
				description: 'Triggers when a subscriber is deleted.',
				action: 'Triggers when a subscriber is deleted.',
			},
			{
				name: 'Subscriber Untagged',
				value: 'untagged',
				description: 'Triggers when a subscriber is untagged from a subcategory.',
				action: 'Triggers when a subscriber is untagged from a subcategory.',
			},
			{
				name: 'Subscriber Fields Updated',
				value: 'fieldsUpdated',
				description: "Triggers when a subscriber's fields have been updated.",
				action: "Triggers when a subscriber's fields have been updated.",
			},
			{
				name: 'Subscriber Triggered Autoresponder',
				value: 'autoresponderTriggered',
				description: 'Triggers when a subscriber receives the first email in an autoresponder.',
				action: 'Triggers when a subscriber receives the first email in an autoresponder.',
			},
			{
				name: 'Subscriber Completed Autoresponder',
				value: 'autoresponderCompleted',
				description: 'Triggers when a subscriber receives the last email in an autoresponder.',
				action: 'Triggers when a subscriber receives the last email in an autoresponder.',
			},
		],
		default: 'newSub', //TODO change
	},
	...newSub.description,
	...unsubscribed.description,
	...tagged.description,
	...deleted.description,
	...untagged.description,
	...fieldsUpdated.description,
	...autoresponderTriggered.description,
	...autoresponderCompleted.description,
];
