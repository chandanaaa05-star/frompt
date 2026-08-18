a=int(input())
l=[int(input()) for k in range(a)]
som=0
for i in l:
    som=som+i
print(som)
'''
'''
#min el from int array
a=int(input("enter range"))
l=[input("enter list") for i in range(a)]
n=0
j=1
while j<=len(l)-1:
    if l[n]<l[j]:
        l[n]=l[n]
    else:
        l[n]=l[j]
    j=j+1
print([l[n]])