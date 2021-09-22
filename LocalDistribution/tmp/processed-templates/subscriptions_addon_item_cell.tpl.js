define('subscriptions_addon_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-item-cell-view-span3\" data-type=\"item\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data}) : helper)))
    + "\">\n	<meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemurl") || (depth0 != null ? compilerNameLookup(depth0,"itemurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemurl","hash":{},"data":data}) : helper)))
    + "\"/>\n	<div class=\"subscriptions-addon-item-cell-grid-image-wrapper\">\n		<a class=\"subscriptions-addon-item-cell-grid-link-image\" data-action=\"add\">\n			<img class=\"subscriptions-addon-item-cell-grid-image\" src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage") || (depth0 && compilerNameLookup(depth0,"resizeImage")) || alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"image") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" itemprop=\"image\"/>\n		</a>\n	</div>\n	<div class=\"subscriptions-addon-item-cell-grid-details\">\n		<div class=\"subscriptions-addon-item-cell-grid-title\">\n            <a class=\"subscriptions-addon-item-cell-grid-title-link\" href=\"\" data-action=\"add\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n		</div>\n		<div class=\"subscriptions-addon-item-cell-grid-price\">\n            <span data-view='Pricing.View'></span>\n		</div>\n        <div class=\"subscriptions-addon-item-cell-grid-status-wrapper\">\n            <span data-view=\"Status.View\"></span>\n        </div>\n        <div class=\"subscriptions-addon-item-cell-grid-description-wrapper\">\n            <span class=\"subscriptions-addon-item-cell-grid-description status-description\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"briefDescription") || (depth0 != null ? compilerNameLookup(depth0,"briefDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"briefDescription","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n	</div>\n</div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_item_cell'; return template;});