salsa_dynamic_ask_code
======================

<strong>Salsa Dynamic Ask String Donation Form Setup</strong>

There are two parts of the code that are needed to successfully build a dynamic ask string form. The SalsaScript section and the javascript section.

Copy the salsaScript section into your template. I highly recommend placing it right after the <head> tag in your template.

Copy the javascript section and place it right before the </body> tag. If you don't have the jQuery library in your template. Please include it. You can use the link below to include jQuery in your template.

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
```

Set the multipliers for your ask strings. In the javascript section of the template. The default multiplies are:

```
var multipliers = [1,1.42,2.14,2.85,7.14,28.57,71.42]; 
```

Set amount div ids to target

```
var amt_id = ['amt35', 'amt50', 'amt75', 'amt100', 'amt250', 'amt1000', 'amt2500'];
```

Set amount. Do not edit this. Leave as is.

```
var amount = <?= mostRecentDonation == null ? 'null' : mostRecentDonation.toJSON() ?>;
```

Set the default amount as a failsafe.

```
var default_amount = 35.00;
```

That's it!

<strong>Salsa Dynamic Ask String Donation Form Email Usage</strong>

To create a dynamic ask string link in an email, simply create a hyperlink and merge in the supporter's key.

```
<a href="https://sandbox.salsalabs.com/o/17797/p/salsa/donation/common/public/?donate_page_KEY=7150&key=[[supporter_key]]">Click here to make a donation to my team.</a>
```

