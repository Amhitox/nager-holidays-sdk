# SDK generator notes — Nager.Date Community API v4

I chose the [Nager.Date Community API v4](https://nagerholidays.com/api) because it is public, needs no API key for a live check, and was absent from Voxgig's SDK catalogue when I checked. I used the Voxgig generator to create a TypeScript SDK. The MIT-licensed repo includes the generator model and the OpenAPI document used to build it.

## What I checked

- The generated TypeScript SDK builds. Its offline suite reports 229 passes, no failures, and 13 skips for features I did not select.
- A live call through `PublicHolidayV4Dto().list({ country_code: 'AT', year: 2026 })` returned 20 Austrian holidays; the first was New Year's Day on 2026-01-01. The runnable call is in `examples/live-holidays.cjs`.
- `voxgig-sdkgen doctor` reported no drift in the toolchain files.

## Developer experience

- The provider's OpenAPI document omits `servers`. The generator warned and made the base URL a required client setting. I added `https://nagerholidays.com` to the checked-in copy and regenerated. A warning that points directly to this fix would save time.
- In my Windows setup, the scaffold's automatic install stopped at `spawn npm ENOENT`, even though `npm.cmd` worked. Running the scaffold with `--no-install` and installing in `.sdk` with `npm.cmd` got past it.
- Model generation then failed to resolve relative includes such as `api/api-info.aontu`. Temporary directory junctions let generation finish; I removed them afterward. The generated TypeScript tests ran without that workaround. Windows setup guidance would help here.
- The generated holiday example supplies `country_code` but leaves out `year` for the annual route. It also exposes `PublicHolidayV4Dto` as the resource name. A shorter name and a complete annual example would make the SDK easier to start with. The runnable example in this repo includes both parameters.
- Generation also warned that the `IotHoliday` load flow has an unreachable step. I did not rely on that operation in the live check.

## Approach and scope

I used AI assistance while finding the spec and working through the generator setup. The result was checked with the generated offline tests and one live API call. I did not test every endpoint or publish the package to npm.
