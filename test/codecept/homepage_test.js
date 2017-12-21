
Feature('html');

Scenario('homepage loads', (I) => {
    I.amOnPage("/");
    I.see("Spoken,");
});
