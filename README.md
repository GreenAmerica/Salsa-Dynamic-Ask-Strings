salsa_dynamic_ask_code
======================

<strong>Edit the dynamic_ask.js configuration section first!</strong>

1. Please make sure you change the configuration options in dynamic_ask.js before using this script.

First, set the multipliers for your ask strings.

Second, change the divs to match the id's of the salsa amount divs.

Third, set a default amount as a fialsafe.

Last, set the parameter you want to grab from your url to create the ask string.

<strong>Salsa Dynamic Ask String Donation Form Email Usage</strong>

Please follow these steps in order to implement the dynamic ask string embed code in emails.

Copy and paste the code below exactly where you want the dynamic ask amounts to appear in your email
Example: Can you please make a gift of

<code>
<? var mrc=null; 

try { 
mrc=Supporter.get('most_recent_gift'); } 
catch(e){ 
mrc=50; 
} 

var amt1 = Math.round(mrc * 0.5); 
var amt2 = Math.round(mrc * 1); 
var amt3 = Math.round(mrc * 1.5); 
var amt4 = Math.round(mrc * 2); 
var amt5 = Math.round(mrc * 2.5); 
var amt6 = Math.round(mrc * 3); 
?>

<?='$'+amt1+', $'+amt2+', $'+amt3?> 

</code>

Example: Can you please make a gift of

<code>
<a href=” https://salsa.wiredforchange.com/o/5994/p/salsa/donation/common/public/?donate_page_KEY=[[donate_page_key]]&hpc=[[most_recent_gift]]"

<?

var mrc=null; 
try { 
mrc=Supporter.get('most_recent_gift'); 
} catch(e){ 
mrc=50; 
}

var amt1 = Math.round(mrc * 0.5); 
var amt2 = Math.round(mrc * 1); 
var amt3 = Math.round(mrc * 1.5); 
var amt4 = Math.round(mrc * 2); 
var amt5 = Math.round(mrc * 2.5); 
var amt6 = Math.round(mrc * 3);

?> <?='$'+amt1+', $'+amt2+', $'+amt3?>

</code>

This will make your dynamic ask string a hyperlink.
