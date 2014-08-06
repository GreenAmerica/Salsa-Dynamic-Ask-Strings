<?
// This gets passed to Javascript, and will contain null or an object.
// Paste in the <head></head> section of your template.
var mostRecentDonation = null;
// The supporter key is passed via &key=NUMBER in the URL.
//
var supporterKey = Request.getParameter('key');
if (supporterKey != null) {
	//select * from donation where supporter_KEY=NUMBER order by donation_KEY desc limit 1.
	//
	donations = DB.getObjects('donation', {
		conditions: [ new Condition('supporter_KEY', '=', supporterKey)],
		orderBy: [ '-donation_KEY'],
		limit: 1
	});
	// If there was a donation...
	//
	if (donations != null && donations.length == 1) {
		mostRecentDonation = {};
		// Select the fields that we really need since this will be in 
		// a script tag in the open.
		//
		var fields = 'amount'.split(', ');
		for (var i in fields) {
			mostRecentDonation = donations[0][fields[i]];
		}
	}
}
?>
