import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

// TODO test the function
export async function subscriberUntagged(this: IPollFunctions): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = {} as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/subscribersuntagged';

	const limit = this.getNodeParameter('limit');
	const filter_subcategory = this.getNodeParameter('filter_subcategory');

	qs.limit = limit;
	qs.filter_subcategory = filter_subcategory;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
