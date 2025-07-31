import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function subscriberFieldsUpdated(this: IPollFunctions): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/subscribersmodified';

	const limit = this.getNodeParameter('limit');

	qs.limit = limit;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
