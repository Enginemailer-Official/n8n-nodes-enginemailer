import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
	IPollFunctions,
	NodeConnectionType,
} from 'n8n-workflow';
import { loadOptions } from './methods';
import {
	EnginemailerTrigger as EnginemailerTriggerType,
	INodeStaticData,
} from './triggers/interfaces';
import * as subscriber from './triggers/subscriber';

export class EnginemailerTriggerV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
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
	}

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
