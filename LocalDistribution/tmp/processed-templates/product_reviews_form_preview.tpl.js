define('product_reviews_form_preview.tpl', ['Handlebars','Handlebars.CompilerNameLookup','facets_item_cell_list.tpl'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"product-reviews-form-preview\">\n    <h1>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n\n    <div class=\"product-reviews-form-preview-divider-desktop\"></div>\n    <div class=\"product-reviews-form-preview-divider\"></div>\n\n    <div class=\"product-reviews-form-preview-item-cell\">\n        <div data-view=\"Facets.ItemCell\" data-template=\"facets_item_cell_list\"></div>\n    </div>\n    \n    <div class=\"product-reviews-form-preview-content\">\n        <form>\n        	<div class=\"product-reviews-form-preview-main\">\n        		<div data-view=\"ProductReviews.Preview\"></div>\n        	</div>\n            <div class=\"product-reviews-form-preview-actions\">\n        		<button type=\"button\" class=\"product-reviews-form-preview-actions-button-submit\" data-action=\"save\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Submit Review",{"name":"translate","hash":{},"data":data}))
    + "</button>\n        		<button type=\"button\" class=\"product-reviews-form-preview-actions-button-edit\" data-action=\"edit\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Edit Review",{"name":"translate","hash":{},"data":data}))
    + "</button>\n        	</div>\n        </form>\n    </div>\n</div>\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/J_J/JJ_Base_Theme/3.0.1/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_reviews_form_preview'; return template;});