import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

// TODO test the function
export async function subscriberDeleted(
	this: IPollFunctions,
	preQS: IDataObject,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = { ...preQS } as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/subscribersdeleted';

	const limit = this.getNodeParameter('limit');

	qs.limit = limit;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
