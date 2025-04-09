# 소수 구하기 문제

# Try 1. 자바스크립트 풀이와 비슷하게 가보자

```python
m, n = map(int, input().split(' '))

for i in range (m, n+1):
    if i<2:
        continue
    for j in range(2, int(i**0.5)+1):
        if i%j ==0:
            break
    else:
        print(i)
```

- m, n에 3과 16값을 넣고 3 ~ 16 사이 반복문을 돌린다
- 0, 1은 소수가 아니기 때문에 바로 다음 반복문으로 넘어가고
- 2 ~ i의 제곱근까지 나눠지는 수가 하나라도 있다면 바로 빠져나간다
- 나눠지는 수가 없으면 소수이므로 출력한다
- 실행은 잘 되지만, 속도는 자바스크립트 보다 느림.... 입력 값이 많을때도 하나 하나 다 검사하므로 속도 성능이 좋지 않음

# Try 2. 에라토스테네스의 체 이용하기

- 에라토스테네스의 체: 2부터 시작해서 특정 수의 배수들을 지워나가는 방식으로 소수를 판별하는 알고리즘
- 0, 1은 제외하고 2는 소수니까, 범위 안의 2의 배수들은 모두 지운다.
- i\*i 부터 n+1까지, i를 더해가면서
- i*i부터 검사하는 이유는, 어차피 3*2는 2\*3에서 이미 지워져있기 때문!

ex)

- 숫자 2: 소수 -> 4, 6, 8 ... 제거
- 숫자 3: 소수 -> 6, 9, 12, 15 ... 제거
- 숫자 4: 이미 제거됨, False라 건너뜀
- 숫자 5: 소수 -> 10, 15, 20 제거 ...

```python
# 파이썬 표준 입출력 관련 도구 모듈듈
import sys

## 빠르게 입력받음음
input = sys.stdin.readline

## m과 n에 각각 3, 16 저장
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
```
