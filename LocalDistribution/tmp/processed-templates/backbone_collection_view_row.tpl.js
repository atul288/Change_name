define('backbone_collection_view_row.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"backbone-collection-view-row\">\n	<div data-type=\"backbone.collection.view.cells\"></div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'backbone_collection_view_row'; return template;});