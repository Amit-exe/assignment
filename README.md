# Hypermart Checkout System

## Assumptions

- There are always 3 checkout counters (but this can be changed by modifying the `numberOfCounters` value in `App.jsx`).
- Customers add a certain number of items to the queue.
- Invalid inputs (like 0 or non-numeric values) are ignored.
- Each counter has its own queue, and the counter with the fewest total items is selected.

## How It Works

- When a customer enters the number of items, the system checks if the input is valid.
- The counter with the fewest total items is selected by `findMinSum`, which iterates over an array of counter sums, each stored at the corresponding index as the sum of that counter.
- The counter is updated with the new items, and the UI reflects the changes.

## Time Complexity

- The function to find the counter with the least items takes **O(n)**, where `n` is the number of counters (3 in this case).
- Updating a counter takes **O(m)**, where `m` is the number of items in that counter.
- The overall time complexity is **O(n + m)**, where `n` is the number of counters and `m` is the number of elements in a counter.
- The time complexity is fairly constant due to the small size of the counters.

## How to Run:

1. Clone the repository:

   ```bash
   git clone https://github.com/Amit-exe/assignment.git
   cd assignment
   npm install
   npm run dev


   ```
