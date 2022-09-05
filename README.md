# Web Scale SponsorBlock Server
Joke Fork of [ajayyy/SponsorBlockServer](https://github.com/ajayyy/SponsorBlockServer)
- Now backed by Web Scale MangoDB (thanks [@grub](https://github.com/grublets) for the native nc port)
- Now with no more annoying fillers or rules

API Endpoints
```
GET /api/skipSegments
  Returns segments to skip
  Actually 404's

POST /api/skipSegments
  Add segments to skip
  90% chance to 502 (gateway timeout) after 5 seconds, 10% chance to 409 (duplicate)

GET /api/status
  Returns server status
  responds with "All systems operational"

GET /
  Redirects to this README

POST *
  returns with 200 (success) after 5 seconds

GET *
  returns with 404 (not found)
```