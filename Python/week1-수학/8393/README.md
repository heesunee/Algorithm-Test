# 파이썬 문법

```python
n = int(input())
num = 0

for i in range(1, n+1):
    num += i

print(num)
```

n = int(input())

input()에 있는 값을 int 함수에 넣어서 정수로 만들어서 n에 저장한다

for i in range(1, n+1):
num += i

i는 1부터 n까지 (3이면 1~3까지) 반복하고,
num에 1부터 3까지 저장한다

print(num)
