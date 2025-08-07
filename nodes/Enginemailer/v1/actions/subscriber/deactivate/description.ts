import { SubscriberProperties } from '../../interfaces';

export const subscriberDeactivateDescription: SubscriberProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['deactivate'],
			},
		},
		default: '',
		description: 'Email of the subscriber',
	},
];
