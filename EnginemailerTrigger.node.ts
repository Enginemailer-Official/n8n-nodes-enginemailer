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
		icon: 'file:EM_Logo_Square.svg',
		group: ['trigger'],
		version: 1,
		description: 'Trigger based on subscriber events through polling',
		defaults: {
			name: 'Enginemailer Trigger',
		},
		credentials: [
			{
				name: 'EnginemailerApiV1',
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

		const now = Date.now().toLocaleString();
		// const startDate = (staticData.lastTimeChecked as string) || Date.now().toLocaleString();
		// const endDate = now;

		const enginemailerTrigger = {
			resourceTrigger,
			operationTrigger,
		} as EnginemailerTriggerType;

		switch (resourceTrigger) {
			case 'subscriberTrigger':
				responseData = await subscriber[enginemailerTrigger.operationTrigger].execution.call(this);
		}

		if (!staticData.lastTimeChecked) {
			staticData.lastTimeChecked = {};
		}
		if (!staticData.lastTimeChecked[resourceTrigger as string]) {
			staticData.lastTimeChecked[resourceTrigger as string] = {};
		}

		staticData.lastTimeChecked[resourceTrigger as string][operationTrigger as string] = now;

		return [this.helpers.returnJsonArray(responseData)]; //TODO continue
	}
}
