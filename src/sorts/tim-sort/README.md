# Tim sort

Timsort is a hybrid, stable sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It was implemented by Tim Peters in 2002 for use in the Python programming language. The algorithm finds subsequences of the data that are already ordered (runs) and uses them to sort the remainder more efficiently. This is done by merging runs until certain criteria are fulfilled.

### Complexity

| Time (middle/the worst) | Memory (the worst) |
| ----------------------- | ------------------ |
| O(n log n)/O(n)         | O(n)               |

[More details](https://en.wikipedia.org/wiki/Timsort)

[Source](tim-sort.ts#L5)
