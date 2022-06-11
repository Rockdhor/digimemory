#!/bin/bash
here = $(pwd)
cd ../images
touch imports
for file in `ls`
    do
        echo "import ${file%.*} from \"./images/$file\"" >> imports
        echo "{\"name\" : \"${file%.*}\", \"image\" : ${file%.*}, \"clicked\" : false}," >> objects
    done


cp imports $here
cp objects $here
cd $here