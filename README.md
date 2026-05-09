# student-result-system
name = input("Enter student name: ")

m1 = int(input("Enter marks for Subject 1: "))
m2 = int(input("Enter marks for Subject 2: "))
m3 = int(input("Enter marks for Subject 3: "))
m4 = int(input("Enter marks for Subject 4: "))
m5 = int(input("Enter marks for Subject 5: "))

total = m1 + m2 + m3 + m4 + m5
average = total / 5

if average >= 90:
    grade = "A"
elif average >= 75:
    grade = "B"
elif average >= 60:
    grade = "C"
elif average >= 50:
    grade = "D"
else:
    grade = "Fail"

print("\n--- Student Result ---")
print("Name:", name)
print("Total Marks:", total)
print("Average:", average)
print("Grade:", grade)