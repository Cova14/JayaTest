## Pyramid sum

Given the following matrix pyramid-shaped, sum every array inside of it, then multiply the upper and lower (this one starts when the next line has a longer length than the current one) part of the 'pyramid' and find the difference between them.

**Input:**
```

const pyramid = [
    [1], //Upper
    [2, 3], //Upper
    [2, 3, 4], //Lower
    [2, 3], //Lower
    [1], //Lower
]

```

**Expected Output:**

```
40
```

The output's steps:

1. Sum the arrays in the upper side: `[1] = 1` ; `[2, 3] = 5` ; `1 * 5 = 5`
2. Sum the arrays in the lower side: `[2, 3, 4] = 9` ; `[2, 3] = 5` ; `[1] = 1` ; `9 * 5 * 1 = 45`
3. Find the difference between the lower and upper side: `45 - 5 = 40`