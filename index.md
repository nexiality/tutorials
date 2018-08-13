---
layout: default
title: Nexial Tutorials
permalink: /index
---


# Welcome!
[Nexial](https://nexiality.github.io/documentation/) is an automation platform designed to ease the entrance and 
ongoing cost of test automation so that quality engineers can focus on building useful test suites and engaging with 
their respective team as [quality advocates](https://watirmelon.blog/2013/02/28/the-new-qa-the-quality-advocate/). 
The simple approach towards automation in Nexial encourages the entire team to engage in software quality and in 
automation. Moreover, while being best known for test automation, Nexial can also be used towards non-test related 
automation.

In a nutshell, here are some of Nexial's core design considerations:
- ***Test automation for everyone*** - no coding required (but supported), simple and relevant to all project 
  participants.
- Hybrid, Keyword-driven and standards-based; simple/familiar spreadsheet (Excel) format.
- Supports many application architecture and interface (e.g. web/browser, desktop, API/REST/SOAP, database, batch, ssh).
- Extensive and flexible test and data management.
- Local and remote (Jenkins, BrowserStack) support.
- Integration to existing collaboration tools such as JIRA and Confluence.
- Supports FRIP (functional, regression, integration, performance testing).

For better understanding of Nexial, check out 
**[Nexial Introduction](http://nexiality.github.io/documentation/userguide/IntroductionAndFAQ)**.


## Nexial in Action
To see Nexial in action, watch this short demo showcasing how Nexial: 
1. Performs a few Google searches (browser automation), 
2. Uses one of the search results to invoke a few REST API calls (API automation),
3. Bulk generates a series of SQL INSERT statements (text manipulation via Nexial expression),
4. Stores API responses and Google search stats into database (database automation),
5. Finally, performs a few simple data analytical queries and reports (database automation, Nexial expression). 

[Nexial in Action](https://www.youtube.com/watch?v=b372XikN1YU&cc_lang_pref=en&cc_load_policy=1)
<iframe width="560" height="555" src="https://www.youtube-nocookie.com/embed/b372XikN1YU?cc_lang_pref=en&cc_load_policy=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<br/>

**Wanna try? Have at it!**
1. Download [Nexial distro](https://github.com/nexiality/nexial-core/releases).
2. Follow the [installation guide](https://nexiality.github.io/documentation/userguide/InstallingNexial) (most steps 
   are one-time work).
3. Download the ["nexial-in-action" project](https://nexiality.github.io/documentation/nexial-in-action.zip) and unzip
   it to local directory.
4. Run it!<br/>
   Mac/Linux:
   ```
   cd $NEXIAL_HOME/bin
   ./nexial.sh -plan <MY_NEXIAL_IN_ACTION_PROJECT>/artifact/plan/demo1-plan.xlsx
   ```

   Windows:
   ```
   cd %NEXIAL_HOME%\bin
   nexial.cmd -plan <MY_NEXIAL_IN_ACTION_PROJECT>\artifact\plan\demo1-plan.xlsx
   ```


## Available Tutorials
- [Nexial Primer](primer/)
- [Database Automation](rdbms/)
<!-- - [API Automation](ws/)-->
<!-- - [Nexial Expression](expression/)-->
<!-- - [Browser Automation](web/)-->

---

