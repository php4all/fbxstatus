this["fbxstatus"] = this["fbxstatus"] || {};
this["fbxstatus"]["templates"] = this["fbxstatus"]["templates"] || {};
this["fbxstatus"]["templates"]["status"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Freebox V5 Status</h1>\n<div>\n"
    + ((stack1 = container.invokePartial(partials.general,depth0,{"name":"general","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.telephone,depth0,{"name":"telephone","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.adsl,depth0,{"name":"adsl","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.log,depth0,{"name":"log","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.reseau,depth0,{"name":"reseau","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
this["fbxstatus"]["templates"]["adsl"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">\n	Adsl\n	</div>\n	<div class=\"panel-body\">\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Etat</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.etat : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Protocole</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.protocole : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Mode</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.mode : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\"></div>\n			<div class=\"col-xs-3 value\">Descendant</div>\n			<div class=\"col-xs-3 value\">Montant</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Débit ATM</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.debit : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " kb/s</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.debit : stack1)) != null ? stack1.montant : stack1), depth0))
    + " kb/s</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Marge</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.marge : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " dB</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.marge : stack1)) != null ? stack1.montant : stack1), depth0))
    + " dB</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Atténuation</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.attenuation : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " dB</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.attenuation : stack1)) != null ? stack1.montant : stack1), depth0))
    + " dB</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">FEC</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.fec : stack1)) != null ? stack1.descendant : stack1), depth0))
    + "</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.fec : stack1)) != null ? stack1.montant : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">CRC</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.crc : stack1)) != null ? stack1.descendant : stack1), depth0))
    + "</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.crc : stack1)) != null ? stack1.montant : stack1), depth0))
    + "</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
this["fbxstatus"]["templates"]["general"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">\n	Informations générales\n	</div>\n	<div class=\"panel-body\">\n		\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Model</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.general : depth0)) != null ? stack1.model : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Version</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.general : depth0)) != null ? stack1.version : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Utilisateur</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.general : depth0)) != null ? stack1.utilisateur : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Mode</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.general : depth0)) != null ? stack1.mode : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Uptine</div>\n			<div class=\"col-xs-6 value\">"
    + alias2((helpers.uptime || (depth0 && depth0.uptime) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.general : depth0)) != null ? stack1.uptime : stack1),{"name":"uptime","hash":{},"data":data}))
    + "</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
this["fbxstatus"]["templates"]["log"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "		<div class=\"row\">\n			<div class=\"col-xs-4\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.date : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"col-xs-4\">"
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.debit : depth0)) != null ? stack1.montant : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.debit : depth0)) != null ? stack1.descendant : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.date : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.time : stack1), depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				"
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"date","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"col-xs-2\">\n			"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.debit : depth0)) != null ? stack1.montant : stack1), depth0))
    + " kb/s\n			</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.debit : depth0)) != null ? stack1.descendant : stack1), depth0))
    + " kb/s\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">\n	Log\n	</div>\n	<div class=\"panel-body\">\n		<div class=\"row\">\n			<div class=\"col-xs-4\">Date</div>			\n			<div class=\"col-xs-4\">Status</div>\n\n			<div class=\"col-xs-2\">Descendant</div>\n			<div class=\"col-xs-2\">Montant</div>\n		</div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.adsl : depth0)) != null ? stack1.log : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true});
this["fbxstatus"]["templates"]["reseau"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">Réseau</div>\n	<div class=\"panel-body\">\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Adresse MAC</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1.mac : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Adresse IPv4</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1.ipv4 : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Adresse IPv6</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1.ipv6 : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Mode router</div>\n			<div class=\"col-xs-6 value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1.router : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 value\"></div>\n			<div class=\"col-xs-3 value\">Débit entrant</div>\n			<div class=\"col-xs-3 value\">Débit sortant</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">WAN</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1.wan : stack1)) != null ? stack1.montant : stack1), depth0))
    + " ko/s</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1.wan : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " ko/s</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Ethernet</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1.ethernet : stack1)) != null ? stack1.montant : stack1), depth0))
    + " ko/s</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1.ethernet : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " ko/s</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">usb</div>\n			<div class=\"col-xs-3 value\"></div>\n			<div class=\"col-xs-3 value\"></div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Switch</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1["switch"] : stack1)) != null ? stack1.montant : stack1), depth0))
    + " ko/s</div>\n			<div class=\"col-xs-3 value\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.reseau : depth0)) != null ? stack1["interface"] : stack1)) != null ? stack1["switch"] : stack1)) != null ? stack1.descendant : stack1), depth0))
    + " ko/s</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
this["fbxstatus"]["templates"]["telephone"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"panel panel-default\">\n	<div class=\"panel-heading\">\n	Téléphone\n	</div>\n	<div class=\"panel-body\">\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Combiné</div>\n			<div class=\"col-xs-6 legend\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.telephone : depth0)) != null ? stack1.combine : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Sonnerie</div>\n			<div class=\"col-xs-6 legend\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.telephone : depth0)) != null ? stack1.sonnerie : stack1), depth0))
    + "</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-6 legend\">Etat</div>\n			<div class=\"col-xs-6 legend\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.telephone : depth0)) != null ? stack1.etat : stack1), depth0))
    + "</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});