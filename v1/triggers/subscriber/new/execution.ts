import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function newSubscriber(
	this: IPollFunctions,
	preQS: IDataObject,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = { ...preQS } as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/newsubscribers';

	const source = this.getNodeParameter('source');
	const limit = this.getNodeParameter('limit');
	const filter_form = this.getNodeParameter('filter_form', null);
	const filter_page = this.getNodeParameter('filter_page', null);
	const filter_popups = this.getNodeParameter('filter_popups', null);

	qs.source = source;
	qs.limit = limit;
	if (filter_form) {
		qs.filter_form = filter_form;
	}
	if (filter_page) {
		qs.filter_page = filter_page;
	}
	if (filter_popups) {
		qs.filter_popups = filter_popups;
	}

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
