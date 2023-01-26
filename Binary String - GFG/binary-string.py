#User function Template for python3

class Solution:
    
    #Function to count the number of substrings that start and end with 1.
    def binarySubstring(self,n,s):
        #code here

        # Input: an integer(length of the given string) and a string
        # Output: integer
        # Constraints: time complexity
        # Edge cases: if the input string doesn't contain '1', return 0
        
        # e.g. '1111'
        
        # if the input string doesn't contain '1'
        # result = 0
        count = 0
        for i in range(0, n):
            if s[i] == '1':
                count += 1
        return int(count * (count-1) / 2)
        
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import atexit
import io
import sys

_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER

@atexit.register

def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())

if __name__=='__main__':
    t = int(input())
    for i in range(t):
        n=int(input())
        s=str(input())
        obj = Solution()
        print(obj.binarySubstring(n,s))
# } Driver Code Ends