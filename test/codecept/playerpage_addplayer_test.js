
Feature('player page add player');

Scenario('player can be added', (I) => {
    I.fillField("Add Player Name...", "Miles");
    I.click("Add Player");
    I.see('Miles');
});
