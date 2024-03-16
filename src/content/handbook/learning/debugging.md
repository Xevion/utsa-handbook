---
title: 'Debugging'
description: 'A general guide to debugging - a fancy word for problem solving'
pubDate: '2024-03-16'
authors: ['xevion']
---

> This file is a placeholder for future content. See [here](/contributing) for details on how to help out.

- Julia Evan's Debugging Zine
- Rubber Duck Debugging
    - A form of debugging where you articule and explain the problem to an inanimate object
        - Can also be a person, but the point is to explain the problem rather than it is for them to 'understand'
        - If you do use a person, be sure to inform them of the purpose, and be nice to them (don't exhaust them)
    - Trying to simplify the problem can often generate new perspectives
    - The anxiety of trying to condense the complex situation can force many into evaluating their issues comprehensively
- Write a comprehensive report before asking for help
    - Effectively the same as *Rubber Duck Debugging*
    - More often than not, a comprehensive report will make you explore the problem more, allowing you to figure it out
    - If not, it will help others help you faster, lowering the time it takes to solve the problem
    - Version, OS, Environment, Logs, Steps to reproduce, Expected behavior, Actual behavior, etc.
        - This may seem like a lot, but an in-depth exploration is a good test of your understanding of the problem
        - It has worked for me dozens of times, even if frustrating
- Simplify the problem as much as possible
    - If it's an error occurring on a specific line, strip away everything else until you're left with just the things that directly interact or keep it happening
    - Even if it doesn't reveal the problem, it can help you understand the core components and narrow down the problem
- Turn it off and on again
    - While time consuming, a re-install, reboot, cache clear or reset can fix the problem
    - Attempt from multiple computers, including one that has never seen it before
        - Include this detail in your report if you post online
- Questions to ask yourself
- Don't ask to ask, just ask
- You're not the only one - search often
    - Become skilled at googling, researching and reading documentation
- StackOverflow has a high skill floor and has become quite elitist
    - If you're posting on there, 50/50 chance you won't get an answer or will be downvoted/closed
    - If you're posting something they can answer, it's probably been answered before, multiple times
    - If you're posting something 'new', it's probably not a question they can answer
        - Funny enough, you'll still get downvoted/closed
- Try to look for communities around the technology
- Don't directly email or message someone unless you're extremely confident they're the only one who can help
    - e.g. they produced the software and don't have any public forums
    - e.g. they created a discussion on the same bug but did not post the solution publicly