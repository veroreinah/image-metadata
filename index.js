const ExifTool = require("exiftool-vendored").ExifTool;
const IMAGE_PATH = "./image/image.jpg";

if (process.argv?.length <= 2) {
  console.error(
    "ERROR. At least one argument (<read | write>) must be passed."
  );
  process.exit();
}

const task = process.argv[2];
const exiftool = new ExifTool({ taskTimeoutMillis: 5000 });

if (task === "read") {
  exiftool
    .read(IMAGE_PATH)
    .then((tags) => console.log("Image 'Comment' tag:", tags.Comment))
    .catch((err) => console.error(err))
    .finally(() => {
      process.exit();
    });
} else if (task === "write") {
  const tags = process.argv[3];

  if (!tags) {
    console.error(
      'ERROR. When first argument is "write", a second argument (image tag value) must be passed.'
    );
    process.exit();
  } else {
    exiftool
      .write(IMAGE_PATH, { Comment: tags })
      .then(() => console.log("Image 'Comment' tag successfully updated."))
      .catch((err) => console.error(err))
      .finally(() => {
        process.exit();
      });
  }
} else {
  console.error("ERROR. Provided argument is not correct (<read | write>).");
  process.exit();
}
