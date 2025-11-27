import { Given, When, Then } from '@wdio/cucumber-framework';
import CompetitionPage from '../pageobjects/Competition_Page';
import testData from '../data/competitions.json';

// When('The user clicks on the skip and explore first', async () => {
//   await CompetitionPage.click_skip();
//   await CompetitionPage.click_explore_first_button();
//   await CompetitionPage.click_enable_location();
//   await CompetitionPage.select_device_location_permission();
// });

When('The user navigates to the competition tab', async () => {
  await CompetitionPage.click_competition_icon();
  await CompetitionPage.click_lets_go_button();
});

When('The user finds a general competition to enter', async () => {
  await CompetitionPage.find_competition_by_text(testData.generalCompetition.title);
});

Then('The user verifies that the draw time is not null', async () => {
  const { days, hours, mins, sec } = await CompetitionPage.get_draw_time_in_days();
  const times = [Number(days), Number(hours), Number(mins), Number(sec)];
  console.log("Draw time parts:", times);
  const anyNegative = times.some(value => value < 0);
  const allZero = times.every(value => value === 0);
  expect(anyNegative).toBe(false);
  expect(allZero).toBe(false);
});

Then('The user verifies that the entered competition count is not negative', async () => {
  const enteredCount = await CompetitionPage.get_entered_competition_count();
  expect(enteredCount).toBeGreaterThanOrEqual(0);
});

Then('The user verifies that the max winners count is not negative', async () => {
  const maxWinnersCount = await CompetitionPage.get_max_winners_count();
  expect(maxWinnersCount).toBeGreaterThanOrEqual(0);
});

Then('The user reads the competition details and Terms n Conditions text', async () => {
  await CompetitionPage.click_competition_info_icon();
  await CompetitionPage.get_competition_details_text();
  const TnC_text = await CompetitionPage.get_competition_TnC_text();
  expect(TnC_text).not.toBeNull();
});
