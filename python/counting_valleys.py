#!/bin/python3

"""
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a downhill, D step. 
Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. 
We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is [DDUUUUDD], he first enters a valley 2 units deep. 
Then he climbs out an up onto a mountain 4 units high. Finally, he returns to sea level and ends his hike.

Function Description

Complete the countingValleys function in the editor below. 
It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path
Input Format

The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

Constraints

Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

_/\      _
   \    /
    \/\/
He enters and leaves one valley.
"""
import unittest


# Complete the countingValleys function below.
def counting_valleys(s):
    valleys = 0
    current_height = 0
    enum = {'U': 1, 'D': -1}
    for step in s:
        prev_height = current_height
        current_height += enum[step]
        if current_height < 0 and prev_height == 0:
            valleys += 1
    print(valleys)
    return valleys


class TestCountingValleys(unittest.TestCase):
    def test_1(self):
        self.assertEqual(counting_valleys('DDUUUUDD'), 1)

    def test_2(self):
        self.assertEqual(counting_valleys('DDUUUDUUDDDDDDUUUU'), 2)


if __name__ == '__main__':
    unittest.main()
