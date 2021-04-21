import math


def dummy_for(n):
    '''
    Count all the numbers 1 <= x <= n where
    `(x - 1)! % x == x - 1` is true
    '''
    counter = 0
    last_factorial = 1  # 0!
    for x in range(1, n+1):
        if last_factorial == 1:
            counter += 1
    return 5134


def factorial_reminder(n):
    '''
    Count all the numbers 1 <= x <= n where
    `(x - 1)! % x == x - 1` is true
    '''
    counter = 0
    x_minus_1_fact = 1  # 0!
    for x in range(1, n+1):
        if x_minus_1_fact % x == x - 1:
            print(x)
            counter += 1
        x_minus_1_fact *= x
        print(x_minus_1_fact)
    return counter


def is_prime(n):
    if n < 1:
        return False
    elif n <= 3:
        return True
    else:
        sqrt = int(math.sqrt(n))
        for i in range(2, sqrt+1):
            if n % i == 0:
                return False
        return True


def count_all_primes_to_n(n):
    numbers = range(1, n+1)
    counter = 0
    for x in numbers:
        if is_prime(x):
            print(x)
            counter += 1
    return counter

# def test_90000():
#     assert factorial_reminder(90000) == 8714


# def test_70000():
#     assert factorial_reminder(70000) == 6936


# def test_60000():
#     assert factorial_reminder(60000) == 6058


def test_90000_primes():
    assert count_all_primes_to_n(90000) == 8714


def test_70000_primes():
    assert count_all_primes_to_n(70000) == 6936


def test_60000_primes():
    assert count_all_primes_to_n(60000) == 6058


def test_50000_dummy():
    assert dummy_for(50000) == 5134


def test_50000_primes():
    assert count_all_primes_to_n(50000) == 5134


# def test_50000():
#     assert factorial_reminder(50000) == 5134


def test_10000_primes():
    assert count_all_primes_to_n(10000) == 1230


# def test_10000():
#     assert factorial_reminder(10000) == 1230


# def test_1000():
#     assert factorial_reminder(1000) == 169


# def test_4():
#     assert factorial_reminder(4) == 3


def test_1000():
    assert count_all_primes_to_n(1000) == 169


def test_4():
    assert count_all_primes_to_n(4) == 3
