
Feature('html');

Scenario("player page loads", I => {
  I.amOnPage("/players");
  I.see("Spoken,");
});
