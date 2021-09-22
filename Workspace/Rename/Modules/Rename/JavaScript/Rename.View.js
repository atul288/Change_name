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
