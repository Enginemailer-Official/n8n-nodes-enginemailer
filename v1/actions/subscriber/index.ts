import { INodeProperties } from 'n8n-workflow';

import * as addOrUpdate from './addOrUpdate';
import * as deactivate from './deactivate';
import * as deleteSub from './delete';
import * as tag from './tag';
import * as untag from './untag';
import * as find from './find';
import * as sendEmail from './sendEmail';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
			},
		},
		options: [
			{
				name: 'Add or Update Subscriber',
				value: 'addOrUpdate',
				description: 'Create a new subscriber or update the subscriber if the data exists.',
				action: 'Create a new subscriber or update the subscriber if the data exists.',
				routing: addOrUpdate.routing,
			},
			{
				name: 'Deactivate Subscriber',
				value: 'deactivate',
				description: 'Set subscriber status to inactive',
				action: 'Set subscriber status to inactive',
				routing: deactivate.routing,
			},
			{
				name: 'Delete Subscriber',
				value: 'deleteSub',
				description: 'Permanently delete the subscriber',
				action: 'Permanently delete the subscriber',
				routing: deleteSub.routing,
			},
			{
				name: 'Tag Subscriber to a Subcategory',
				value: 'tag',
				description: 'Assign a subscriber to a specific subcategory',
				action: 'Assign a subscriber to a specific subcategory',
				routing: tag.routing,
			},
			{
				name: 'Untag Subscriber From Subcategory',
				value: 'untag',
				description: 'Remove a subscriber from a specific subcategory.',
				action: 'Remove a subscriber from a specific subcategory.',
				routing: untag.routing,
			},
			{
				name: 'Find Subscriber',
				value: 'find',
				description: 'Search for an existing subscriber in your account',
				action: 'Search for an existing subscriber in your account',
				routing: find.routing,
			},
			{
				name: 'Send Email',
				value: 'sendEmail',
				description: 'Sends an email to the specified email address.',
				action: 'Sends an email to the specified email address.',
				routing: sendEmail.routing,
			},
		],
		default: 'find', //TODO change
	},
	...addOrUpdate.description,
	...deactivate.description,
	...deleteSub.description,
	...tag.description,
	...untag.description,
	...find.description,
	...sendEmail.description,
];
