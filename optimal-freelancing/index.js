/*
Optimal Freelancing

You recently started freelance software development and have been offered a variety of job opportunities. Each job has a deadline, meaning there is no value in completing the work after the deadline. Additionally, each job has an associated payment representing the profit for completing that job. Given this information, write a function that returns the maximum profit that can be obtained in a 7-day period.

Each job will take 1 full day to complete, and the deadline will be given as the number of days left to complete the job. For example, if a job has a deadline of 1, then it can only be completed if it is the first job worked on. If a job has a deadline of 2, then it could be started on the first or second day.

Note: There is no requirement to complete all of the jobs. Only one job can be worked on at a time, meaning that in some scenarios it will be impossible to complete them all.

jobs = [
  {"deadline": 1, "payment": 1},
  {"deadline": 2, "payment": 1},
  {"deadline": 2, "payment": 2}
]

--

Sample output: 3
 
*/

// O(n * log(n)) time | O(1) space — where n is the number of jobs
function optimalFreelancing(jobs) {
  const LENGTH_OF_WEEK = 7;
  let profit = 0;

  // Sort jobs by payment (descending)
  jobs.sort((jobA, jobB) => jobB.payment - jobA.payment);

  // Create a 7-day timeline (false = free day)
  const timeline = new Array(LENGTH_OF_WEEK).fill(false);

  // Assign jobs
  for (const job of jobs) {
    // The latest possible day to finish this job
    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);

    // Find the latest available day before or on the deadline
    for (let time = maxTime - 1; time >= 0; time--) {
      if (timeline[time] === false ){
        timeline[time] = true;
        profit += job.payment;
        break;
      }
    }
  }

  return profit;
}

// ✅ Example test
const jobs = [
  { deadline: 1, payment: 1 },
  { deadline: 2, payment: 1 },
  { deadline: 2, payment: 2 }
];

console.log(optimalFreelancing(jobs)); // Output: 3
