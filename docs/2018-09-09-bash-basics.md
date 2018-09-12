---
id: bash-basics
title: Bash Basics
sidebar_label: Bash
author: Zhen-Qi Liu
authorURL: http://echoliu.me
---

```bash
pwd # print working directory
ls -R -t # The files/directories in each directory are sorted by time of last change.
cd - # return to last step

mv /path/to/file . # move to current directory
touch file.txt # create new file or change file modification time

rm -r -i /some/path/ # remove safely with prompt

wc *.txt # word count all text files
sort -n *.txt # sort by numeral value
head -n 1 *.txt # show head of file

echo 'hello' > file # overwrite file
echo 'hello' >> file # append to file

wc -l < notes.txt # read in file

head -n 3 file1.txt > file2.txt
tail -n 2 file1.txt >> file2.txt
cat file2.txt # returns The first 3 lines and the last 2 lines of file1.txt

wc -l *.txt | sort -n # use pip to word count and sort
wc -l *.txt | sort -n | head -n 1 # more

cut -d , -f 2 file.txt # uses the -d flag to separate each line by comma, and the -f flag to print the second field in each line
cut -d, -f 2 file.txt | sort | uniq -c # produce a table that shows the total count of each type of item in the file

history | tail -n 5 # list previous commands
!NUM # do the job
```

```bash
for datafile in *.txt
do
    ls $datafile
done
```

```bash
head -n 15 "$1" | tail -n 5
# $1 means “the first filename (or other argument) on the command line”
bash middle.sh octane.pdb
head -n "$2" "$1" | tail -n "$3"
wc -l "$@" | sort -n

history | tail -n 5 > redo-figure-3.sh

# The -x flag causes bash to run in debug mode. This prints out each command as it is run, which will help you to locate errors.
```