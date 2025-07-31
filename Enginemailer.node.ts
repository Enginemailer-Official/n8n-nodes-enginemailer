import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import * as subscriber from './v1/actions/subscriber';
import { BASE_URL } from './v1/transport';
import { loadOptions } from './v1/methods';

export class Enginemailer implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Enginemailer',
		name: 'enginemailer',
		icon: 'file:EM_Logo_Square.svg',
		group: ['output'],
		version: 1,
		description: 'Consume Enginemailer API',
		defaults: {
			name: 'Enginemailer',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'EnginemailerApiV1',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: BASE_URL,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Subscriber',
						value: 'subscriber',
					},
				],
				default: 'subscriber',
			},
			...subscriber.description,
		],
	};

	methods = { loadOptions };
}
