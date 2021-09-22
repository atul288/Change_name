
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.Rename.Rename.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.Rename.Rename.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}