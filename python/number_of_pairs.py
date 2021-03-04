"""
arr = [1,2,3,4]
k = 5
result = 2
"""
import unittest


def number_of_pairs(arr, k):
    result = 0
    while len(arr) > 0:
        x = arr.pop()
        y = k - x
        tmp = [a for a in arr if a == y]
        result += len(tmp)
    print(result)
    return result


def number_of_pairs_2(arr, k):
    d = {}
    result = 0
    for x in arr:
        if x not in d:
            d[x] = 1
        else:
            d[x] += 1
    for x in arr:
        y = k - x
        if y in d:
            result += d[y]
    print(result / 2)
    return result / 2


class TestNumberOfPairs(unittest.TestCase):
    def test_1(self):
        self.assertEqual(number_of_pairs([1, 2, 3, 4], 5), 2)

    def test_2(self):
        self.assertEqual(number_of_pairs([-1, -2, 3, 4], 2), 2)

    def test_3(self):
        self.assertEqual(number_of_pairs([1, 2, 2, 2], 3), 3)

    def test_4(self):
        self.assertEqual(number_of_pairs_2([1, 2, 3, 4], 5), 2)

    def test_5(self):
        self.assertEqual(number_of_pairs_2([-1, -2, 3, 4], 2), 2)

    def test_6(self):
        self.assertEqual(number_of_pairs_2([1, 2, 2, 2], 3), 3)


if __name__ == '__main__':
    unittest.main()
