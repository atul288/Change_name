
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJRename.Rename.Rename.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJRename.Rename.Rename.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}