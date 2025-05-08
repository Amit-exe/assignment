Assumptions
There are always 3 checkout counters(But can be changed by changing value of numberOfCounters in App.jsx).

Customers add a certain number of items to the queue.

Invalid inputs (like 0 or non-numeric values) are ignored.

Each counter has its own queue, and we select the one with the least items.

How It Works
When a customer enters the number of items, the system checks if the input is valid.

The counter with the fewest total items is selected by findMinSum which iterates Counter sums stored in seperate array at corresponding index as sum of that counter.

The counter is updated with the new items and the UI reflects the changes.

Time Complexity
The function to find the counter with the least items takes O(n), where n is the number of counters (3 in this case).

Updating a counter takes O(m), where m is the number of items in that counter.

Overall Time complexity is O(n+m) where n is number of counters and m is number of elements in counter

The time complexity is fairly constant due to the small size of the counters.

How to Run:

git clone https://github.com/Amit-exe/assignment.git

cd assignment

npm install

npm run dev
