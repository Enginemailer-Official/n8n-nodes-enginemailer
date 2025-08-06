import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IPollFunctions,
	NodeConnectionType,
} from 'n8n-workflow';

import * as subscriber from './v1/triggers/subscriber';
import { loadOptions } from './v1/methods';
import {
	EnginemailerTrigger as EnginemailerTriggerType,
	INodeStaticData,
} from './v1/triggers/interfaces';

export class EnginemailerTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Enginemailer Trigger',
		name: 'enginemailerTrigger',
		icon: 'file:../../EM_Logo_Square.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{ $parameter["operationTrigger"] + ": " + $parameter["resourceTrigger"] }}',
		description: 'Trigger based on subscriber events through polling',
		defaults: {
			name: 'Enginemailer Trigger',
		},
		credentials: [
			{
				name: 'enginemailerV1Api',
				required: true,
			},
		],
		polling: true,
		inputs: [],
		outputs: [NodeConnectionType.Main],
		properties: [
			{
				displayName: 'Resource',
				name: 'resourceTrigger',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Subscriber',
						value: 'subscriberTrigger',
					},
				],
				default: 'subscriberTrigger',
			},
			...subscriber.description,
		],
	};

	methods = { loadOptions };

	async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
		let responseData: IDataObject | IDataObject[] = [];
		const staticData = this.getWorkflowStaticData('node') as INodeStaticData;

		const resourceTrigger = this.getNodeParameter('resourceTrigger');
		const operationTrigger = this.getNodeParameter('operationTrigger');

		const now = new Date();

		// convert Epoch time to yyyy-MM-dd HH:mm:ss
		const pad = (n: number) => n.toString().padStart(2, '0');
		const formatted =
			`${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())} ` +
			`${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}`;

		const lastPollingDateTime =
			staticData?.lastTimeChecked?.[resourceTrigger as string][operationTrigger as string] ||
			formatted;

		const qs = { lastpollingdate: lastPollingDateTime };

		const enginemailerTrigger = {
			resourceTrigger,
			operationTrigger,
		} as EnginemailerTriggerType;

		switch (resourceTrigger) {
			case 'subscriberTrigger':
				responseData = await subscriber[enginemailerTrigger.operationTrigger].execution.call(
					this,
					qs,
				);
		}

		if (!staticData.lastTimeChecked) {
			staticData.lastTimeChecked = {};
		}
		if (!staticData.lastTimeChecked[resourceTrigger as string]) {
			staticData.lastTimeChecked[resourceTrigger as string] = {};
		}

		staticData.lastTimeChecked[resourceTrigger as string][operationTrigger as string] = formatted;

		return [this.helpers.returnJsonArray(responseData)];
	}
}

// import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';
// import { EnginemailerTriggerV1 } from './v1/EnginemailerTriggerV1.node';

// export class EnginemailerTrigger extends VersionedNodeType {
// 	constructor() {
// 		const baseDescription: INodeTypeBaseDescription = {
// 			displayName: 'Enginemailer Trigger',
// 			name: 'enginemailerTrigger',
// 			icon: 'file:EM_Logo_Square.svg',
// 			group: ['trigger'],
// 			description: 'Trigger based on subscriber events through polling',
// 			defaultVersion: 1,
// 		};

// 		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
// 			1: new EnginemailerTriggerV1(baseDescription),
// 		};

// 		super(nodeVersions, baseDescription);
// 	}
// }
