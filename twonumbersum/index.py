#**Two Number Sum**
#Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
#If any two numbers in the input array sum up to the target sum, the function should return them in an array, 
# in any order. If no two numbers sum up to the target sum, the function should return an empty array.
#Note that the target sum has to be obtained by summing two different integers in the array; 
#you can't add a single integer to itself in order to obtain the target sum.
#You can assume that there will be at most one pair of numbers summing up to the target sum.
### **Sample Input**
#- `array = [3, 5, -4, 8, 11, 1, -1, 6]`
#- `targetSum = 10`
### **Sample Output**
#`[-1, 11]` // the numbers could be in reverse order

###

def twoNumberSum(array, targetSum):
    pairs = []
    for i in range(len(array)):
        for j in range(i + 1, len(array)):  # avoid repeating pairs and self-pairing
            if array[i] + array[j] == targetSum:
                pairs.extend((array[i], array[j]))
    print(pairs)           
    return pairs

#array = [3, 5, -4, 8, 11, 1, -1, 6]
#twoNumberSum(array, 10)
#Array: [2, 7, 8, 1]
#Target: 9
#x = 9 - 2
#x = 7
#x = 9 - 7
#x = 2
##
#O(n) time |O(n) space
def twoNumberSum2(array, targetSum):
    list = {}
    for value in array:
        complement = targetSum - value
        if complement in list:
            return [complement, value]
        else:
            list[value] = True
array = [2, 1, 7, 8]
print(twoNumberSum2(array, 9))