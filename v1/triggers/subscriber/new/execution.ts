import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function newSubscriber(this: IPollFunctions): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/newsubscribers';

	const source = this.getNodeParameter('source');
	const limit = this.getNodeParameter('limit');

	// TODO continue extract params

	qs.source = source;
	qs.limit = limit;

	// TODO continue
	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
