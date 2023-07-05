# Welcome

Welcome to Inertia. This is a Fitness app that teaches you the best ways to make progress in the gym and provides you a workout split and meal-plan based on what your goals are.

## Home Page

The home page is where you will see the workout split that was created for you. When setting up your account, the client filters different workout splits based on your goals (strength, hypertrophy, etc), your experience level, and how many days a week you stated you would be free to workout. All of the information about your split is stored in an instance of PostgreSQL which is hosted on Supabase. On the home page below you can view your workout for today and also swipe left to see what your future workouts will look like. Pressing the green "start" button will direct you to a walkthrough of today's workout.

![img (1)](https://github.com/AnandHalwan/InertiaApp/assets/105897628/5fb22318-8aa9-4a16-af96-699559b982d7)


## Workout Walkthrough

When doing your workout, Inertia allows you to input the weight and reps that you performed for a particular set and start a rest timer for you. The inputted weight and reps are stored in Supabase along with the current date which is useful data for calculating your progress over time and displaying that progress on a graph which will be shown after this section.

https://github.com/AnandHalwan/InertiaApp/assets/105897628/66a59186-423e-41de-a081-0d927f14a937

## Exercise Information

Each exercise has an info screen that can be reached by pressing the little blue "i" icon showed in the above video. The exercise info screen for a particular exercise like bench press displays a graph of your progress over time for that exercise can be filtered by different date ranges.

![unnamed (2)](https://github.com/AnandHalwan/InertiaApp/assets/105897628/c81732f0-a992-4552-b080-abbb7cd68815)



