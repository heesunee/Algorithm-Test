import sys
input = sys.stdin.read().splitlines()
numbers = list(map(int, input[:-1]))

MAX = 2 * max(numbers)
isPrime = [True] * (MAX + 1)
isPrime[0] = isPrime[1] = False

for i in range (2, int(MAX ** 0.5) +1):
    if(isPrime):
        for j in range (i*i, MAX+1, i):
            isPrime[j] = False

for n in numbers:
    count = sum(1 for i in range(n+1, 2*n+1) if isPrime[i])
    print(count)