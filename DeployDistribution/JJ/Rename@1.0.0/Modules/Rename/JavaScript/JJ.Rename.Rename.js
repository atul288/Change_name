
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
		}
	}
});
