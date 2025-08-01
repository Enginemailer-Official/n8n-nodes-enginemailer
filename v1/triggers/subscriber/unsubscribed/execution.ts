import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

// TODO test the function
export async function subscriberUnsubscribed(
	this: IPollFunctions,
	preQS: IDataObject,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = { ...preQS } as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/unsubscribe';

	const limit = this.getNodeParameter('limit');
	const filter = this.getNodeParameter('filter');
	const filter_autoresponder = this.getNodeParameter('filter_autoresponder', null);
	const filter_campaign = this.getNodeParameter('filter_campaign', null);

	qs.limit = limit;
	qs.filter = filter;
	if (filter_autoresponder) {
		qs.filter_autoresponder = filter_autoresponder;
	}
	if (filter_campaign) {
		qs.filter_campaign = filter_campaign;
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
