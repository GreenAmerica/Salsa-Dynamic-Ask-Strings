salsa_dynamic_ask_code
======================

Salsa Dynamic Ask String Donation Form Email Usage

1. Please make sure you change the configuration options in dyanmic_ask.js before using this script.

First, set the multipliers for your ask strings.

Second, change the divs to match the id's of the salsa amount divs.

Third, set a default amount as a fialsafe.

Last, set the parameter you want to grab from your url to create the ask string.

Salsa Dynamic Ask String Donation Form Email Usage

Please follow these steps in order to implement the dynamic ask string embed code in emails.

Copy and paste the code below exactly where you want the dynamic ask amounts to appear in your email
Example: Can you please make a gift of

<? var mrc=null; try { mrc=Supporter.get('most_recent_gift'); } catch(e){ mrc=50; } var amt1 = Math.round(mrc * 0.5); var amt2 = Math.round(mrc * 1); var amt3 = Math.round(mrc * 1.5); var amt4 = Math.round(mrc * 2); var amt5 = Math.round(mrc * 2.5); var amt6 = Math.round(mrc * 3); ?>

<?='$'+amt1+', $'+amt2+', $'+amt3?> or any other amount that you can afford?

Once you have copied the SalsaScript, continue with your sentence or email as you normally would.
Make a copy of donation form with KEY 8960. This is also known as “Dynamic Ask String Form Template”. (You can change the form header but nothing else).
Make sure you copy the link for the form you create. You will need it later.
Example: https://salsa.wiredforchange.com/o/5994/p/salsa/donation/common/public/?donate_page_KEY=8960

To make this hyperlink work with the dynamic ask string form please add “&hpc=[[most_recent_gift]]” at the end of the link above. Example: https://salsa.wiredforchange.com/o/5994/p/salsa/donation/common/public/?donate_page_KEY=8960&hpc=[[most_recent_gift]]

If you would like to hyperlink your dynamic ask string please do so like this.

Example: Can you please make a gift of

<a href=” https://salsa.wiredforchange.com/o/5994/p/salsa/donation/common/public/?donate_page_KEY=[[donate_page_key]]&hpc=[[most_recent_gift]]"<?

var mrc=null; try { mrc=Supporter.get('most_recent_gift'); } catch(e){ mrc=50; }

var amt1 = Math.round(mrc * 0.5); var amt2 = Math.round(mrc * 1); var amt3 = Math.round(mrc * 1.5); var amt4 = Math.round(mrc * 2); var amt5 = Math.round(mrc * 2.5); var amt6 = Math.round(mrc * 3);

?> <?='$'+amt1+', $'+amt2+', $'+amt3?>

This will make your dynamic ask string a hyperlink.

Do not edit the code in anyway.
Do not forget to add the variable “&hpc=[[most_recent_gift]]” at the end of your donation page link.
Send yourself a test blast to confirm it is working before sending out the email.
Give yourself a pat on the back.
