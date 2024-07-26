# Epoch Week Calendar

The Epoch Week Calendar counts weeks from January 1st, 1970, similar to epoch time but week number instead.

<br/>

```javascript
function ew(date = new Date()) {
  return Math.floor(Math.floor(date / (60 * 60 * 24 * 1000) + 3) / 7);
}
```

The Gregorian calendar, used in most parts of the world today, is based on a solar calendar, which means it's designed to align with the solar year. This alignment is crucial for consistent seasonal marking, which directly affects agriculture. However, the Gregorian calendar is not without its shortcomings in modern life, especially, inconsistency of months can complicate budgeting, planning, and reporting for businesses and organizations. This irregularity often leads many to rely on week-based calculations instead, which provide a more uniform measure of time for project timelines, payroll, and Scrum sprints, retrospective cycles.

### Some Usage Ideas :spiral_calendar:

- **Sprint Planning**: Conduct Sprint planning sessions every week that is divisible by 2, facilitating a consistent two-week Sprint cycle across multiple projects.
- **Project Milestones**: Set major project reviews every 10 weeks, allowing teams to plan ahead with a predictable schedule that aligns across multiple years.
- **Scrum of Scrums**: Arrange Scrum of Scrums meetings every week divisible by 4, providing a regular platform for different Scrum teams to synchronize their efforts in larger projects.
- **Team Building Activities**: Schedule team-building activities every week divisible by 4 to enhance team cohesion and boost morale, ensuring these events occur regularly within a predictable and consistent framework.

---

- **Fitness Goals**: Schedule gym sessions every week divisible by 2 for a more relaxed bi-weekly fitness routine.
- **Health Check-ups**: Schedule regular health check-ups every 25 weeks to stay on top of health concerns with a bi-annual regularity.

---

- :tada: **Epochalooza**: Throw an "Epochalooza" bash every 50 weeks to mark the semi-centennial week. Dress up as your favorite historical figure from the past 50 weeks (could be a meme, a movie character that trended, or a viral TikTok star). Share a time capsule video of the most hilarious moments since the last Epochalooza, enjoy epoch-themed snacks like "Clock Cookies" and "Time Warp Tacos," and dance the night away with a countdown to the next 50-week milestone. It's not just another year passing; it's an epoch-making celebration of the quirks of time! (That was ChatGPT's idea)
