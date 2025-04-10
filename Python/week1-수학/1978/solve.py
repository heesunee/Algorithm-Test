import sys

N = int(sys.stdin.readline())
numbers = list(map(int, sys.stdin.readline().split()))

MAX = max(numbers)
isPrime = [True] * (MAX +1)
isPrime[0] = isPrime[1] = False

for i in range (2, int(MAX**0.5)+1):
    if isPrime[i]:
        for j in range(i*i, MAX+1, i):
            isPrime[j] = False


count = sum(1 for n in numbers if isPrime[n])

print(count)