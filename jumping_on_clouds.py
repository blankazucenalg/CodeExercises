#!/bin/python3

"""
Emma is playing a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus 
cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma 
to jump from her starting position to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. 
For example, [0,1,0,0,0,1,0] indexed from 0...6. 
The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. 
She could follow the following two paths: 0->2->4->6 or 0->2->3->4->6. The first path takes 3 jumps while the second takes 4.

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
Input Format

The first line contains an integer n, the total number of clouds. 
The second line contains n space-separated binary integers describing clouds c[i] where 0 <= i < n.

Constraints
2 <= n <= 100
c[i] E  {0,1}
c[0] = c[n-1] = 0

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input 0

7
0 0 1 0 0 1 0
Sample Output 0

4
Explanation 0:
Emma must avoid c[2] and c[5]. She can win the game with a minimum of 4 jumps:

jump(2).png

Sample Input 1

6
0 0 0 0 1 0
Sample Output 1

3
Explanation 1:
The only thundercloud to avoid is . Emma can win the game in  jumps:

jump(5).png
"""
import unittest


# Complete the jumpingOnClouds function below.
def jumping_on_clouds(c):
    jumps = 0
    idx = 0
    last_idx = len(c) - 1
    while idx < last_idx:
        if (idx + 2 <= last_idx) and c[idx + 2] == 0:
            jumps += 1
            idx += 2
        elif (idx + 1 <= last_idx) and c[idx + 1] == 0:
            jumps += 1
            idx += 1
        else:  # Avoid forever loop, there's no way to jump
            raise ValueError('There\'s no way to win the game')

    print(jumps)
    return jumps


class TestJumpingOnClouds(unittest.TestCase):
    def test_1(self):
        self.assertEqual(jumping_on_clouds([0, 0, 0, 0, 1, 0]), 3)

    def test_2(self):
        self.assertEqual(jumping_on_clouds([0, 0, 1, 0, 0, 1, 0]), 4)

    def test_3(self):
        self.assertEqual(jumping_on_clouds([0, 0, 0, 1, 0, 0]), 3)


if __name__ == '__main__':
    unittest.main()
