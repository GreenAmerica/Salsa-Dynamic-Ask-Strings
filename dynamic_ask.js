<script type="text/javascript">
       
//Configuration Options
//CDR Fundraising Group - http://www.cdrfg.com
//Paste right before the </body> tag

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
