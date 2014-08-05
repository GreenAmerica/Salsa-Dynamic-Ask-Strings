// Begin SalsaScript
<?
// This gets passed to Javascript, and will contain null or an object.
//
var mostRecentDonation = null;
// The supporter key is passed via &key=NUMBER in the URL.
//
var supporterKey = Request.getParameter('key');
if (supporterKey != null) {
	//select * from donation where supporter_KEY=NUMBER order by donation_KEY desc limit 1.
	//
	donations = DB.getObjects('donation', {
		condition: [ new Condition('supporter_KEY', '=', supporterKey)],
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
//End SalsaScript

//Begin Dynamic Ask String Code
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
<script type="text/javascript">
       
//Configuration Options
//CDR Fundraising Group - http://www.cdrfg.com

//1. Set multipliers
var multipliers = [1,1.42,2.14,2.85,7.14,28.57,71.42]; 

//2. Set amount div ids to target
var amt_id = ['amt35', 'amt50', 'amt75', 'amt100', 'amt250', 'amt1000', 'amt2500'];

//3. Set amount
var amount = <?= mostRecentDonation == null ? 'null' : mostRecentDonation.toJSON() ?>;

//4. Set default amount
var default_amount = 35.00;


//End Configuration Options
//Do not touch anything below this line

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
	$('#'+amt_id[i]).val(Math.round(multipliers[i]*amount));
	$('label[for="'+amt_id[i]+'"]').text('$'+Math.round(multipliers[i]*amount));
}
		
</script>
//End Dynamic Ask String Code
