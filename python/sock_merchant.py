#!/bin/python3
"""
"""
import math
import unittest


# Complete the sockMerchant function below.
def sock_merchant(ar):
    count = {}
    for sock in ar:
        if sock not in count:
            count[sock] = 0.5
        else:
            count[sock] += 0.5
    pairs = 0
    for key, val in count.items():
        print(key, val)
        pairs += math.floor(val)
    print(pairs)
    return pairs


class TestSockMerchant(unittest.TestCase):
    def test_1(self):
        self.assertEqual(sock_merchant([1, 2, 1, 2, 1, 3, 2]), 2)

    def test_2(self):
        self.assertEqual(sock_merchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3)


if __name__ == '__main__':
    unittest.main()
