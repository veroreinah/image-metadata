# image-metadata

Minor project to change image metadata

## Usage

This script can be use both to write or read the "Comment" tag of images. It has only be tested with `jpg` and `png` images.

Images must be placed in the **image** folder in the root of this project and must be called "image.jpg" or "image.png" in order for the script to work.

### Read option

To get the value of the "Comment" tag, you must run the following script:

```
node index.js read
```

### Write option

To update "Comment" tag, you must run the following script:

```
node index.js write <the text you want the "Comment" tag to have>
```
