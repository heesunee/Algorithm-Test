import sys
input = sys.stdin.readline

m, n = map(int, input().split())

is_Prime = [True] * (n+1)
is_Prime[0] = False
is_Prime[1] = False

for i in range (2, int(n**0.5)+1):
    if is_Prime[i]:
        for j in range (i*i, n+1, i):
            is_Prime[j] = False

for i in range(m,n+1):
    if(is_Prime[i]):
        print(i)