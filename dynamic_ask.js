// JavaScript Document

//Configuration Options
//CDR Fundraising Group - http://www.cdrfg.com

//1. Set multipliers
var multipliers = [1,1.4,2.1,2.9,7,29,71]; 

//2. Set amount div ids to target
var amt = ['amt35', 'amt50', 'amt75', 'amt100', 'amt250', 'amt1000', 'amt2500'];

//3. Set default amount
var default_amount = 25;

//4. Set URL Parameter
var urlParameter = 'hpc';

//End Configuration Options
//Do not touch anything below this line

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
}

function checkParemeterExists(parameter) {
    //Get Query String from url
    fullQString = window.location.search.substring(1);

    paramCount = 0;
    queryStringComplete = "?";

    if (fullQString.length > 0) {
        //Split Query String into separate parameters
        paramArray = fullQString.split("&");

        //Loop through params, check if parameter exists.  
        for (i = 0; i < paramArray.length; i++) {
            currentParameter = paramArray[i].split("=");
            if (currentParameter[0] == parameter) //Parameter already exists in current url
            {
                return true;
            }
        }
    }

    return false;
}

//grab hpc from url
if (checkParemeterExists(urlParameter) == false) {
    var amount = default_amount;
} else {
    var amount = getURLParameter(urlParameter);
}

//check if amount is 0 or empty
if ((amount == 0) || (amount === null)) {
	amount = default_amount;
}

//check if amount is not a numnber
if (isNaN(new Number(amount)) === true) {
	amount = default_amount;
}

//create ask strings dynamically
for (var i = 0; i < multipliers.length; i++) {
	//alert(amount);
	$('#'+amt[i]).val(Math.round(multipliers[i]*amount));
	$('label[for="'+amt[i]+'"]').text('$'+Math.round(multipliers[i]*amount));
}
