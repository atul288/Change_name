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
