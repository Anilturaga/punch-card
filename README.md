# Punch card automation
[![Punch card automation](https://github.com/Anilturaga/punch-card/actions/workflows/punch-card-action.yml/badge.svg)](https://github.com/Anilturaga/punch-card/actions/workflows/punch-card-action.yml)


Logs into the portal twice a day to sign in and out respectively.
##Tech stack
1. Playwright - Browser automation
2. Github actions - Scheduling

## Using it 
Everything is already setup to run with zero configuration.
- Fork the repository
- Provide the URL of the portal, the username and password to login with in the forked repository's secrets panel
> [How to access secrets panel](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)
- Add three secrets with keys URL, USR and PASS 
![Secrets configuration](/assets/punch-card-secrets.jpeg)

## Configuration
1. You can choose the schedule times that the action will be triggered
> Keep in mind that Github chooses when to run the action and sometimes will be delayed upto 1 hour
2. By default, the actions are triggered at 3AM and 12PM UTC time
3. `cron: "0 3,12 * * 1,2,3,4,5`
4. Change the 3 and 12 above to your choice of schedule [here](https://github.com/Anilturaga/punch-card/blob/main/.github/workflows/punch-card-action.yml#L5)
## Local testing
- Clone the repository
	`git clone https://github.com/Anilturaga/punch-card.git`
- Install dependencies
	`npm ci`
- Install playwright browser(Chromium)
	`npx playwright install --with-deps chromium`
- Make changes to the playwright test file
	[punchCard.spec.js](https://github.com/Anilturaga/punch-card/blob/main/tests/punchCard.spec.js)
- Execute the test
	`npx playwright test --headed`

-------------

