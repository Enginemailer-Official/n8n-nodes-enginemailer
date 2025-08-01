import { IDataObject, INodeExecutionData, IPollFunctions } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function subscriberTriggeredAutoresponder(
	this: IPollFunctions,
	preQS: IDataObject,
): Promise<INodeExecutionData[]> {
	const body = {} as IDataObject;
	const qs = { ...preQS } as IDataObject;
	const requestMethod = 'GET';
	const endpoint = '/subscriberautorespondertriggered';

	const limit = this.getNodeParameter('limit');
	const filter_autoresponder = this.getNodeParameter('filter_autoresponder');

	qs.limit = limit;
	qs.filter_autoresponder = filter_autoresponder;

	const responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
