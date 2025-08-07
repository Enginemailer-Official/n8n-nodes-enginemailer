import { SubscriberProperties } from '../../interfaces';

export const subscriberDeleteDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['deleteSub'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
];
