#!/bin/sh

echo "what is your aim"

read aim

echo "you will definitely become a $aim"

date
pwd
ls

name="raghav"
echo $name
unset name
echo $name

pets=(dog cat fish mouse);

echo "${pets[2]}"

sum=`expr 2 + 2`

echo "value is $sum"

echo "enter first number"
read var1
echo "enter second number"
read var2

diff=`expr $var1 - $var2`

echo -e "difference is $diff \n"
echo "enter first number"
echo "enter first number"



