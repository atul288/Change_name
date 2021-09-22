var extensions = {};

extensions['JJ.Rename.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/JJ/Rename/1.0.0/' + asset;
}

// @module JJ.Rename.Rename
define('MenuTree.View'
,	[
		'Profile.EmailPreferences.View',
	     'Utils',
	     'profile_emailpreferences.tpl'
	,	 'JJ.Rename.Rename.SS2Model'
	,	 'Backbone'
    ]
, function (
		ProfileEmailPreferencesView,
		MenuTreeView,
		Utils,
		profile_emailpreferences_tpl
	,	RenameSS2Model
	,	Backbone
)
{
    'use strict';

	// @class JJ.Rename.Rename.View @extends Backbone.View
	return PageTypeBaseView.PageTypeBaseView.extend({

		template: profile_emailpreferences_tpl,
		title: Utils.translate('Hello')

	,	initialize: function (options) {

		}
	  , events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JJ.Rename.Rename.View.Context
	,	getContext: function getContext()
		{
			//@class JJ.Rename.Rename.View.Context
			return {
				isNew: this.model.isNew()
			};
		}
	});
});


// Model.js
// -----------------------
// @module Case
define("JJ.Rename.Rename.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/Rename.Service.ss"
            )
        )
        
});
});


// Model.js
// -----------------------
// @module Case
define("JJ.Rename.Rename.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/Rename/SuiteScript2/Rename.Service.ss"
            ),
            true
        )
});
});



define(
	'JJ.Rename.Rename'
,   [
	'Profile.EmailPreferences.View',
	'Utils',
	'MenuTree.View',
	  'Header.Menu.MyAccount.View',
	]
,   function (
		ProfileEmailPreferencesView,
	   Utils,
		MenuTreeView,
		HeaderMenuMyAccountView,
	)
{
	'use strict';

	return {
		mountToApp: function mountToApp(application) {
			_.extend(MenuTreeView.prototype,{
				getContext: _.wrap(MenuTreeView.prototype.getContext, function (fn){
					var changeName = fn.apply(this, _.toArray(arguments).slice(1));
					var array = changeName.menuItems;

					_.each(changeName.menuItems, function (second){
						_.each(second.children, function (children){
							if(children.name == "Email Preferences"){
								children.name = "Subscriptions"
							}
						});
					});
					return changeName;
				})
			});

			_.extend(ProfileEmailPreferencesView.prototype,{
				title: Utils.translate('Subscriptions')
			})

			_.extend(HeaderMenuMyAccountView.prototype, {
				getContext: _.wrap(HeaderMenuMyAccountView.prototype.getContext, function (fn){
					var helloWorld = fn.apply(this, _.toArray(arguments).slice(1));
					_.each(helloWorld.entries, function (first){
						_.each(first.children, function (children){
							if(children.name == "Email Preferences"){
								children.name = "Subscriptions"
							}
						});
					});
					return helloWorld;
				})
			});
			const pageType = application.getComponent('PageType');
			_.extend.registerPageType({
				name: 'EmailPreferences',
				routes: ['subscriptions'],
				view: ProfileEmailPreferencesView,
				defaultTemplate: {
					name: 'profile_emailpreferences.tpl',
					displayName: 'Profile email preferences default',
				}
			});
		}
	}
});


};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["MenuTree.View","JJ.Rename.Rename.Model","JJ.Rename.Rename.SS2Model"];
try{
	extensions['JJ.Rename.1.0.0']();
	SC.addExtensionModule('JJ.Rename.Rename');
}
catch(error)
{
	console.error(error);
}

