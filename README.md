# utsa-handbook

[![Version Badge / Changelog Link][version-badge]][changelog] ![Built with Astro][astro-badge] ![Hosted with Vercel][vercel-badge]

A handbook for students at [The University of Texas at San Antonio][utsa], with a focus on Computer Science (or related fields).

## Contents

- Getting Hired
  - Best Local Companies
  - Various Paths to Success
    - Redefining Success
    - Experience != Expertise
  - How to Build Experience from Nothing
  - Resumes, Cover Letters, and Portfolios
  - Interviews and Technical Interviews
  - Internships and Co-ops
  - Full-time Positions
  - Salary Negotiation
  - Relocation
- Getting Involved
  - Clubs, Organizations, and Events
  - Projects and Open Source
  - Hackathons, Competitions, and Conferences
  - Volunteering and Community Service
  - Research and Internships
  - Networking and Socializing
- Class Registration
  - Professors to Avoid and When/Why
  - Courses to Take and When/Why
  - Limited Seat/High Demand/Rarely Offered Courses
- Commuting, Garage Parking, Passes
  - VIA Bus, VIA Link
  - Fiscal/Realistic Differences between Main Campus and Downtown
  - Ticketing, Towing and other Parking Issues
- Housing - Apartments, Neighborhoods, Roommates
  - Good/Bad Apartments
  - How to Sublease
  - Maximizing Situation
- Graduate School
  - Transferring In/Out
  - UTSA vs. Other Schools
  - GRE, GMAT, LSAT, MCAT, etc.
  - Applications, Essays, and Recommendations
  - Funding and Scholarships

## Contribute

The UTSA Handbook is intended to be a living document filled with perspectives, opinions and information gathered from numerous students, old and young, incoming and graduated.

If you have something to add, please consider contributing! The process is easier than you think, and is an easy way to participate in open source and contribute to the UTSA CS community.

## Setup

This setup guide is very simple and does not cover the full process of installation. Expansion will occur in the future.

```bash
git clone https://github.com/Xevion/utsa-handbook.git
pnpm install
pnpm dev
pnpm build
```

## Notes

- All content frontmatter obeys [this](https://github.com/withastro/astro/blob/main/packages/astro-rss/src/schema.ts) schema (for [@astrojs/rss](https://docs.astro.build/en/guides/rss/)).
- Document your changes in [CHANGELOG.md][changelog]. Not required for minor frontmatter changes, but recommended for all other changes.

### Disclaimer

This repository is completely unassociated with UTSA or the UTSA Computer Science department. All opinions and those of any contributors are their own and are not made in UTSA or UTSA CS's place.
All statements are a recommendation and I/we are not responsible for any actions (and their results) deriving from your usage of the materials contained within.

[version-badge]: https://img.shields.io/badge/dynamic/json.svg?uri=https://raw.githubusercontent.com/Xevion/utsa-handbook/master/package.json&query=$.version&label=Version&prefix=v&colorB=10ADED&style=flat-square
[astro-badge]: https://img.shields.io/badge/astro-%232C2052.svg?style=flat&logo=astro&logoColor=white
[vercel-badge]: https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white
[utsa]: https://utsa.edu
[changelog]: ./CHANGELOG.md
