# GitHub Issue Lookup

We would like a simple web-based service to allow anyone to query the current state of an issue for any number of pre-defined repositories on GitHub. Anyone should be able to visit a website, enter an issue ID and be shown the current state of that issue. The purpose of this would allow users to see the state of issues without having full access to the repository on GitHub or needing to see the full history of the ticket.

For example, I could enter `KPLT-332` and it would return the details (name and status) of issue #332 from the repository associated with the `KPLT` prefix. 

This is not a design task so you don't need to worry about the actual styling of the website. 

## Notes

* For this task, you can work with public repositories without needing to authenticate but thought should be given to how this would work with private repositories.
* It should be possible configure a mapping of issue prefix to the actual repository it is associated with.
* At a minimum, the service should return the name of the issue as well as whether it is currently open or closed.
* You should use the GitHub REST API (https://docs.github.com/en/rest). To allow you to demonstrate working with HTTP APIs directly, we would prefer that you didn't use a pre-existing GitHub API client (such as Octokit) unless it is one you have written yourself.
* The language you should use for this task will have already been discussed with you.
* Use Git for version control.
* Include what you think is an appropriate level of testing (spoiler: no tests isn't an appropriate level)
* A README should be included with instructions about how to run the application and any tests. This can also include details behind any thought processes or additional features you might include with an unlimited time buget. 
* We recommend using a linting tool to ensure that your code is formatted consistently. You can apply whatever custom rules you feel appropriate.

## Submission

The preferred way to submit your work to us is to publish it on GitHub as a private repo (just invite @adamcooke to it). Alternatively, send us a zip file with the full codebase within.
