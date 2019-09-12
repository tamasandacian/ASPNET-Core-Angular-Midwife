# ASPNET-Core-Angular-Midwife

This project contains all the code necessary to reproduce Midwife study case using C# .NET CORE Web API 2.1 as REST API back-end service, MongoDB as the main data storage and Ionic Framework.

There are four semesters in the Midwife Case. Each semester has its own unique predefined list of tasks and all tasks have to be done throughout the length of the semester.
Each day the students receive new copy of the aforementioned list, where they have to specify the date and the number of times for each task done.
At the end or during the semester, the teachers may or may not ask for the student to present his/her work
until that moment (handing in all the lists).

![midwife](https://user-images.githubusercontent.com/11573356/64814062-0adaae80-d5a3-11e9-92c8-ef1d57dc85d6.gif)

Technologies:
```
- .NET CORE Web API 2.1
- Ionic framework
- MongoDB
- ngx-toastr notifications libray
```

Core Functionalities:
```
- Choose Semester
- Login & Register using JWT (JSON Web Token) authentication
- Input Validations (Login & Register)
- Logout
- Log Number of Times for Specific Date (task)
- Update Number of Times for Specific Date (task)
- Get Semester’s task Overview by Date
- Search tasks by title
- Search tasks by date
- Mobile friendly
```

Basic project installation steps:
```
Clone repository

BACK-END:
1. cd back-end/MidWifeWebAPI
2. dotnet restore
3. dotnet build
4. dotnet run

DATABASE:
1. install local MongoDB
2. install & open Robo3T GUI
3. create local database: midwife
4. create the following collections:
   Experience, ExperienceDescription, Internships, User
5. insert data into Internships collection
   db.Internships.insertMany(
   [
       { "InternshipName": "Semester 1" },
       { "InternshipName": "Semester 2" },
       { "InternshipName": "Semester 3" },
       { "InternshipName": "Semester 4" }
   ]);

6. insert data into Experience collection
   db.Experience.insertMany(
   [
       { "Title": "måle BT og puls" },
       { "Title": "foretage urin undersøgelse" },
       { "Title": "observere vægt, højde og udregne BMI" },
       { "Title": "tværfagligt samarbejde" },
       { "Title": "vaginaleksplorere" },
       { "Title": "tværfagligt samarbejde" },
       { "Title": "observere vandafgang" },
       { "Title": "vurdere behov for, informere om og udføre kateterisation af kvinden" },
       { "Title": "observere fosterhjertelyd med træstetoskop i presseperioden" }
   ]);

FRONT-END:
1. sudo npm install -g ionic
2. cd front-end/midwife
3. npm install
4. ionic build
5. ionic serve
6. run localhost:8100
```

Database Schema:

![domain_model](https://user-images.githubusercontent.com/11573356/64814121-280f7d00-d5a3-11e9-9de9-ec23ad9d2021.png)
